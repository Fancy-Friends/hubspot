/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/pipeline-list.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/pipeline-list.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * List deal pipelines — Every deal pipeline in the portal, with its stages in
 * order.
 *
 * https://developers.hubspot.com/docs/reference/api/crm/pipelines
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { hubspotMeta } from "../service.js";

export const HUBSPOT_PIPELINE_LIST_KIND = "@particle-academy/hubspot_pipeline_list";
export const HUBSPOT_PIPELINE_LIST_OPERATION = "pipeline_list";

export const HUBSPOT_PIPELINE_LIST_META = hubspotMeta("action", "list deal pipelines", "https://developers.hubspot.com/docs/reference/api/crm/pipelines");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const HUBSPOT_PIPELINE_LIST_OUTPUT: OutputField[] = [
  {
    "path": "data.results",
    "type": "array",
    "description": "Every deal pipeline."
  },
  {
    "path": "data.results[].id",
    "type": "string",
    "description": "The pipeline id a deal's pipeline property holds."
  },
  {
    "path": "data.results[].label",
    "type": "string",
    "description": "The pipeline's name."
  },
  {
    "path": "data.results[].stages",
    "type": "array",
    "description": "Its stages, in display order: id (what dealstage holds), label, displayOrder, metadata.probability."
  }
];

export const hubspotPipelineListKind: NodeKindDefinition = defineConnectorKind(HUBSPOT_PIPELINE_LIST_META, {
  name: HUBSPOT_PIPELINE_LIST_KIND,
  aliases: ["hubspot_pipeline_list"],
  label: "List deal pipelines",
  description: "Every deal pipeline in the portal, with its stages in order.",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "none",
  outputShape: HUBSPOT_PIPELINE_LIST_OUTPUT,
  configSchema: [],
  defaultConfig: {
    "mode": "auto"
  },
  renderBody: ({ config }) =>
    summarize(HUBSPOT_PIPELINE_LIST_META, config as Record<string, unknown>, "list deal pipelines"),
});
