/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/oauth-revoke.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/oauth-revoke.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * Revoke OAuth token — Revoke a refresh token, on uninstall or disconnect.
 * Replaces the v1 DELETE.
 *
 * https://developers.hubspot.com/docs/api-reference/legacy/authentication/oauth-tokens/v1/migration-guide
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { hubspotMeta } from "../service.js";

export const HUBSPOT_OAUTH_REVOKE_KIND = "@particle-academy/hubspot_oauth_revoke";
export const HUBSPOT_OAUTH_REVOKE_OPERATION = "oauth_revoke";

export const HUBSPOT_OAUTH_REVOKE_META = hubspotMeta("action", "revoke a refresh token", "https://developers.hubspot.com/docs/api-reference/legacy/authentication/oauth-tokens/v1/migration-guide");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const HUBSPOT_OAUTH_REVOKE_OUTPUT: OutputField[] = [
  {
    "path": "data",
    "type": "object",
    "description": "HubSpot's answer, as it arrived; null when it answers with an empty body."
  }
];

export const hubspotOauthRevokeKind: NodeKindDefinition = defineConnectorKind(HUBSPOT_OAUTH_REVOKE_META, {
  name: HUBSPOT_OAUTH_REVOKE_KIND,
  aliases: ["hubspot_oauth_revoke"],
  label: "Revoke OAuth token",
  description: "Revoke a refresh token, on uninstall or disconnect. Replaces the v1 DELETE.",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "idempotent",
  outputShape: HUBSPOT_OAUTH_REVOKE_OUTPUT,
  configSchema: [
    {
      "type": "text",
      "key": "token",
      "label": "Token",
      "required": true,
      "description": "The refresh token to revoke."
    },
    {
      "type": "select",
      "key": "tokenTypeHint",
      "label": "Token type",
      "description": "Which kind of token `token` is. Optional.",
      "options": [
        {
          "value": "refresh_token",
          "label": "Refresh token"
        },
        {
          "value": "access_token",
          "label": "Access token"
        }
      ]
    }
  ],
  defaultConfig: {
    "mode": "auto"
  },
  renderBody: ({ config }) =>
    summarize(HUBSPOT_OAUTH_REVOKE_META, config as Record<string, unknown>, "revoke a refresh token"),
});
