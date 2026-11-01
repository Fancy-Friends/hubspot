/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/contact-update.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/contact-update.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * Update contact — Change properties on an existing contact.
 *
 * https://developers.hubspot.com/docs/reference/api/crm/objects/contacts
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { hubspotMeta } from "../service.js";

export const HUBSPOT_CONTACT_UPDATE_KIND = "@particle-academy/hubspot_contact_update";
export const HUBSPOT_CONTACT_UPDATE_OPERATION = "contact_update";

export const HUBSPOT_CONTACT_UPDATE_META = hubspotMeta("action", "update a contact", "https://developers.hubspot.com/docs/reference/api/crm/objects/contacts");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const HUBSPOT_CONTACT_UPDATE_OUTPUT: OutputField[] = [
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
  }
];

export const hubspotContactUpdateKind: NodeKindDefinition = defineConnectorKind(HUBSPOT_CONTACT_UPDATE_META, {
  name: HUBSPOT_CONTACT_UPDATE_KIND,
  aliases: ["hubspot_contact_update"],
  label: "Update contact",
  description: "Change properties on an existing contact.",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "idempotent",
  outputShape: HUBSPOT_CONTACT_UPDATE_OUTPUT,
  configSchema: [
    {
      "type": "text",
      "key": "contactId",
      "label": "Contact id",
      "required": true,
      "description": "The contact's HubSpot id (a numeric string)."
    },
    {
      "type": "keyvalue",
      "key": "properties",
      "label": "Properties",
      "required": true,
      "description": "HubSpot property name → value for the contact. Values are sent as strings, which is how HubSpot stores every property."
    }
  ],
  defaultConfig: {
    "mode": "auto"
  },
  renderBody: ({ config }) =>
    summarize(HUBSPOT_CONTACT_UPDATE_META, config as Record<string, unknown>, "update a contact"),
});
