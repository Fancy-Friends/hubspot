/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/triggers/crm-event.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/triggers/crm-event.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * HubSpot CRM event — Start when HubSpot reports deals, contacts or companies
 * created, changed, deleted, merged, restored or re-associated.
 *
 * https://developers.hubspot.com/docs/apps/developer-platform/build-apps/authentication/request-validation
 *
 * Delivery: webhook. In the HubSpot app's webhook settings, set the target URL
 * to the route your host mounts for this trigger and subscribe to the deal,
 * contact and company events you want. Deliveries are signed with the app's
 * client secret, already on the connection as `clientSecret`. ONE URL serves
 * every portal that installed the app, so route each event by its portalId,
 * and only after the signature has verified: map portalId to the connection
 * created when that portal installed, and drop an unmapped portalId with a 2xx
 * and a log line, creating nothing.
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { hubspotMeta } from "../service.js";

export const HUBSPOT_CRM_EVENT_TRIGGER_KIND = "@particle-academy/hubspot_crm_event_trigger";
export const HUBSPOT_CRM_EVENT_TRIGGER_OPERATION = "crm_event";

export const HUBSPOT_CRM_EVENT_TRIGGER_META = hubspotMeta("trigger", "a CRM event", "https://developers.hubspot.com/docs/apps/developer-platform/build-apps/authentication/request-validation");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const HUBSPOT_CRM_EVENT_TRIGGER_OUTPUT: OutputField[] = [
  {
    "path": "[].eventId",
    "type": "number",
    "description": "HubSpot's id for this event. HubSpot retries on failure: dedupe on it."
  },
  {
    "path": "[].subscriptionId",
    "type": "number",
    "description": "Which of the app's subscriptions fired."
  },
  {
    "path": "[].portalId",
    "type": "number",
    "description": "The portal (HubSpot account) the event happened in. The ONLY routing key, and only after verification."
  },
  {
    "path": "[].appId",
    "type": "number",
    "description": "The app the subscription belongs to."
  },
  {
    "path": "[].occurredAt",
    "type": "number",
    "description": "When it happened, in epoch MILLISECONDS."
  },
  {
    "path": "[].subscriptionType",
    "type": "string",
    "description": "What happened: deal.creation, contact.propertyChange, company.deletion, … (object.* names on HubSpot's newer developer platform)."
  },
  {
    "path": "[].attemptNumber",
    "type": "number",
    "description": "0 on the first delivery, counting up on retries."
  },
  {
    "path": "[].objectId",
    "type": "number",
    "description": "The record the event is about. Pass it to deal_get / contact_get / company_get as a string."
  },
  {
    "path": "[].changeFlag",
    "type": "string",
    "description": "CREATED, DELETED, MERGED, RESTORED, … where the event type carries one."
  },
  {
    "path": "[].changeSource",
    "type": "string",
    "description": "What made the change: CRM_UI, API, IMPORT, …"
  },
  {
    "path": "[].propertyName",
    "type": "string",
    "description": "For a property change: which property. Absent otherwise."
  },
  {
    "path": "[].propertyValue",
    "type": "string",
    "description": "For a property change: its new value, as a string. Absent otherwise."
  }
];

export const hubspotCrmEventTriggerKind: NodeKindDefinition = defineConnectorKind(HUBSPOT_CRM_EVENT_TRIGGER_META, {
  name: HUBSPOT_CRM_EVENT_TRIGGER_KIND,
  aliases: ["hubspot_crm_event_trigger"],
  label: "HubSpot CRM event",
  description: "Start when HubSpot reports deals, contacts or companies created, changed, deleted, merged, restored or re-associated.",
  inputs: [],
  outputs: [{ id: "out" }],
  sideEffects: "none",
  outputShape: HUBSPOT_CRM_EVENT_TRIGGER_OUTPUT,
  configSchema: [],
  defaultConfig: {
    "mode": "auto"
  },
  renderBody: ({ config }) =>
    summarize(HUBSPOT_CRM_EVENT_TRIGGER_META, config as Record<string, unknown>, "a CRM event"),
});
