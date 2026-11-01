/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/owner-list.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/owner-list.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * Page through the portal's owners: the users records can be assigned to.
 *
 * GET /crm/v3/owners —
 * https://developers.hubspot.com/docs/reference/api/crm/owners
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

export const OWNER_LIST_OPERATION = "owner_list";

export type OwnerListOptions = {
  /** The node's resolved config. Keys: email, limit, after. */
  config: Record<string, unknown>;
  credentials?: Record<string, string | undefined>;
  mode?: RequestedMode;
  connectionId?: string | null;
  input?: unknown;
  attempts?: number;
  /** Override the transport. The only way to exercise this without a network. */
  transport?: Transport;
};

export async function hubspotOwnerList(options: OwnerListOptions): Promise<ConnectorResult> {
  const config = options.config ?? {};

  {
    const n = Number(config.limit);
    const given = config.limit !== undefined && config.limit !== null && config.limit !== "";
    if (given && !(Number.isInteger(n) && n >= 1 && n <= 100)) {
      throw new Error(
        `owner_list: "limit" must be a integer, got ${JSON.stringify(config.limit)}.`,
      );
    }
  }

  return callConnector(HUBSPOT, {
    operation: OWNER_LIST_OPERATION,
    config,
    input: options.input,
    ...(options.credentials === undefined ? {} : { credentials: options.credentials }),
    ...(options.mode === undefined ? {} : { mode: options.mode }),
    ...(options.connectionId === undefined ? {} : { connectionId: options.connectionId }),
    ...(options.attempts === undefined ? {} : { attempts: options.attempts }),
    ...(options.transport === undefined ? {} : { transport: options.transport }),
    request: {
      method: "GET",
      path: "/crm/v3/owners",
      query: {
        ...(config.email !== undefined && config.email !== null && config.email !== "" ? { "email": String(config.email) } : {}),
        ...(config.limit !== undefined && config.limit !== null && config.limit !== "" ? { "limit": Math.trunc(Number(config.limit)) } : {}),
        ...(config.after !== undefined && config.after !== null && config.after !== "" ? { "after": String(config.after) } : {}),
      },
    },
  });
}
