/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/oauth-refresh.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/oauth-refresh.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * Use the connection's refresh token to get a new access token. HubSpot access
 * tokens last 30 minutes.
 *
 * POST /oauth/2026-03/token —
 * https://developers.hubspot.com/docs/api-reference/legacy/authentication/oauth-tokens/v1/migration-guide
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
import { hubspotDescriptorFor } from "../service.js";

export const OAUTH_REFRESH_OPERATION = "oauth_refresh";

export type OauthRefreshOptions = {
  /** The node's resolved config. Keys: . */
  config: Record<string, unknown>;
  credentials?: Record<string, string | undefined>;
  mode?: RequestedMode;
  connectionId?: string | null;
  input?: unknown;
  attempts?: number;
  /** Override the transport. The only way to exercise this without a network. */
  transport?: Transport;
};

export async function hubspotOauthRefresh(options: OauthRefreshOptions): Promise<ConnectorResult> {
  const config = options.config ?? {};

  return callConnector(hubspotDescriptorFor(OAUTH_REFRESH_OPERATION), {
    operation: OAUTH_REFRESH_OPERATION,
    config,
    input: options.input,
    ...(options.credentials === undefined ? {} : { credentials: options.credentials }),
    ...(options.mode === undefined ? {} : { mode: options.mode }),
    ...(options.connectionId === undefined ? {} : { connectionId: options.connectionId }),
    ...(options.attempts === undefined ? {} : { attempts: options.attempts }),
    ...(options.transport === undefined ? {} : { transport: options.transport }),
    request: {
      method: "POST",
      path: "/oauth/2026-03/token",
      form: {
        "grant_type": "refresh_token",
      },
    },
  });
}
