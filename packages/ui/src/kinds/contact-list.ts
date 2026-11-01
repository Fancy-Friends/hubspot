/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/contact-list.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/contact-list.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * List contacts — Page through every contact in the portal.
 *
 * https://developers.hubspot.com/docs/reference/api/crm/objects/contacts
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { hubspotMeta } from "../service.js";

export const HUBSPOT_CONTACT_LIST_KIND = "@particle-academy/hubspot_contact_list";
export const HUBSPOT_CONTACT_LIST_OPERATION = "contact_list";

export const HUBSPOT_CONTACT_LIST_META = hubspotMeta("action", "list contacts", "https://developers.hubspot.com/docs/reference/api/crm/objects/contacts");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const HUBSPOT_CONTACT_LIST_OUTPUT: OutputField[] = [
  {
    "path": "data.results",
    "type": "array",
    "description": "This page of contacts."
  },
  {
    "path": "data.results[].id",
    "type": "string",
    "description": "HubSpot's contact id. A NUMERIC STRING, not a number; pass it back as given."
  },
  {
    "path": "data.results[].properties",
    "type": "object",
    "description": "The requested properties, every value a string or null."
  },
  {
    "path": "data.results[].createdAt",
    "type": "string",
    "description": "ISO 8601 timestamp."
  },
  {
    "path": "data.results[].updatedAt",
    "type": "string",
    "description": "ISO 8601 timestamp."
  },
  {
    "path": "data.results[].archived",
    "type": "boolean",
    "description": "FALSE for a live record."
  },
  {
    "path": "data.paging.next.after",
    "type": "string",
    "description": "Pass this as \"after\" for the next page. Absent on the last page."
  }
];

export const hubspotContactListKind: NodeKindDefinition = defineConnectorKind(HUBSPOT_CONTACT_LIST_META, {
  name: HUBSPOT_CONTACT_LIST_KIND,
  aliases: ["hubspot_contact_list"],
  label: "List contacts",
  description: "Page through every contact in the portal.",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "none",
  outputShape: HUBSPOT_CONTACT_LIST_OUTPUT,
  configSchema: [
    {
      "type": "number",
      "key": "limit",
      "label": "Page size",
      "description": "How many records per page, 1 to 100. HubSpot's own default is 10."
    },
    {
      "type": "text",
      "key": "after",
      "label": "After (cursor)",
      "description": "The cursor from the previous page's paging.next.after. Leave empty for the first page."
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
    summarize(HUBSPOT_CONTACT_LIST_META, config as Record<string, unknown>, "list contacts"),
});
