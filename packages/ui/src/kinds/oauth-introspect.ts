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
 * Introspect OAuth token — Ask HubSpot whether a token is still active, and
 * what it is for. Replaces both v1 token-info calls.
 *
 * https://developers.hubspot.com/docs/api-reference/legacy/authentication/oauth-tokens/v1/migration-guide
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { hubspotMeta } from "../service.js";

export const HUBSPOT_OAUTH_INTROSPECT_KIND = "@particle-academy/hubspot_oauth_introspect";
export const HUBSPOT_OAUTH_INTROSPECT_OPERATION = "oauth_introspect";

export const HUBSPOT_OAUTH_INTROSPECT_META = hubspotMeta("action", "check whether a token is active", "https://developers.hubspot.com/docs/api-reference/legacy/authentication/oauth-tokens/v1/migration-guide");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const HUBSPOT_OAUTH_INTROSPECT_OUTPUT: OutputField[] = [
  {
    "path": "data.active",
    "type": "boolean",
    "description": "Whether the token is active (RFC 7662). Every other field HubSpot returns is passed through as it arrived."
  }
];

export const hubspotOauthIntrospectKind: NodeKindDefinition = defineConnectorKind(HUBSPOT_OAUTH_INTROSPECT_META, {
  name: HUBSPOT_OAUTH_INTROSPECT_KIND,
  aliases: ["hubspot_oauth_introspect"],
  label: "Introspect OAuth token",
  description: "Ask HubSpot whether a token is still active, and what it is for. Replaces both v1 token-info calls.",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "none",
  outputShape: HUBSPOT_OAUTH_INTROSPECT_OUTPUT,
  configSchema: [
    {
      "type": "text",
      "key": "token",
      "label": "Token",
      "required": true,
      "description": "The access token or refresh token to check."
    },
    {
      "type": "select",
      "key": "tokenTypeHint",
      "label": "Token type",
      "description": "Which kind of token `token` is. Optional; HubSpot works it out when omitted.",
      "options": [
        {
          "value": "access_token",
          "label": "Access token"
        },
        {
          "value": "refresh_token",
          "label": "Refresh token"
        }
      ]
    }
  ],
  defaultConfig: {
    "mode": "auto"
  },
  renderBody: ({ config }) =>
    summarize(HUBSPOT_OAUTH_INTROSPECT_META, config as Record<string, unknown>, "check whether a token is active"),
});
