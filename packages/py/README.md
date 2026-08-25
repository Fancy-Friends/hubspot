# HubSpot

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
- **Scopes** — `crm.objects.contacts.write`
- **Access token lifetime** — 1800 seconds (30 minutes). A host that never refreshes works all afternoon and is broken by morning.

The refresh tokens do **not** rotate: the same one is reusable, so a refresh may safely be retried and may run concurrently. Stated rather than assumed, because the opposite — a provider that spends the token and revokes the grant on a replay — looks identical until it happens.

### The estate

HubSpot has a test estate on the same host, reached with credentials from a SEPARATE test account you register. Selecting sandbox mode uses those credentials.

> HubSpot's test estate is a DEVELOPER TEST ACCOUNT: a separate portal you create from the developer account, with its own portal id, its own data and its own OAuth install. Same API host, different account -- so the credential is different and the URL is not. Test accounts expire if unused and carry reduced limits, which is why they are a place to test rather than a place to build against.

## What it can do

### Actions

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
