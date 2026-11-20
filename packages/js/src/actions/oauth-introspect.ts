/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/oauth-introspect.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/oauth-introspect.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * Ask HubSpot whether a token is still active, and what it is for. Replaces
 * both v1 token-info calls.
 *
 * POST /oauth/2026-03/token/introspect —
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

export const OAUTH_INTROSPECT_OPERATION = "oauth_introspect";

export type OauthIntrospectOptions = {
  /** The node's resolved config. Keys: token, tokenTypeHint. */
  config: Record<string, unknown>;
  credentials?: Record<string, string | undefined>;
  mode?: RequestedMode;
  connectionId?: string | null;
  input?: unknown;
  attempts?: number;
  /** Override the transport. The only way to exercise this without a network. */
  transport?: Transport;
};

export async function hubspotOauthIntrospect(options: OauthIntrospectOptions): Promise<ConnectorResult> {
  const config = options.config ?? {};

  if (config.token === undefined || config.token === null || config.token === "") {
    throw new Error(`oauth_introspect: "token" is required (Token).`);
  }

  return callConnector(hubspotDescriptorFor(OAUTH_INTROSPECT_OPERATION), {
    operation: OAUTH_INTROSPECT_OPERATION,
    config,
    input: options.input,
    ...(options.credentials === undefined ? {} : { credentials: options.credentials }),
    ...(options.mode === undefined ? {} : { mode: options.mode }),
    ...(options.connectionId === undefined ? {} : { connectionId: options.connectionId }),
    ...(options.attempts === undefined ? {} : { attempts: options.attempts }),
    ...(options.transport === undefined ? {} : { transport: options.transport }),
    request: {
      method: "POST",
      path: "/oauth/2026-03/token/introspect",
      form: {
        "token": String(config.token),
        ...(config.tokenTypeHint !== undefined && config.tokenTypeHint !== null && config.tokenTypeHint !== "" ? { "token_type_hint": String(config.tokenTypeHint) } : {}),
      },
    },
  });
}
