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
 * HubSpot for Node.
 *
 * The service descriptor, its faker, its delivery contract, and one function
 * per operation — plain HTTP, no vendor SDK.
 *
 * The fancy-flow executors and runnable node kinds live behind the `./flow`
 * subpath, so a host with no workflow engine pays nothing for them.
 */

export * from "./service.js";
export * from "./faker.js";
export * from "./actions/company-create.js";
export * from "./actions/company-get.js";
export * from "./actions/company-list.js";
export * from "./actions/company-search.js";
export * from "./actions/company-update.js";
export * from "./actions/contact-create.js";
export * from "./actions/contact-get.js";
export * from "./actions/contact-list.js";
export * from "./actions/contact-search.js";
export * from "./actions/contact-update.js";
export * from "./actions/deal-create.js";
export * from "./actions/deal-get.js";
export * from "./actions/deal-list.js";
export * from "./actions/deal-search.js";
export * from "./actions/deal-update.js";
export * from "./actions/owner-list.js";
export * from "./actions/pipeline-list.js";
export * from "./actions/property-list.js";
export * from "./triggers/crm-event.js";
