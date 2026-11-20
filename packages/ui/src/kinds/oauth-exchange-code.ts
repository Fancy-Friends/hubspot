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
 * Exchange OAuth code — Exchange the authorization code HubSpot sent to your
 * redirect URL for an access token and a refresh token.
 *
 * https://developers.hubspot.com/docs/api-reference/legacy/authentication/oauth-tokens/v1/migration-guide
 *
 * `unsafe-to-replay`.
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { hubspotMeta } from "../service.js";

export const HUBSPOT_OAUTH_EXCHANGE_CODE_KIND = "@particle-academy/hubspot_oauth_exchange_code";
export const HUBSPOT_OAUTH_EXCHANGE_CODE_OPERATION = "oauth_exchange_code";

export const HUBSPOT_OAUTH_EXCHANGE_CODE_META = hubspotMeta("action", "exchange an OAuth code for tokens", "https://developers.hubspot.com/docs/api-reference/legacy/authentication/oauth-tokens/v1/migration-guide");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const HUBSPOT_OAUTH_EXCHANGE_CODE_OUTPUT: OutputField[] = [
  {
    "path": "data.access_token",
    "type": "string",
    "description": "The new access token. Store it as the connection's accessToken."
  },
  {
    "path": "data.refresh_token",
    "type": "string",
    "description": "The installation's refresh token. Store it as the connection's refreshToken; it does not expire while the app stays installed."
  },
  {
    "path": "data.expires_in",
    "type": "number",
    "description": "Seconds until the access token expires (1800 for HubSpot)."
  },
  {
    "path": "data.token_type",
    "type": "string",
    "description": "The token type, `bearer`."
  }
];

export const hubspotOauthExchangeCodeKind: NodeKindDefinition = defineConnectorKind(HUBSPOT_OAUTH_EXCHANGE_CODE_META, {
  name: HUBSPOT_OAUTH_EXCHANGE_CODE_KIND,
  aliases: ["hubspot_oauth_exchange_code"],
  label: "Exchange OAuth code",
  description: "Exchange the authorization code HubSpot sent to your redirect URL for an access token and a refresh token.",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "unsafe-to-replay",
  outputShape: HUBSPOT_OAUTH_EXCHANGE_CODE_OUTPUT,
  configSchema: [
    {
      "type": "text",
      "key": "code",
      "label": "Authorization code",
      "required": true,
      "description": "The `code` query parameter HubSpot added to your redirect URL. Single-use, and short-lived."
    },
    {
      "type": "text",
      "key": "redirectUri",
      "label": "Redirect URL",
      "required": true,
      "description": "The redirect URL the install was started with, exactly as sent: HubSpot refuses the exchange if it differs."
    }
  ],
  defaultConfig: {
    "mode": "auto"
  },
  renderBody: ({ config }) =>
    summarize(HUBSPOT_OAUTH_EXCHANGE_CODE_META, config as Record<string, unknown>, "exchange an OAuth code for tokens"),
});
