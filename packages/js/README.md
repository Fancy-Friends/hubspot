# HubSpot

[![Fancified](art/fancified.svg)](https://particle.academy)

HubSpot for [fancy-flow][flow] — as **four imported, versioned packages**, one
per runtime. Not vendored source: a copy cannot be upgraded, and third-party APIs
change.

[flow]: https://github.com/Particle-Academy/fancy-flow

| Runtime | Package | Install |
|---|---|---|
| Authoring surface (every host) | `@particle-academy/hubspot-ui` | `npm install @particle-academy/hubspot-ui` |
| Node | `@particle-academy/hubspot-js` | `npm install @particle-academy/hubspot-js` |
| PHP 8.4+ | `particle-academy/hubspot-php` | `composer require particle-academy/hubspot-php` |
| Python 3.11+ | `fancy-hubspot` | `pip install fancy-hubspot` |

The `ui` package is the editor surface and is React on every host — a PHP or
Python project installs it *and* its own runtime package, and never the `js` one.

## What it costs you

One dependency: `@particle-academy/fancy-connector-core` (or
`particle-academy/fancy-connector-core` on Composer), which the `js` and `php`
packages pull in themselves. The Python package has **zero** runtime
dependencies.

**No HubSpot SDK.** Plain HTTP, deliberately: a vendor SDK is third-party code
subject to the kit's full approval bar, and one per provider is hundreds of
dependencies nobody is tracking.

## Setting it up

Everything below is generated from `provider/manifest.json`, so it cannot disagree with what the packages do.

### Credentials

A HubSpot connection holds 4 values.

**Two kinds of value, and mixing them up matters.** A `provider` credential is ONE value for the whole installation — an OAuth app's client secret serves every connected account. An `account` credential is one per connected account. A host that stores the second where it stores the first lets one account's credentials reach another's.

| Field | Scope | Secret | Where it comes from |
|---|---|---|---|
| **App client ID** | per installation | not secret | From your HubSpot app's Auth tab. ONE value for the whole installation -- the same app serves every connected account. |
| **App client secret** | per installation | **secret** | From the same Auth tab. Used to exchange the code and to refresh; never sent with an API request. |
| **Access token** | per connected account | **secret** | Obtained by the host's OAuth exchange, PER CONNECTED ACCOUNT. Expires after 30 minutes -- a host that does not refresh will work all afternoon and be broken by morning. |
| **Refresh token** *(optional)* | per connected account | **secret** | Also per account. Does not expire, so it is the credential worth protecting most: it mints access tokens indefinitely until the install is revoked. |

### Authorising

HubSpot uses OAuth2 (authorization_code). The package DECLARES the exchange; the HOST performs it — a consent screen needs a browser, a redirect URI and somewhere to persist the result, and all three belong to the host.

- **Authorize URL** — https://app.hubspot.com/oauth/authorize
- **Token URL** — https://api.hubapi.com/oauth/v1/token
- **Scopes** — `crm.objects.contacts.read`, `crm.objects.contacts.write`, `crm.objects.companies.read`, `crm.objects.companies.write`, `crm.objects.deals.read`, `crm.objects.deals.write`, `crm.objects.owners.read`, `crm.schemas.contacts.read`, `crm.schemas.companies.read`, `crm.schemas.deals.read`
- **Access token lifetime** — 1800 seconds (30 minutes). A host that never refreshes works all afternoon and is broken by morning.

The refresh tokens do **not** rotate: the same one is reusable, so a refresh may safely be retried and may run concurrently. Stated rather than assumed, because the opposite — a provider that spends the token and revokes the grant on a replay — looks identical until it happens.

### The estate

HubSpot has a test estate on the same host, reached with credentials from a SEPARATE test account you register. Selecting sandbox mode uses those credentials.

> HubSpot's test estate is a DEVELOPER TEST ACCOUNT: a separate portal you create from the developer account, with its own portal id, its own data and its own OAuth install. Same API host, different account -- so the credential is different and the URL is not. Test accounts expire if unused and carry reduced limits, which is why they are a place to test rather than a place to build against.

## What it can do

### Actions

#### `company_create` — Create company

Create a company in HubSpot.

`POST /crm/v3/objects/companies` · **unsafe to replay** — a retried durable run does it TWICE

| Input | Required | What it is |
|---|---|---|
| `properties` | yes | HubSpot property name → value for the new company. Values are sent as strings, which is how HubSpot stores every property. |

#### `company_get` — Get company

Read one company, with its associations when asked.

`GET /crm/v3/objects/companies/{companyId}` · reads only — safe to replay

| Input | Required | What it is |
|---|---|---|
| `companyId` | yes | The company's HubSpot id (a numeric string). |
| `properties` | no | Comma-separated property names to return. HubSpot returns a small default set otherwise. |
| `associations` | no | Comma-separated object types whose associated ids to return. |

#### `company_list` — List companies

Page through every company in the portal.

`GET /crm/v3/objects/companies` · reads only — safe to replay

| Input | Required | What it is |
|---|---|---|
| `limit` | no | How many records per page, 1 to 100. HubSpot's own default is 10. |
| `after` | no | The cursor from the previous page's paging.next.after. Leave empty for the first page. |
| `properties` | no | Comma-separated property names to return. HubSpot returns a small default set otherwise. |
| `associations` | no | Comma-separated object types whose associated ids to return. |

#### `company_search` — Search companies

Find companies by property filters, sorts or a text query.

`POST /crm/v3/objects/companies/search` · reads only — safe to replay

| Input | Required | What it is |
|---|---|---|
| `filterGroups` | no | HubSpot's filterGroups: groups are ORed, filters inside a group are ANDed. Example: [{"filters":[{"propertyName":"amount","operator":"GT","value":"1000"}]}]. |
| `sorts` | no | Example: [{"propertyName":"createdate","direction":"DESCENDING"}]. |
| `query` | no | Searches the object's default text properties. |
| `properties` | no | Comma-separated property names to return. |
| `limit` | no | 1 to 200. |
| `after` | no | The cursor from the previous page's paging.next.after. |

#### `company_update` — Update company

Change properties on an existing company.

`PATCH /crm/v3/objects/companies/{companyId}` · idempotent — safe to replay

| Input | Required | What it is |
|---|---|---|
| `companyId` | yes | The company's HubSpot id (a numeric string). |
| `properties` | yes | HubSpot property name → value for the company. Values are sent as strings, which is how HubSpot stores every property. |

#### `contact_create` — Create contact

Create a contact in HubSpot.

`POST /crm/v3/objects/contacts` · **unsafe to replay** — a retried durable run does it TWICE

| Input | Required | What it is |
|---|---|---|
| `email` | yes | HubSpot de-duplicates contacts on email within an account. A contact created without one cannot be de-duplicated, and a retry will make a second. |
| `firstName` | no | First name |
| `lastName` | no | Last name |
| `company` | no | Company |
| `phone` | no | Phone |
| `lifecycleStage` | no | HubSpot's own stage names. A value it does not recognise is refused at write time, not at setup. |

#### `contact_get` — Get contact

Read one contact, with its associations when asked.

`GET /crm/v3/objects/contacts/{contactId}` · reads only — safe to replay

| Input | Required | What it is |
|---|---|---|
| `contactId` | yes | The contact's HubSpot id (a numeric string). |
| `properties` | no | Comma-separated property names to return. HubSpot returns a small default set otherwise. |
| `associations` | no | Comma-separated object types whose associated ids to return. |

#### `contact_list` — List contacts

Page through every contact in the portal.

`GET /crm/v3/objects/contacts` · reads only — safe to replay

| Input | Required | What it is |
|---|---|---|
| `limit` | no | How many records per page, 1 to 100. HubSpot's own default is 10. |
| `after` | no | The cursor from the previous page's paging.next.after. Leave empty for the first page. |
| `properties` | no | Comma-separated property names to return. HubSpot returns a small default set otherwise. |
| `associations` | no | Comma-separated object types whose associated ids to return. |

#### `contact_search` — Search contacts

Find contacts by property filters, sorts or a text query.

`POST /crm/v3/objects/contacts/search` · reads only — safe to replay

| Input | Required | What it is |
|---|---|---|
| `filterGroups` | no | HubSpot's filterGroups: groups are ORed, filters inside a group are ANDed. Example: [{"filters":[{"propertyName":"amount","operator":"GT","value":"1000"}]}]. |
| `sorts` | no | Example: [{"propertyName":"createdate","direction":"DESCENDING"}]. |
| `query` | no | Searches the object's default text properties. |
| `properties` | no | Comma-separated property names to return. |
| `limit` | no | 1 to 200. |
| `after` | no | The cursor from the previous page's paging.next.after. |

#### `contact_update` — Update contact

Change properties on an existing contact.

`PATCH /crm/v3/objects/contacts/{contactId}` · idempotent — safe to replay

| Input | Required | What it is |
|---|---|---|
| `contactId` | yes | The contact's HubSpot id (a numeric string). |
| `properties` | yes | HubSpot property name → value for the contact. Values are sent as strings, which is how HubSpot stores every property. |

#### `deal_create` — Create deal

Create a deal in HubSpot.

`POST /crm/v3/objects/deals` · **unsafe to replay** — a retried durable run does it TWICE

| Input | Required | What it is |
|---|---|---|
| `properties` | yes | HubSpot property name → value for the new deal. Values are sent as strings, which is how HubSpot stores every property. |

#### `deal_get` — Get deal

Read one deal, with its associations when asked.

`GET /crm/v3/objects/deals/{dealId}` · reads only — safe to replay

| Input | Required | What it is |
|---|---|---|
| `dealId` | yes | The deal's HubSpot id (a numeric string). |
| `properties` | no | Comma-separated property names to return. HubSpot returns a small default set otherwise. |
| `associations` | no | Comma-separated object types whose associated ids to return. |

#### `deal_list` — List deals

Page through every deal in the portal.

`GET /crm/v3/objects/deals` · reads only — safe to replay

| Input | Required | What it is |
|---|---|---|
| `limit` | no | How many records per page, 1 to 100. HubSpot's own default is 10. |
| `after` | no | The cursor from the previous page's paging.next.after. Leave empty for the first page. |
| `properties` | no | Comma-separated property names to return. HubSpot returns a small default set otherwise. |
| `associations` | no | Comma-separated object types whose associated ids to return. |

#### `deal_search` — Search deals

Find deals by property filters, sorts or a text query.

`POST /crm/v3/objects/deals/search` · reads only — safe to replay

| Input | Required | What it is |
|---|---|---|
| `filterGroups` | no | HubSpot's filterGroups: groups are ORed, filters inside a group are ANDed. Example: [{"filters":[{"propertyName":"amount","operator":"GT","value":"1000"}]}]. |
| `sorts` | no | Example: [{"propertyName":"createdate","direction":"DESCENDING"}]. |
| `query` | no | Searches the object's default text properties. |
| `properties` | no | Comma-separated property names to return. |
| `limit` | no | 1 to 200. |
| `after` | no | The cursor from the previous page's paging.next.after. |

#### `deal_update` — Update deal

Change properties on an existing deal.

`PATCH /crm/v3/objects/deals/{dealId}` · idempotent — safe to replay

| Input | Required | What it is |
|---|---|---|
| `dealId` | yes | The deal's HubSpot id (a numeric string). |
| `properties` | yes | HubSpot property name → value for the deal. Values are sent as strings, which is how HubSpot stores every property. |

#### `owner_list` — List owners

Page through the portal's owners: the users records can be assigned to.

`GET /crm/v3/owners` · reads only — safe to replay

| Input | Required | What it is |
|---|---|---|
| `email` | no | Only the owner with this email. |
| `limit` | no | How many records per page, 1 to 100. HubSpot's own default is 10. |
| `after` | no | The cursor from the previous page's paging.next.after. Leave empty for the first page. |

#### `pipeline_list` — List deal pipelines

Every deal pipeline in the portal, with its stages in order.

`GET /crm/v3/pipelines/deals` · reads only — safe to replay

Takes no input.

#### `property_list` — List property definitions

Every property defined on deals, contacts or companies: name, label, type and the options of an enumeration.

`GET /crm/v3/properties/{objectType}` · reads only — safe to replay

| Input | Required | What it is |
|---|---|---|
| `objectType` | yes | Object |

### Triggers

#### `crm_event` — HubSpot CRM event

Start when HubSpot reports deals, contacts or companies created, changed, deleted, merged, restored or re-associated.

Delivered by webhook, and the signature is verified before anything runs.

**You have to set this up with the provider first:**

In the HubSpot app's webhook settings, set the target URL to the route your host mounts for this trigger and subscribe to the deal, contact and company events you want. Deliveries are signed with the app's client secret, already on the connection as `clientSecret`. ONE URL serves every portal that installed the app, so route each event by its portalId, and only after the signature has verified: map portalId to the connection created when that portal installed, and drop an unmapped portalId with a 2xx and a log line, creating nothing. HubSpot retries a failed delivery, and eventId is not guaranteed to be unique, so never dedupe on eventId alone: a retry is the same event resent, differing only in attemptNumber, so compare every other field.

## Run it before you have credentials

Every operation ships a **faker**, whether or not HubSpot has a sandbox. Set a
node's mode to `fake` and it returns the shape HubSpot actually publishes — the
same field names, deterministically — so you can wire the downstream nodes before
touching an account, a key, or a network.

## This repository is generated

`provider/` is the source. Everything under `packages/` is emitted from it and
**must not be hand-edited** — CI regenerates and diffs on every push, and the
next protocol sync destroys anything it finds. See [`AGENTS.md`](AGENTS.md).

## Two namespaces, which do not match on purpose

The repo is `github.com/Fancy-Friends/hubspot`; the packages publish under
`particle-academy`. Nothing derives one from the other — the names come from
weaver's `friends.json` and nowhere else.

## Licence

MIT.
