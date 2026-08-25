# Changelog

All notable changes to `@particle-academy/hubspot-ui`, `@particle-academy/hubspot-js`,
`particle-academy/hubspot-php` and `fancy-hubspot`.

The four packages share one version, because they are generated from one
`provider/` definition and a version that meant something different in each
would be a version nobody could reason about.

## [0.3.0] — 2026-08-24

### Added

- **The README now says how to SET THIS CONNECTOR UP**, in the package itself.

Until now it explained what the four packages are, what they cost and why the
repo is generated — and said nothing about credentials, scopes, sandboxes or
operations. Somebody who installed it could not learn from it which credentials
a connection needs, where a human GETS them, which scopes to request, or what
the connector can actually do. All of that was already in the definition; the
one document a consumer reads was the one that omitted everything actionable.

The new **Setting it up** section carries:

- every credential, with the text saying where the value comes from, whether it
  is **per installation** or **per connected account**, and whether it is secret;
- the OAuth authorize and token URLs and the exact scopes, verbatim;
- the access-token lifetime, and where refresh tokens ROTATE, the two things a
  host must not do — retry a failed refresh, or refresh concurrently — because a
  replay revokes the entire grant and nothing in the failure says why;
- the estate in this provider's own terms, including the cases where a
  successful-looking run reaches nobody, or reaches the real one;
- every action and trigger with its method, path, inputs, and whether it is safe
  to replay;
- a trigger's provider-side setup, which nobody can derive from anything else.

It is **generated from `provider/manifest.json`**, so it cannot drift from what
the packages do — which is the point at a few hundred providers, where a
hand-written setup section is a few hundred documents going quietly stale.

No code changed. This release exists because a registry and an installing agent
read the PUBLISHED artifact, and the artifact carried the old README.

## [0.2.0] — 2026-08-24

### Changed

- **`@particle-academy/hubspot-ui` is now an OPTIONAL PEER dependency of `@particle-academy/hubspot-js`, not a hard one.**

`./flow` needs it; nothing else does. It was a hard dependency, and because
`@particle-academy/hubspot-ui` itself peer-depends on `fancy-flow` — which npm 7+ installs
automatically — `npm install @particle-academy/hubspot-js` pulled the **entire flow engine**
onto disk for a consumer who only wanted to call the API. Roughly **18 MB
became 874 KB**, and the package works exactly as before:

```js
import { hubspot… } from "@particle-academy/hubspot-js";
// an injected transport, no flow engine anywhere
```

**This is breaking if you use `@particle-academy/hubspot-js/flow`.** Add `@particle-academy/hubspot-ui` to your own
dependencies — it was always being installed for you, and now it is declared.
Everything importing only the main entry point is unaffected.

The fix is on this edge rather than on `@particle-academy/hubspot-ui` → `fancy-flow`: the ui package
genuinely requires fancy-flow, since it calls `defineConnectorKind`, and marking
that peer optional would be a lie about what it needs.

## [0.1.0] — 2026-08-20

First release. Provider four, and the first that is not a static credential.

### Added

- `contact_create` — create a contact. `POST /crm/v3/objects/contacts`.
- A faker for it, so the node runs on a canvas with no app, no consent screen
  and no HubSpot account.
- `HUBSPOT_OAUTH` — the OAuth2 exchange, declared for a host to perform.

### Why HubSpot, and not the next name on the list

Stripe, Resend and Telegram are all static-credential providers. Three of those
prove the generator handles that shape three times; they say nothing about the
shape it has never met. HubSpot is **OAuth2**, and it broke five assumptions —
four caught by the strict key check on the way in, and one that could not be,
because the spelling was already legal.

**Every fact here is read from HubSpot's own published OpenAPI document**
(`https://api.hubspot.com/public/api/spec/v1/specs` → Contacts v3), not from
memory: the base URL, the path, the request schema, the response schema and the
OAuth2 URLs and scope.

### The shape of the credential is the point

An OAuth app's client id and secret are **one value for the whole
installation** — the same app serves every connected account. The access and
refresh tokens are **one per account**. The connector runtime has always had a
word for this (`CredentialScope`); nothing in the generator did, so every
credential was implicitly per-account. Getting it wrong in the other direction
is not untidy, it is one account's token reaching another's.

`accessToken` is the only credential in `requires`. `clientId` and
`clientSecret` are needed to OBTAIN a token and to refresh it; they are never
sent with a request, and listing them would make every call refuse without an
app secret it does not use.

### The package declares the dance and does not perform it

A consent screen needs a browser, a redirect URI and somewhere to persist the
result. All three belong to the host — a package that ran the exchange itself
would have to own a web server. So `HUBSPOT_OAUTH` says precisely enough for a
host to do it, including the part that is easy to miss: **an access token lasts
30 minutes**. A host that never refreshes works all afternoon and is broken by
morning, and nothing in the request says why.

### Not here yet

No trigger. HubSpot signs webhooks with `X-HubSpot-Signature-v3`, an HMAC over
`method + uri + body + timestamp` — and `{method}` and `{uri}` are not payload
slots the verification vocabulary has. That is the same shape as Resend's Svix
problem, and the two of them together are what the next round of webhook work
should be driven by.

`sideEffects` is `unsafe-to-replay`. HubSpot has no idempotency header, so a
retry creates a second contact; it de-duplicates on email at the account level,
which softens the common case and does nothing for a contact created without
one.

[0.1.0]: https://github.com/Fancy-Friends/hubspot/releases/tag/v0.1.0
[0.2.0]: https://github.com/Fancy-Friends/hubspot/releases/tag/v0.2.0
[0.3.0]: https://github.com/Fancy-Friends/hubspot/releases/tag/v0.3.0
