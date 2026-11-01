/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/contact-get.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/contact-get.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * Get contact — Read one contact, with its associations when asked.
 *
 * https://developers.hubspot.com/docs/reference/api/crm/objects/contacts
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { hubspotMeta } from "../service.js";

export const HUBSPOT_CONTACT_GET_KIND = "@particle-academy/hubspot_contact_get";
export const HUBSPOT_CONTACT_GET_OPERATION = "contact_get";

export const HUBSPOT_CONTACT_GET_META = hubspotMeta("action", "get a contact", "https://developers.hubspot.com/docs/reference/api/crm/objects/contacts");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const HUBSPOT_CONTACT_GET_OUTPUT: OutputField[] = [
  {
    "path": "data.id",
    "type": "string",
    "description": "HubSpot's contact id. A NUMERIC STRING, not a number; pass it back as given."
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

export const hubspotContactGetKind: NodeKindDefinition = defineConnectorKind(HUBSPOT_CONTACT_GET_META, {
  name: HUBSPOT_CONTACT_GET_KIND,
  aliases: ["hubspot_contact_get"],
  label: "Get contact",
  description: "Read one contact, with its associations when asked.",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "none",
  outputShape: HUBSPOT_CONTACT_GET_OUTPUT,
  configSchema: [
    {
      "type": "text",
      "key": "contactId",
      "label": "Contact id",
      "required": true,
      "description": "The contact's HubSpot id (a numeric string)."
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
    summarize(HUBSPOT_CONTACT_GET_META, config as Record<string, unknown>, "get a contact"),
});
