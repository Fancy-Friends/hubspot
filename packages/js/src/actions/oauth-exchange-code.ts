/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/oauth-exchange-code.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/oauth-exchange-code.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * Exchange the authorization code HubSpot sent to your redirect URL for an
 * access token and a refresh token.
 *
 * POST /oauth/2026-03/token —
 * https://developers.hubspot.com/docs/api-reference/legacy/authentication/oauth-tokens/v1/migration-guide
 *
 * Notice what is NOT here: no key, no base URL, no mode check, no retry loop,
 * no fake/real branch. This describes the request; callConnector resolves the
 * connection, picks the estate, and either calls HubSpot or calls the faker.
 *
 * sideEffects: unsafe-to-replay.
 */

import {
  callConnector,
  type ConnectorResult,
  type RequestedMode,
  type Transport,
} from "@particle-academy/fancy-connector-core";
import { hubspotDescriptorFor } from "../service.js";

export const OAUTH_EXCHANGE_CODE_OPERATION = "oauth_exchange_code";

export type OauthExchangeCodeOptions = {
  /** The node's resolved config. Keys: code, redirectUri. */
  config: Record<string, unknown>;
  credentials?: Record<string, string | undefined>;
  mode?: RequestedMode;
  connectionId?: string | null;
  input?: unknown;
  attempts?: number;
  /** Override the transport. The only way to exercise this without a network. */
  transport?: Transport;
};

export async function hubspotOauthExchangeCode(options: OauthExchangeCodeOptions): Promise<ConnectorResult> {
  const config = options.config ?? {};

  if (config.code === undefined || config.code === null || config.code === "") {
    throw new Error(`oauth_exchange_code: "code" is required (Authorization code).`);
  }

  if (config.redirectUri === undefined || config.redirectUri === null || config.redirectUri === "") {
    throw new Error(`oauth_exchange_code: "redirectUri" is required (Redirect URL).`);
  }

  return callConnector(hubspotDescriptorFor(OAUTH_EXCHANGE_CODE_OPERATION), {
    operation: OAUTH_EXCHANGE_CODE_OPERATION,
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
        "code": String(config.code),
        "redirect_uri": String(config.redirectUri),
        "grant_type": "authorization_code",
      },
    },
  });
}
