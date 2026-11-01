/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/manifest.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/manifest.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * HubSpot's node kinds for fancy-flow.
 *
 * Install this on every host. The TypeScript executors live in the js
 * package's `./flow` subpath; PHP and Python hosts run their own and need only
 * this.
 */

export * from "./service.js";
export * from "./kinds/company-create.js";
export * from "./kinds/company-get.js";
export * from "./kinds/company-list.js";
export * from "./kinds/company-search.js";
export * from "./kinds/company-update.js";
export * from "./kinds/contact-create.js";
export * from "./kinds/contact-get.js";
export * from "./kinds/contact-list.js";
export * from "./kinds/contact-search.js";
export * from "./kinds/contact-update.js";
export * from "./kinds/deal-create.js";
export * from "./kinds/deal-get.js";
export * from "./kinds/deal-list.js";
export * from "./kinds/deal-search.js";
export * from "./kinds/deal-update.js";
export * from "./kinds/owner-list.js";
export * from "./kinds/pipeline-list.js";
export * from "./kinds/property-list.js";

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { hubspotCompanyCreateKind } from "./kinds/company-create.js";
import { hubspotCompanyGetKind } from "./kinds/company-get.js";
import { hubspotCompanyListKind } from "./kinds/company-list.js";
import { hubspotCompanySearchKind } from "./kinds/company-search.js";
import { hubspotCompanyUpdateKind } from "./kinds/company-update.js";
import { hubspotContactCreateKind } from "./kinds/contact-create.js";
import { hubspotContactGetKind } from "./kinds/contact-get.js";
import { hubspotContactListKind } from "./kinds/contact-list.js";
import { hubspotContactSearchKind } from "./kinds/contact-search.js";
import { hubspotContactUpdateKind } from "./kinds/contact-update.js";
import { hubspotDealCreateKind } from "./kinds/deal-create.js";
import { hubspotDealGetKind } from "./kinds/deal-get.js";
import { hubspotDealListKind } from "./kinds/deal-list.js";
import { hubspotDealSearchKind } from "./kinds/deal-search.js";
import { hubspotDealUpdateKind } from "./kinds/deal-update.js";
import { hubspotOwnerListKind } from "./kinds/owner-list.js";
import { hubspotPipelineListKind } from "./kinds/pipeline-list.js";
import { hubspotPropertyListKind } from "./kinds/property-list.js";

/** Every HubSpot kind, for a host that registers the lot. */
export const HUBSPOT_KINDS: NodeKindDefinition[] = [
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
];
