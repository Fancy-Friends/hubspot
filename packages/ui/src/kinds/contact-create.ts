/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/contact-create.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/contact-create.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * Create contact — Create a contact in HubSpot.
 *
 * https://developers.hubspot.com/docs/reference/api/crm/objects/contacts
 *
 * `unsafe-to-replay`.
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { hubspotMeta } from "../service.js";

export const HUBSPOT_CONTACT_CREATE_KIND = "@particle-academy/hubspot_contact_create";
export const HUBSPOT_CONTACT_CREATE_OPERATION = "contact_create";

export const HUBSPOT_CONTACT_CREATE_META = hubspotMeta("action", "create a contact", "https://developers.hubspot.com/docs/reference/api/crm/objects/contacts");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const HUBSPOT_CONTACT_CREATE_OUTPUT: OutputField[] = [
  {
    "path": "mode",
    "type": "string",
    "description": "Which estate this ran against: fake, sandbox or live."
  },
  {
    "path": "connection",
    "type": "string",
    "description": "The connection id that was used."
  },
  {
    "path": "data.id",
    "type": "string",
    "description": "HubSpot's contact id. A NUMERIC STRING, not a number — pass it back as given."
  },
  {
    "path": "data.properties.email",
    "type": "string",
    "description": "The email as HubSpot stored it."
  },
  {
    "path": "data.properties.hs_object_id",
    "type": "string",
    "description": "The same id, repeated inside properties, which is how HubSpot returns it."
  },
  {
    "path": "data.createdAt",
    "type": "string",
    "description": "ISO 8601 timestamp."
  },
  {
    "path": "data.archived",
    "type": "boolean",
    "description": "FALSE for a live contact. Branch on this before acting on one."
  }
];

export const hubspotContactCreateKind: NodeKindDefinition = defineConnectorKind(HUBSPOT_CONTACT_CREATE_META, {
  name: HUBSPOT_CONTACT_CREATE_KIND,
  aliases: ["hubspot_contact_create"],
  label: "Create contact",
  description: "Create a contact in HubSpot.",
  icon: "◐",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "unsafe-to-replay",
  outputShape: HUBSPOT_CONTACT_CREATE_OUTPUT,
  configSchema: [
    {
      "type": "expression",
      "key": "email",
      "label": "Email",
      "example": "{{ $json.email }}",
      "description": "HubSpot de-duplicates contacts on email within an account. A contact created without one cannot be de-duplicated, and a retry will make a second.",
      "required": true
    },
    {
      "type": "expression",
      "key": "firstName",
      "label": "First name",
      "example": "{{ $json.first_name }}"
    },
    {
      "type": "expression",
      "key": "lastName",
      "label": "Last name",
      "example": "{{ $json.last_name }}"
    },
    {
      "type": "text",
      "key": "company",
      "label": "Company"
    },
    {
      "type": "text",
      "key": "phone",
      "label": "Phone",
      "placeholder": "+44 20 7946 0000"
    },
    {
      "type": "select",
      "key": "lifecycleStage",
      "label": "Lifecycle stage",
      "description": "HubSpot's own stage names. A value it does not recognise is refused at write time, not at setup.",
      "options": [
        {
          "value": "subscriber",
          "label": "Subscriber"
        },
        {
          "value": "lead",
          "label": "Lead"
        },
        {
          "value": "marketingqualifiedlead",
          "label": "Marketing qualified lead"
        },
        {
          "value": "salesqualifiedlead",
          "label": "Sales qualified lead"
        },
        {
          "value": "customer",
          "label": "Customer"
        }
      ]
    }
  ],
  defaultConfig: {
    "mode": "auto"
  },
  renderBody: ({ config }) =>
    summarize(HUBSPOT_CONTACT_CREATE_META, config as Record<string, unknown>, "create a contact"),
});
