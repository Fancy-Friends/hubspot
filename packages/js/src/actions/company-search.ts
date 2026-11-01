/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/company-search.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/company-search.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * Find companies by property filters, sorts or a text query.
 *
 * POST /crm/v3/objects/companies/search —
 * https://developers.hubspot.com/docs/reference/api/crm/objects/companies
 *
 * Notice what is NOT here: no key, no base URL, no mode check, no retry loop,
 * no fake/real branch. This describes the request; callConnector resolves the
 * connection, picks the estate, and either calls HubSpot or calls the faker.
 */

import {
  callConnector,
  type ConnectorResult,
  type RequestedMode,
  type Transport,
} from "@particle-academy/fancy-connector-core";
import { HUBSPOT } from "../service.js";

export const COMPANY_SEARCH_OPERATION = "company_search";

export type CompanySearchOptions = {
  /** The node's resolved config. Keys: filterGroups, sorts, query, properties, limit, after. */
  config: Record<string, unknown>;
  credentials?: Record<string, string | undefined>;
  mode?: RequestedMode;
  connectionId?: string | null;
  input?: unknown;
  attempts?: number;
  /** Override the transport. The only way to exercise this without a network. */
  transport?: Transport;
};

export async function hubspotCompanySearch(options: CompanySearchOptions): Promise<ConnectorResult> {
  const config = options.config ?? {};

  if (typeof config.filterGroups === "string" && config.filterGroups !== "") {
    try {
      JSON.parse(config.filterGroups);
    } catch (error) {
      throw new Error(`company_search: "filterGroups" must be JSON: ${(error as Error).message}`);
    }
  }

  if (typeof config.sorts === "string" && config.sorts !== "") {
    try {
      JSON.parse(config.sorts);
    } catch (error) {
      throw new Error(`company_search: "sorts" must be JSON: ${(error as Error).message}`);
    }
  }

  {
    const n = Number(config.limit);
    const given = config.limit !== undefined && config.limit !== null && config.limit !== "";
    if (given && !(Number.isInteger(n) && n >= 1 && n <= 200)) {
      throw new Error(
        `company_search: "limit" must be a integer, got ${JSON.stringify(config.limit)}.`,
      );
    }
  }

  return callConnector(HUBSPOT, {
    operation: COMPANY_SEARCH_OPERATION,
    config,
    input: options.input,
    ...(options.credentials === undefined ? {} : { credentials: options.credentials }),
    ...(options.mode === undefined ? {} : { mode: options.mode }),
    ...(options.connectionId === undefined ? {} : { connectionId: options.connectionId }),
    ...(options.attempts === undefined ? {} : { attempts: options.attempts }),
    ...(options.transport === undefined ? {} : { transport: options.transport }),
    request: {
      method: "POST",
      path: "/crm/v3/objects/companies/search",
      json: {
        ...(config.filterGroups !== undefined && config.filterGroups !== null && config.filterGroups !== "" ? { "filterGroups": typeof config.filterGroups === "string" ? JSON.parse(config.filterGroups) : config.filterGroups } : {}),
        ...(config.sorts !== undefined && config.sorts !== null && config.sorts !== "" ? { "sorts": typeof config.sorts === "string" ? JSON.parse(config.sorts) : config.sorts } : {}),
        ...(config.query !== undefined && config.query !== null && config.query !== "" ? { "query": String(config.query) } : {}),
        ...(config.properties !== undefined && config.properties !== null && config.properties !== "" ? { "properties": propertiesList(config.properties) } : {}),
        ...(config.limit !== undefined && config.limit !== null && config.limit !== "" ? { "limit": Math.trunc(Number(config.limit)) } : {}),
        ...(config.after !== undefined && config.after !== null && config.after !== "" ? { "after": String(config.after) } : {}),
      },
    },
  });
}

/** One value, a ","-separated string, or an array — all end up a list. */
function propertiesList(value: unknown): string[] {
  const items = Array.isArray(value)
    ? value.map(String)
    : typeof value === "string"
      ? value.split(",")
      : [];

  return items.map((item) => item.trim()).filter(Boolean);
}
