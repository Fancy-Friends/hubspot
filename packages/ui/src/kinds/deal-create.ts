/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/deal-create.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/deal-create.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * Create deal — Create a deal in HubSpot.
 *
 * https://developers.hubspot.com/docs/reference/api/crm/objects/deals
 *
 * `unsafe-to-replay`.
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { hubspotMeta } from "../service.js";

export const HUBSPOT_DEAL_CREATE_KIND = "@particle-academy/hubspot_deal_create";
export const HUBSPOT_DEAL_CREATE_OPERATION = "deal_create";

export const HUBSPOT_DEAL_CREATE_META = hubspotMeta("action", "create a deal", "https://developers.hubspot.com/docs/reference/api/crm/objects/deals");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const HUBSPOT_DEAL_CREATE_OUTPUT: OutputField[] = [
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
  }
];

export const hubspotDealCreateKind: NodeKindDefinition = defineConnectorKind(HUBSPOT_DEAL_CREATE_META, {
  name: HUBSPOT_DEAL_CREATE_KIND,
  aliases: ["hubspot_deal_create"],
  label: "Create deal",
  description: "Create a deal in HubSpot.",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "unsafe-to-replay",
  outputShape: HUBSPOT_DEAL_CREATE_OUTPUT,
  configSchema: [
    {
      "type": "keyvalue",
      "key": "properties",
      "label": "Properties",
      "required": true,
      "description": "HubSpot property name → value for the new deal. Values are sent as strings, which is how HubSpot stores every property."
    }
  ],
  defaultConfig: {
    "mode": "auto"
  },
  renderBody: ({ config }) =>
    summarize(HUBSPOT_DEAL_CREATE_META, config as Record<string, unknown>, "create a deal"),
});
