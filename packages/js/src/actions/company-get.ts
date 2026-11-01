/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/company-get.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/company-get.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * Read one company, with its associations when asked.
 *
 * GET /crm/v3/objects/companies/{companyId} —
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

export const COMPANY_GET_OPERATION = "company_get";

export type CompanyGetOptions = {
  /** The node's resolved config. Keys: companyId, properties, associations. */
  config: Record<string, unknown>;
  credentials?: Record<string, string | undefined>;
  mode?: RequestedMode;
  connectionId?: string | null;
  input?: unknown;
  attempts?: number;
  /** Override the transport. The only way to exercise this without a network. */
  transport?: Transport;
};

export async function hubspotCompanyGet(options: CompanyGetOptions): Promise<ConnectorResult> {
  const config = options.config ?? {};

  if (config.companyId === undefined || config.companyId === null || config.companyId === "") {
    throw new Error(`company_get: "companyId" is required (Company id).`);
  }

  return callConnector(HUBSPOT, {
    operation: COMPANY_GET_OPERATION,
    config,
    input: options.input,
    ...(options.credentials === undefined ? {} : { credentials: options.credentials }),
    ...(options.mode === undefined ? {} : { mode: options.mode }),
    ...(options.connectionId === undefined ? {} : { connectionId: options.connectionId }),
    ...(options.attempts === undefined ? {} : { attempts: options.attempts }),
    ...(options.transport === undefined ? {} : { transport: options.transport }),
    request: {
      method: "GET",
      path: `/crm/v3/objects/companies/${encodeURIComponent(String(config.companyId))}`,
      query: {
        ...(config.properties !== undefined && config.properties !== null && config.properties !== "" ? { "properties": String(config.properties) } : {}),
        ...(config.associations !== undefined && config.associations !== null && config.associations !== "" ? { "associations": String(config.associations) } : {}),
      },
    },
  });
}
