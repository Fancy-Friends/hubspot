/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/company-update.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/company-update.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * Change properties on an existing company.
 *
 * PATCH /crm/v3/objects/companies/{companyId} —
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

export const COMPANY_UPDATE_OPERATION = "company_update";

export type CompanyUpdateOptions = {
  /** The node's resolved config. Keys: companyId, properties. */
  config: Record<string, unknown>;
  credentials?: Record<string, string | undefined>;
  mode?: RequestedMode;
  connectionId?: string | null;
  input?: unknown;
  attempts?: number;
  /** Override the transport. The only way to exercise this without a network. */
  transport?: Transport;
};

export async function hubspotCompanyUpdate(options: CompanyUpdateOptions): Promise<ConnectorResult> {
  const config = options.config ?? {};

  if (config.companyId === undefined || config.companyId === null || config.companyId === "") {
    throw new Error(`company_update: "companyId" is required (Company id).`);
  }

  if (config.properties === undefined || config.properties === null || config.properties === "") {
    throw new Error(`company_update: "properties" is required (Properties).`);
  }

  return callConnector(HUBSPOT, {
    operation: COMPANY_UPDATE_OPERATION,
    config,
    input: options.input,
    ...(options.credentials === undefined ? {} : { credentials: options.credentials }),
    ...(options.mode === undefined ? {} : { mode: options.mode }),
    ...(options.connectionId === undefined ? {} : { connectionId: options.connectionId }),
    ...(options.attempts === undefined ? {} : { attempts: options.attempts }),
    ...(options.transport === undefined ? {} : { transport: options.transport }),
    request: {
      method: "PATCH",
      path: `/crm/v3/objects/companies/${encodeURIComponent(String(config.companyId))}`,
      json: {
        "properties": propertiesMap(config.properties),
      },
    },
  });
}

/** `{ k: "v" }` → `{ "properties": { "k": "v" } }` — a JSON body wants the real object. */
function propertiesMap(value: unknown): Record<string, string> {
  if (!value || typeof value !== "object") return {};

  const out: Record<string, string> = {};
  for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
    if (item !== undefined && item !== null && item !== "") out[key] = String(item);
  }

  return out;
}
