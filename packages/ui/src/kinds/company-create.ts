/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/company-create.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/company-create.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * Create company — Create a company in HubSpot.
 *
 * https://developers.hubspot.com/docs/reference/api/crm/objects/companies
 *
 * `unsafe-to-replay`.
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { hubspotMeta } from "../service.js";

export const HUBSPOT_COMPANY_CREATE_KIND = "@particle-academy/hubspot_company_create";
export const HUBSPOT_COMPANY_CREATE_OPERATION = "company_create";

export const HUBSPOT_COMPANY_CREATE_META = hubspotMeta("action", "create a company", "https://developers.hubspot.com/docs/reference/api/crm/objects/companies");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const HUBSPOT_COMPANY_CREATE_OUTPUT: OutputField[] = [
  {
    "path": "data.id",
    "type": "string",
    "description": "HubSpot's company id. A NUMERIC STRING, not a number; pass it back as given."
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

export const hubspotCompanyCreateKind: NodeKindDefinition = defineConnectorKind(HUBSPOT_COMPANY_CREATE_META, {
  name: HUBSPOT_COMPANY_CREATE_KIND,
  aliases: ["hubspot_company_create"],
  label: "Create company",
  description: "Create a company in HubSpot.",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "unsafe-to-replay",
  outputShape: HUBSPOT_COMPANY_CREATE_OUTPUT,
  configSchema: [
    {
      "type": "keyvalue",
      "key": "properties",
      "label": "Properties",
      "required": true,
      "description": "HubSpot property name → value for the new company. Values are sent as strings, which is how HubSpot stores every property."
    }
  ],
  defaultConfig: {
    "mode": "auto"
  },
  renderBody: ({ config }) =>
    summarize(HUBSPOT_COMPANY_CREATE_META, config as Record<string, unknown>, "create a company"),
});
