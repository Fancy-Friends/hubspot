/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/owner-list.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/owner-list.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * List owners — Page through the portal's owners: the users records can be
 * assigned to.
 *
 * https://developers.hubspot.com/docs/reference/api/crm/owners
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { hubspotMeta } from "../service.js";

export const HUBSPOT_OWNER_LIST_KIND = "@particle-academy/hubspot_owner_list";
export const HUBSPOT_OWNER_LIST_OPERATION = "owner_list";

export const HUBSPOT_OWNER_LIST_META = hubspotMeta("action", "list owners", "https://developers.hubspot.com/docs/reference/api/crm/owners");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const HUBSPOT_OWNER_LIST_OUTPUT: OutputField[] = [
  {
    "path": "data.results",
    "type": "array",
    "description": "This page of owners."
  },
  {
    "path": "data.results[].id",
    "type": "string",
    "description": "The OWNER id, which is what hubspot_owner_id on a record holds. Not the user id."
  },
  {
    "path": "data.results[].email",
    "type": "string",
    "description": "The owner's email."
  },
  {
    "path": "data.results[].firstName",
    "type": "string",
    "description": "First name."
  },
  {
    "path": "data.results[].lastName",
    "type": "string",
    "description": "Last name."
  },
  {
    "path": "data.results[].userId",
    "type": "number",
    "description": "The HubSpot USER id, a different number from the owner id."
  },
  {
    "path": "data.paging.next.after",
    "type": "string",
    "description": "Pass this as \"after\" for the next page. Absent on the last page."
  }
];

export const hubspotOwnerListKind: NodeKindDefinition = defineConnectorKind(HUBSPOT_OWNER_LIST_META, {
  name: HUBSPOT_OWNER_LIST_KIND,
  aliases: ["hubspot_owner_list"],
  label: "List owners",
  description: "Page through the portal's owners: the users records can be assigned to.",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "none",
  outputShape: HUBSPOT_OWNER_LIST_OUTPUT,
  configSchema: [
    {
      "type": "text",
      "key": "email",
      "label": "Email",
      "description": "Only the owner with this email."
    },
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
    }
  ],
  defaultConfig: {
    "mode": "auto"
  },
  renderBody: ({ config }) =>
    summarize(HUBSPOT_OWNER_LIST_META, config as Record<string, unknown>, "list owners"),
});
