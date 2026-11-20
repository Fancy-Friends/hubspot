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
 * Refresh OAuth token — Use the connection's refresh token to get a new access
 * token. HubSpot access tokens last 30 minutes.
 *
 * https://developers.hubspot.com/docs/api-reference/legacy/authentication/oauth-tokens/v1/migration-guide
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { hubspotMeta } from "../service.js";

export const HUBSPOT_OAUTH_REFRESH_KIND = "@particle-academy/hubspot_oauth_refresh";
export const HUBSPOT_OAUTH_REFRESH_OPERATION = "oauth_refresh";

export const HUBSPOT_OAUTH_REFRESH_META = hubspotMeta("action", "refresh an access token", "https://developers.hubspot.com/docs/api-reference/legacy/authentication/oauth-tokens/v1/migration-guide");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const HUBSPOT_OAUTH_REFRESH_OUTPUT: OutputField[] = [
  {
    "path": "data.access_token",
    "type": "string",
    "description": "The new access token. Replace the connection's accessToken with it."
  },
  {
    "path": "data.refresh_token",
    "type": "string",
    "description": "The same refresh token, returned again. HubSpot's does not rotate."
  },
  {
    "path": "data.expires_in",
    "type": "number",
    "description": "Seconds until the new access token expires (1800 for HubSpot)."
  },
  {
    "path": "data.token_type",
    "type": "string",
    "description": "The token type, `bearer`."
  }
];

export const hubspotOauthRefreshKind: NodeKindDefinition = defineConnectorKind(HUBSPOT_OAUTH_REFRESH_META, {
  name: HUBSPOT_OAUTH_REFRESH_KIND,
  aliases: ["hubspot_oauth_refresh"],
  label: "Refresh OAuth token",
  description: "Use the connection's refresh token to get a new access token. HubSpot access tokens last 30 minutes.",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "idempotent",
  outputShape: HUBSPOT_OAUTH_REFRESH_OUTPUT,
  configSchema: [],
  defaultConfig: {
    "mode": "auto"
  },
  renderBody: ({ config }) =>
    summarize(HUBSPOT_OAUTH_REFRESH_META, config as Record<string, unknown>, "refresh an access token"),
});
