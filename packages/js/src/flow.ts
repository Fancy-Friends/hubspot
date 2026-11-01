/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/ + triggers/ by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/ + triggers/ (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * HubSpot's node kinds with their TypeScript executors attached — for hosts
 * that EXECUTE on TS.
 *
 * The authoring surface in @particle-academy/hubspot-ui carries no executor:
 * the editor is React on every host, so a PHP or Python project installs the
 * ui package and never this one.
 */

import type { NodeExecutor, NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import {
  idempotencyKeyFor,
  NO_IDEMPOTENCY_KEY_WARNING,
  resolveConnection,
  triggerEvent,
  type RequestedMode,
} from "@particle-academy/fancy-connector-core";
import { HUBSPOT } from "./service.js";

import {
  hubspotCompanyCreateKind,
  hubspotCompanyGetKind,
  hubspotCompanyListKind,
  hubspotCompanySearchKind,
  hubspotCompanyUpdateKind,
  hubspotContactCreateKind,
  hubspotContactGetKind,
  hubspotContactListKind,
  hubspotContactSearchKind,
  hubspotContactUpdateKind,
  hubspotDealCreateKind,
  hubspotDealGetKind,
  hubspotDealListKind,
  hubspotDealSearchKind,
  hubspotDealUpdateKind,
  hubspotOwnerListKind,
  hubspotPipelineListKind,
  hubspotPropertyListKind,
  hubspotCrmEventTriggerKind,
} from "@particle-academy/hubspot-ui";

import { hubspotCompanyCreate } from "./actions/company-create.js";
import { hubspotCompanyGet } from "./actions/company-get.js";
import { hubspotCompanyList } from "./actions/company-list.js";
import { hubspotCompanySearch } from "./actions/company-search.js";
import { hubspotCompanyUpdate } from "./actions/company-update.js";
import { hubspotContactCreate } from "./actions/contact-create.js";
import { hubspotContactGet } from "./actions/contact-get.js";
import { hubspotContactList } from "./actions/contact-list.js";
import { hubspotContactSearch } from "./actions/contact-search.js";
import { hubspotContactUpdate } from "./actions/contact-update.js";
import { hubspotDealCreate } from "./actions/deal-create.js";
import { hubspotDealGet } from "./actions/deal-get.js";
import { hubspotDealList } from "./actions/deal-list.js";
import { hubspotDealSearch } from "./actions/deal-search.js";
import { hubspotDealUpdate } from "./actions/deal-update.js";
import { hubspotOwnerList } from "./actions/owner-list.js";
import { hubspotPipelineList } from "./actions/pipeline-list.js";
import { hubspotPropertyList } from "./actions/property-list.js";
import { HUBSPOT_CRM_EVENT } from "./triggers/crm-event.js";

export const hubspotCompanyCreateExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await hubspotCompanyCreate({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `hubspot company_create ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const hubspotCompanyGetExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await hubspotCompanyGet({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `hubspot company_get ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const hubspotCompanyListExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await hubspotCompanyList({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `hubspot company_list ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const hubspotCompanySearchExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await hubspotCompanySearch({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `hubspot company_search ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const hubspotCompanyUpdateExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await hubspotCompanyUpdate({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `hubspot company_update ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const hubspotContactCreateExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await hubspotContactCreate({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `hubspot contact_create ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const hubspotContactGetExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await hubspotContactGet({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `hubspot contact_get ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const hubspotContactListExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await hubspotContactList({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `hubspot contact_list ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const hubspotContactSearchExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await hubspotContactSearch({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `hubspot contact_search ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const hubspotContactUpdateExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await hubspotContactUpdate({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `hubspot contact_update ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const hubspotDealCreateExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await hubspotDealCreate({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `hubspot deal_create ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const hubspotDealGetExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await hubspotDealGet({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `hubspot deal_get ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const hubspotDealListExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await hubspotDealList({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `hubspot deal_list ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const hubspotDealSearchExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await hubspotDealSearch({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `hubspot deal_search ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const hubspotDealUpdateExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await hubspotDealUpdate({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `hubspot deal_update ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const hubspotOwnerListExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await hubspotOwnerList({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `hubspot owner_list ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const hubspotPipelineListExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await hubspotPipelineList({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `hubspot pipeline_list ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const hubspotPropertyListExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});

  const result = await hubspotPropertyList({
    config,
    input: ctx.inputs?.in,
  });

  ctx.emit({
    type: "log",
    level: "info",
    nodeId: ctx.node.id,
    message: `hubspot property_list ${(result.data as { id?: string })?.id} (${result.mode})`,
  });

  return { __port: "out", value: result };
};

export const hubspotCrmEventTriggerExecutor: NodeExecutor = async (ctx) => {
  const config = ((ctx.node.data as { config?: Record<string, unknown> })?.config ?? {});
  const connection = resolveConnection({
    service: HUBSPOT.service,
    operation: "crm_event",
    sandbox: HUBSPOT.sandbox,
    baseUrls: HUBSPOT.baseUrls,
    requires: HUBSPOT.requires,
    connectionId: typeof config.connection === "string" ? config.connection : null,
    requested: typeof config.mode === "string" ? (config.mode as RequestedMode) : null,
  });

  const event = triggerEvent(HUBSPOT_CRM_EVENT, connection, ctx.inputs?.in, config);

  return { __port: "out", value: event };
};

/** The kinds a TypeScript host registers. */
export const HUBSPOT_RUNNABLE_KINDS: NodeKindDefinition[] = [
  { ...hubspotCompanyCreateKind, executor: hubspotCompanyCreateExecutor },
  { ...hubspotCompanyGetKind, executor: hubspotCompanyGetExecutor },
  { ...hubspotCompanyListKind, executor: hubspotCompanyListExecutor },
  { ...hubspotCompanySearchKind, executor: hubspotCompanySearchExecutor },
  { ...hubspotCompanyUpdateKind, executor: hubspotCompanyUpdateExecutor },
  { ...hubspotContactCreateKind, executor: hubspotContactCreateExecutor },
  { ...hubspotContactGetKind, executor: hubspotContactGetExecutor },
  { ...hubspotContactListKind, executor: hubspotContactListExecutor },
  { ...hubspotContactSearchKind, executor: hubspotContactSearchExecutor },
  { ...hubspotContactUpdateKind, executor: hubspotContactUpdateExecutor },
  { ...hubspotDealCreateKind, executor: hubspotDealCreateExecutor },
  { ...hubspotDealGetKind, executor: hubspotDealGetExecutor },
  { ...hubspotDealListKind, executor: hubspotDealListExecutor },
  { ...hubspotDealSearchKind, executor: hubspotDealSearchExecutor },
  { ...hubspotDealUpdateKind, executor: hubspotDealUpdateExecutor },
  { ...hubspotOwnerListKind, executor: hubspotOwnerListExecutor },
  { ...hubspotPipelineListKind, executor: hubspotPipelineListExecutor },
  { ...hubspotPropertyListKind, executor: hubspotPropertyListExecutor },
  { ...hubspotCrmEventTriggerKind, executor: hubspotCrmEventTriggerExecutor },
];
