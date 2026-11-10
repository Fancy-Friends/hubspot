# Setting up HubSpot

Generated from `provider/manifest.json`; do not edit. Each step cites the provider page it
came from. Words in **bold** are values from YOUR app, filled in where a host shows these steps.

## 1. Create the app as a HubSpot project

Run hs project create and choose App, with OAuth (static auth limits installation to one account, and this connector serves many). In app-hsmeta.json, under config.auth, put **your host's OAuth redirect URL** in redirectUrls, and list in requiredScopes the scopes your app actually uses: HubSpot shows an error unless the authorize URL asks for the app's required scopes, so a read-only app lists only its .read scopes.

**Copy:**

- Redirect URL: **your host's OAuth redirect URL**

Source: [developers.hubspot.com](https://developers.hubspot.com/docs/apps/developer-platform/build-apps/create-an-app)

## 2. Subscribe the app to CRM events

Add src/app/webhooks/webhook-hsmeta.json (uid and type "webhooks"). Set targetUrl to **your host's webhook URL for this connector**, the public URL HubSpot delivers to, and under subscriptions.crmObjects add the object.* events you need for deal, company and contact (object.creation, object.propertyChange, object.deletion).

**Copy:**

- Target URL: **your host's webhook URL for this connector**

Source: [developers.hubspot.com](https://developers.hubspot.com/docs/apps/developer-platform/add-features/configure-webhooks)

## 3. Upload the project and copy the client credentials

Run hs project upload (it builds the app), then hs project open; under Project Components click the app, open the Auth tab, and copy the Client ID and Client secret under Client credentials. The client secret also signs every webhook delivery, so the same value verifies them.

**Yields:** `clientId`, `clientSecret`

Source: [developers.hubspot.com](https://developers.hubspot.com/docs/apps/developer-platform/build-apps/create-an-app)

## 4. Connect an account and check reads and webhooks — an AGENT step

Install the app into a HubSpot account through **your app's name**'s OAuth flow, run a read, then change a record and check the webhook arrives.

**The agent is asked:**

> Using **your app's name**'s **this connector's name** connection for a newly installed HubSpot account, run deal_list with a limit of 1 and report what it returns. Then ask the person to edit a deal in that account, and confirm **your app's name** received a crm_event whose v3 signature verified and whose portalId routed to that connection.

**Done when:** deal_list answers for the connected account, and an edited deal arrives as a verified crm_event routed to the right portal.

Source: [developers.hubspot.com](https://developers.hubspot.com/docs/apps/developer-platform/build-apps/create-an-app)
