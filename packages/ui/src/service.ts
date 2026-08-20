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
 * HubSpot's identity on the authoring surface, shared by every HubSpot node.
 *
 * This file must import nothing from the js package: a PHP or Python project
 * installs the ui package and never that one, and the import would be a
 * dangling module the moment it did.
 *
 * ## The sandbox trap
 *
 * HubSpot's test estate is a DEVELOPER TEST ACCOUNT: a separate portal you
 * create from the developer account, with its own portal id, its own data and
 * its own OAuth install. Same API host, different account -- so the credential
 * is different and the URL is not. Test accounts expire if unused and carry
 * reduced limits, which is why they are a place to test rather than a place to
 * build against.
 */

import type { ConnectorMeta } from "@particle-academy/fancy-flow/connectors";

/**
 * The connector API version this package was GENERATED against.
 *
 * A literal, never imported — an imported constant lets an upgrade rewrite the
 * very claim it exists to detect.
 */
export const CONNECTOR_API_VERSION = 1;

/** The parts of a connector's identity that belong to the SERVICE, not the node. */
export const HUBSPOT_SERVICE = {
  service: "hubspot",
  serviceTitle: "HubSpot",
  domain: "crm",
  sandbox: "separate-account",
} as const satisfies Pick<ConnectorMeta, "service" | "serviceTitle" | "domain" | "sandbox">;

/** The credentials a HubSpot connection holds. */
export const HUBSPOT_CREDENTIALS = [
  {
    "key": "clientId",
    "label": "App client ID",
    "scope": "provider",
    "secret": false,
    "help": "From your HubSpot app's Auth tab. ONE value for the whole installation -- the same app serves every connected account."
  },
  {
    "key": "clientSecret",
    "label": "App client secret",
    "scope": "provider",
    "secret": true,
    "help": "From the same Auth tab. Used to exchange the code and to refresh; never sent with an API request."
  },
  {
    "key": "accessToken",
    "label": "Access token",
    "scope": "account",
    "secret": true,
    "help": "Obtained by the host's OAuth exchange, PER CONNECTED ACCOUNT. Expires after 30 minutes -- a host that does not refresh will work all afternoon and be broken by morning."
  },
  {
    "key": "refreshToken",
    "label": "Refresh token",
    "scope": "account",
    "secret": true,
    "optional": true,
    "help": "Also per account. Does not expire, so it is the credential worth protecting most: it mints access tokens indefinitely until the install is revoked."
  }
] as const;

/**
 * The OAuth2 exchange HubSpot requires — DECLARED here, performed by the host.
 *
 * A consent screen needs a browser, a redirect URI and somewhere to persist
 * the result, and all three belong to the host; a package that ran the dance
 * itself would have to own a web server. So this says precisely enough for a
 * host to do it.
 *
 * The access token lasts 1800 seconds. A host that never refreshes will work
 * all afternoon and be broken by morning, which is why the lifetime is stated
 * rather than left to be discovered.
 */
export const HUBSPOT_OAUTH = {
  "flow": "authorization_code",
  "authorizeUrl": "https://app.hubspot.com/oauth/authorize",
  "tokenUrl": "https://api.hubapi.com/oauth/v1/token",
  "scopes": [
    "crm.objects.contacts.write"
  ],
  "accessTokenCredential": "accessToken",
  "refreshTokenCredential": "refreshToken",
  "accessTokenTtlSeconds": 1800
} as const;

/** Build a HubSpot node's connector metadata from the operation it performs. */
export function hubspotMeta(
  role: ConnectorMeta["role"],
  operation: string,
  docs: string,
): ConnectorMeta {
  return { ...HUBSPOT_SERVICE, role, operation, docs };
}
