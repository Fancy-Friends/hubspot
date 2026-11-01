/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/deal-get.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/deal-get.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * Get deal — Read one deal, with its associations when asked.
 *
 * https://developers.hubspot.com/docs/reference/api/crm/objects/deals
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { hubspotMeta } from "../service.js";

export const HUBSPOT_DEAL_GET_KIND = "@particle-academy/hubspot_deal_get";
export const HUBSPOT_DEAL_GET_OPERATION = "deal_get";

export const HUBSPOT_DEAL_GET_META = hubspotMeta("action", "get a deal", "https://developers.hubspot.com/docs/reference/api/crm/objects/deals");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const HUBSPOT_DEAL_GET_OUTPUT: OutputField[] = [
  {
    "path": "data.id",
    "type": "string",
    "description": "HubSpot's deal id. A NUMERIC STRING, not a number; pass it back as given."
  },
  {
    "path": "data.properties",
    "type": "object",
    "description": "The requested properties, every value a string or null."
  },
  {
    "path": "data.createdAt",
    "type": "string",
    "description": "ISO 8601 timestamp."
  },
  {
    "path": "data.updatedAt",
    "type": "string",
    "description": "ISO 8601 timestamp."
  },
  {
    "path": "data.archived",
    "type": "boolean",
    "description": "FALSE for a live record."
  },
  {
    "path": "data.associations",
    "type": "object",
    "description": "Associated ids by object type, when associations were asked for."
  }
];

export const hubspotDealGetKind: NodeKindDefinition = defineConnectorKind(HUBSPOT_DEAL_GET_META, {
  name: HUBSPOT_DEAL_GET_KIND,
  aliases: ["hubspot_deal_get"],
  label: "Get deal",
  description: "Read one deal, with its associations when asked.",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "none",
  outputShape: HUBSPOT_DEAL_GET_OUTPUT,
  configSchema: [
    {
      "type": "text",
      "key": "dealId",
      "label": "Deal id",
      "required": true,
      "description": "The deal's HubSpot id (a numeric string)."
    },
    {
      "type": "text",
      "key": "properties",
      "label": "Properties",
      "placeholder": "dealname,amount,dealstage",
      "description": "Comma-separated property names to return. HubSpot returns a small default set otherwise."
    },
    {
      "type": "text",
      "key": "associations",
      "label": "Associations",
      "placeholder": "companies,contacts",
      "description": "Comma-separated object types whose associated ids to return."
    }
  ],
  defaultConfig: {
    "mode": "auto"
  },
  renderBody: ({ config }) =>
    summarize(HUBSPOT_DEAL_GET_META, config as Record<string, unknown>, "get a deal"),
});
