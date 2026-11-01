/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/company-search.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/company-search.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * Search companies — Find companies by property filters, sorts or a text
 * query.
 *
 * https://developers.hubspot.com/docs/reference/api/crm/objects/companies
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { hubspotMeta } from "../service.js";

export const HUBSPOT_COMPANY_SEARCH_KIND = "@particle-academy/hubspot_company_search";
export const HUBSPOT_COMPANY_SEARCH_OPERATION = "company_search";

export const HUBSPOT_COMPANY_SEARCH_META = hubspotMeta("action", "search companies", "https://developers.hubspot.com/docs/reference/api/crm/objects/companies");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const HUBSPOT_COMPANY_SEARCH_OUTPUT: OutputField[] = [
  {
    "path": "data.total",
    "type": "number",
    "description": "How many records match, across every page."
  },
  {
    "path": "data.results",
    "type": "array",
    "description": "This page of matching companies."
  },
  {
    "path": "data.results[].id",
    "type": "string",
    "description": "HubSpot's company id. A NUMERIC STRING, not a number; pass it back as given."
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

export const hubspotCompanySearchKind: NodeKindDefinition = defineConnectorKind(HUBSPOT_COMPANY_SEARCH_META, {
  name: HUBSPOT_COMPANY_SEARCH_KIND,
  aliases: ["hubspot_company_search"],
  label: "Search companies",
  description: "Find companies by property filters, sorts or a text query.",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "none",
  outputShape: HUBSPOT_COMPANY_SEARCH_OUTPUT,
  configSchema: [
    {
      "type": "json",
      "key": "filterGroups",
      "label": "Filter groups",
      "description": "HubSpot's filterGroups: groups are ORed, filters inside a group are ANDed. Example: [{\"filters\":[{\"propertyName\":\"amount\",\"operator\":\"GT\",\"value\":\"1000\"}]}]."
    },
    {
      "type": "json",
      "key": "sorts",
      "label": "Sorts",
      "description": "Example: [{\"propertyName\":\"createdate\",\"direction\":\"DESCENDING\"}]."
    },
    {
      "type": "text",
      "key": "query",
      "label": "Text query",
      "description": "Searches the object's default text properties."
    },
    {
      "type": "text",
      "key": "properties",
      "label": "Properties",
      "placeholder": "dealname,amount",
      "description": "Comma-separated property names to return."
    },
    {
      "type": "number",
      "key": "limit",
      "label": "Page size",
      "description": "1 to 200."
    },
    {
      "type": "text",
      "key": "after",
      "label": "After (cursor)",
      "description": "The cursor from the previous page's paging.next.after."
    }
  ],
  defaultConfig: {
    "mode": "auto"
  },
  renderBody: ({ config }) =>
    summarize(HUBSPOT_COMPANY_SEARCH_META, config as Record<string, unknown>, "search companies"),
});
