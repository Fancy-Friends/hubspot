/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/property-list.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/property-list.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * List property definitions — Every property defined on deals, contacts or
 * companies: name, label, type and the options of an enumeration.
 *
 * https://developers.hubspot.com/docs/reference/api/crm/properties
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { hubspotMeta } from "../service.js";

export const HUBSPOT_PROPERTY_LIST_KIND = "@particle-academy/hubspot_property_list";
export const HUBSPOT_PROPERTY_LIST_OPERATION = "property_list";

export const HUBSPOT_PROPERTY_LIST_META = hubspotMeta("action", "list property definitions", "https://developers.hubspot.com/docs/reference/api/crm/properties");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const HUBSPOT_PROPERTY_LIST_OUTPUT: OutputField[] = [
  {
    "path": "data.results",
    "type": "array",
    "description": "Every property definition on the object."
  },
  {
    "path": "data.results[].name",
    "type": "string",
    "description": "The internal name a record's properties are keyed by."
  },
  {
    "path": "data.results[].label",
    "type": "string",
    "description": "The display label."
  },
  {
    "path": "data.results[].type",
    "type": "string",
    "description": "string, number, date, datetime, enumeration, bool."
  },
  {
    "path": "data.results[].fieldType",
    "type": "string",
    "description": "How HubSpot renders it: text, select, checkbox, …"
  },
  {
    "path": "data.results[].options",
    "type": "array",
    "description": "An enumeration's options: label, value."
  }
];

export const hubspotPropertyListKind: NodeKindDefinition = defineConnectorKind(HUBSPOT_PROPERTY_LIST_META, {
  name: HUBSPOT_PROPERTY_LIST_KIND,
  aliases: ["hubspot_property_list"],
  label: "List property definitions",
  description: "Every property defined on deals, contacts or companies: name, label, type and the options of an enumeration.",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "none",
  outputShape: HUBSPOT_PROPERTY_LIST_OUTPUT,
  configSchema: [
    {
      "type": "select",
      "key": "objectType",
      "label": "Object",
      "required": true,
      "options": [
        {
          "value": "deals",
          "label": "Deals"
        },
        {
          "value": "contacts",
          "label": "Contacts"
        },
        {
          "value": "companies",
          "label": "Companies"
        }
      ]
    }
  ],
  defaultConfig: {
    "mode": "auto"
  },
  renderBody: ({ config }) =>
    summarize(HUBSPOT_PROPERTY_LIST_META, config as Record<string, unknown>, "list property definitions"),
});
