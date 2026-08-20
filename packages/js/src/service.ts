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
 * HubSpot, as one service descriptor shared by every HubSpot operation.
 *
 * @particle-academy/fancy-connector-core carries what is true of ALL
 * connectors. This carries what is true of HubSpot: its base URL, its auth
 * scheme, its idempotency header, and its faker.
 *
 * ## The sandbox trap, written down where it is used
 *
 * HubSpot's test estate is a DEVELOPER TEST ACCOUNT: a separate portal you
 * create from the developer account, with its own portal id, its own data and
 * its own OAuth install. Same API host, different account -- so the credential
 * is different and the URL is not. Test accounts expire if unused and carry
 * reduced limits, which is why they are a place to test rather than a place to
 * build against.
 */

import type { ConnectorMode, PreparedRequest, ServiceDescriptor } from "@particle-academy/fancy-connector-core";

import { hubspotFaker } from "./faker.js";

/**
 * The connector API version this package was GENERATED against.
 *
 * A literal, never imported. An imported constant lets an upgrade rewrite the
 * very claim it exists to detect, after which the copy agrees with itself
 * forever.
 */
export const CONNECTOR_API_VERSION = 1;

export const HUBSPOT_BASE_URLS = {
  "live": "https://api.hubapi.com",
  "sandbox": "https://api.hubapi.com"
} as const;

/** Credential keys a remote call cannot proceed without. */
export const HUBSPOT_REQUIRES = [
  "accessToken"
] as const;

/**
 * Apply HubSpot's auth scheme to an outgoing request.
 *
 * An OAuth2 access token is presented exactly like a static bearer token. The
 * difference is not in the request -- it is that this one EXPIRES, and
 * something has to refresh it. That is the host's job, and `oauth` below is
 * what tells it how.
 *
 * The mode is passed in because for some providers auth and estate are the
 * same decision expressed in the URL; here it is unused, and saying so is
 * cheaper than wondering later whether it was forgotten.
 */
export function hubspotAuthorize(
  credentials: Record<string, string | undefined>,
  request: PreparedRequest,
  _mode: ConnectorMode,
): void {
  request.headers.Authorization = `Bearer ${credentials.accessToken ?? ""}`;
}

/** The HubSpot service, for the TypeScript runtime. */
export const HUBSPOT: ServiceDescriptor = {
  service: "hubspot",
  title: "HubSpot",
  sandbox: "separate-account",
  baseUrls: { ...HUBSPOT_BASE_URLS },
  requires: [...HUBSPOT_REQUIRES],
  authorize: hubspotAuthorize,
  faker: hubspotFaker,
};
