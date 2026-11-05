/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/ by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/ (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * What HubSpot actually receives.
 *
 * Every assertion below is about the request rather than the response, and
 * none of it touches the network: the transport is a stub that records what it
 * was handed.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import type { PreparedRequest } from "@particle-academy/fancy-connector-core";

import { hubspotCompanyCreate } from "../src/actions/company-create.js";
import { hubspotCompanyGet } from "../src/actions/company-get.js";
import { hubspotCompanyList } from "../src/actions/company-list.js";
import { hubspotCompanySearch } from "../src/actions/company-search.js";
import { hubspotCompanyUpdate } from "../src/actions/company-update.js";
import { hubspotContactCreate } from "../src/actions/contact-create.js";
import { hubspotContactGet } from "../src/actions/contact-get.js";
import { hubspotContactList } from "../src/actions/contact-list.js";
import { hubspotContactSearch } from "../src/actions/contact-search.js";
import { hubspotContactUpdate } from "../src/actions/contact-update.js";
import { hubspotDealCreate } from "../src/actions/deal-create.js";
import { hubspotDealGet } from "../src/actions/deal-get.js";
import { hubspotDealList } from "../src/actions/deal-list.js";
import { hubspotDealSearch } from "../src/actions/deal-search.js";
import { hubspotDealUpdate } from "../src/actions/deal-update.js";
import { hubspotOwnerList } from "../src/actions/owner-list.js";
import { hubspotPipelineList } from "../src/actions/pipeline-list.js";
import { hubspotPropertyList } from "../src/actions/property-list.js";

/** Capture the prepared request instead of sending it. */
function capture() {
  const seen: PreparedRequest[] = [];

  return {
    seen,
    transport: async (request: PreparedRequest) => {
      seen.push(request);

      return { status: 200, body: JSON.stringify({ id: "captured" }), headers: {} };
    },
  };
}

const CREDENTIALS = {
  "clientId": "test_clientId",
  "clientSecret": "test_clientSecret",
  "accessToken": "test_accessToken",
  "refreshToken": "test_refreshToken"
};

test("company_create sends POST /crm/v3/objects/companies", async () => {
  const { seen, transport } = capture();

  await hubspotCompanyCreate({
    config: {
      "properties": {
        "order_id": "7"
      }
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "POST");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/crm/v3/objects/companies"), seen[0]!.url);

  assert.deepEqual(JSON.parse(String(seen[0]!.body ?? "{}")), {
    "properties": {
      "order_id": "7"
    },
    "associations": []
  });
});

test("company_get sends GET /crm/v3/objects/companies/{companyId}", async () => {
  const { seen, transport } = capture();

  await hubspotCompanyGet({
    config: {
      "companyId": "example-companyId",
      "properties": "example-properties",
      "associations": "example-associations"
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "GET");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/crm/v3/objects/companies/example-companyId"), seen[0]!.url);

  assert.deepEqual(
    Object.fromEntries(new URL(seen[0]!.url).searchParams),
    {
      "properties": "example-properties",
      "associations": "example-associations"
    },
  );
});

test("company_list sends GET /crm/v3/objects/companies", async () => {
  const { seen, transport } = capture();

  await hubspotCompanyList({
    config: {
      "limit": 100,
      "after": "example-after",
      "properties": "example-properties",
      "associations": "example-associations"
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "GET");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/crm/v3/objects/companies"), seen[0]!.url);

  assert.deepEqual(
    Object.fromEntries(new URL(seen[0]!.url).searchParams),
    {
      "limit": "100",
      "after": "example-after",
      "properties": "example-properties",
      "associations": "example-associations"
    },
  );
});

test("company_search sends POST /crm/v3/objects/companies/search", async () => {
  const { seen, transport } = capture();

  await hubspotCompanySearch({
    config: {
      "filterGroups": "[{\"type\":\"section\",\"text\":{\"type\":\"mrkdwn\",\"text\":\"Ticket *42*\"}}]",
      "sorts": "[{\"type\":\"section\",\"text\":{\"type\":\"mrkdwn\",\"text\":\"Ticket *42*\"}}]",
      "query": "example-query",
      "properties": "properties-one, properties-two",
      "limit": 200,
      "after": "example-after"
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "POST");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/crm/v3/objects/companies/search"), seen[0]!.url);

  assert.deepEqual(JSON.parse(String(seen[0]!.body ?? "{}")), {
    "filterGroups": [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "Ticket *42*"
        }
      }
    ],
    "sorts": [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "Ticket *42*"
        }
      }
    ],
    "query": "example-query",
    "properties": [
      "properties-one",
      "properties-two"
    ],
    "limit": 200,
    "after": "example-after"
  });
});

test("company_update sends PATCH /crm/v3/objects/companies/{companyId}", async () => {
  const { seen, transport } = capture();

  await hubspotCompanyUpdate({
    config: {
      "companyId": "example-companyId",
      "properties": {
        "order_id": "7"
      }
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "PATCH");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/crm/v3/objects/companies/example-companyId"), seen[0]!.url);

  assert.deepEqual(JSON.parse(String(seen[0]!.body ?? "{}")), {
    "properties": {
      "order_id": "7"
    }
  });
});

test("contact_create sends POST /crm/v3/objects/contacts", async () => {
  const { seen, transport } = capture();

  await hubspotContactCreate({
    config: {
      "email": "  Example-email  ",
      "firstName": "example-firstName",
      "lastName": "example-lastName",
      "company": "example-company",
      "phone": "example-phone",
      "lifecycleStage": "subscriber",
      "properties": {
        "order_id": "7"
      }
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "POST");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/crm/v3/objects/contacts"), seen[0]!.url);

  assert.deepEqual(JSON.parse(String(seen[0]!.body ?? "{}")), {
    "properties": {
      "order_id": "7",
      "email": "Example-email",
      "firstname": "example-firstName",
      "lastname": "example-lastName",
      "company": "example-company",
      "phone": "example-phone",
      "lifecyclestage": "subscriber"
    },
    "associations": []
  });
});

test("contact_get sends GET /crm/v3/objects/contacts/{contactId}", async () => {
  const { seen, transport } = capture();

  await hubspotContactGet({
    config: {
      "contactId": "example-contactId",
      "properties": "example-properties",
      "associations": "example-associations"
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "GET");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/crm/v3/objects/contacts/example-contactId"), seen[0]!.url);

  assert.deepEqual(
    Object.fromEntries(new URL(seen[0]!.url).searchParams),
    {
      "properties": "example-properties",
      "associations": "example-associations"
    },
  );
});

test("contact_list sends GET /crm/v3/objects/contacts", async () => {
  const { seen, transport } = capture();

  await hubspotContactList({
    config: {
      "limit": 100,
      "after": "example-after",
      "properties": "example-properties",
      "associations": "example-associations"
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "GET");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/crm/v3/objects/contacts"), seen[0]!.url);

  assert.deepEqual(
    Object.fromEntries(new URL(seen[0]!.url).searchParams),
    {
      "limit": "100",
      "after": "example-after",
      "properties": "example-properties",
      "associations": "example-associations"
    },
  );
});

test("contact_search sends POST /crm/v3/objects/contacts/search", async () => {
  const { seen, transport } = capture();

  await hubspotContactSearch({
    config: {
      "filterGroups": "[{\"type\":\"section\",\"text\":{\"type\":\"mrkdwn\",\"text\":\"Ticket *42*\"}}]",
      "sorts": "[{\"type\":\"section\",\"text\":{\"type\":\"mrkdwn\",\"text\":\"Ticket *42*\"}}]",
      "query": "example-query",
      "properties": "properties-one, properties-two",
      "limit": 200,
      "after": "example-after"
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "POST");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/crm/v3/objects/contacts/search"), seen[0]!.url);

  assert.deepEqual(JSON.parse(String(seen[0]!.body ?? "{}")), {
    "filterGroups": [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "Ticket *42*"
        }
      }
    ],
    "sorts": [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "Ticket *42*"
        }
      }
    ],
    "query": "example-query",
    "properties": [
      "properties-one",
      "properties-two"
    ],
    "limit": 200,
    "after": "example-after"
  });
});

test("contact_update sends PATCH /crm/v3/objects/contacts/{contactId}", async () => {
  const { seen, transport } = capture();

  await hubspotContactUpdate({
    config: {
      "contactId": "example-contactId",
      "properties": {
        "order_id": "7"
      }
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "PATCH");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/crm/v3/objects/contacts/example-contactId"), seen[0]!.url);

  assert.deepEqual(JSON.parse(String(seen[0]!.body ?? "{}")), {
    "properties": {
      "order_id": "7"
    }
  });
});

test("deal_create sends POST /crm/v3/objects/deals", async () => {
  const { seen, transport } = capture();

  await hubspotDealCreate({
    config: {
      "properties": {
        "order_id": "7"
      }
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "POST");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/crm/v3/objects/deals"), seen[0]!.url);

  assert.deepEqual(JSON.parse(String(seen[0]!.body ?? "{}")), {
    "properties": {
      "order_id": "7"
    },
    "associations": []
  });
});

test("deal_get sends GET /crm/v3/objects/deals/{dealId}", async () => {
  const { seen, transport } = capture();

  await hubspotDealGet({
    config: {
      "dealId": "example-dealId",
      "properties": "example-properties",
      "associations": "example-associations"
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "GET");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/crm/v3/objects/deals/example-dealId"), seen[0]!.url);

  assert.deepEqual(
    Object.fromEntries(new URL(seen[0]!.url).searchParams),
    {
      "properties": "example-properties",
      "associations": "example-associations"
    },
  );
});

test("deal_list sends GET /crm/v3/objects/deals", async () => {
  const { seen, transport } = capture();

  await hubspotDealList({
    config: {
      "limit": 100,
      "after": "example-after",
      "properties": "example-properties",
      "associations": "example-associations"
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "GET");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/crm/v3/objects/deals"), seen[0]!.url);

  assert.deepEqual(
    Object.fromEntries(new URL(seen[0]!.url).searchParams),
    {
      "limit": "100",
      "after": "example-after",
      "properties": "example-properties",
      "associations": "example-associations"
    },
  );
});

test("deal_search sends POST /crm/v3/objects/deals/search", async () => {
  const { seen, transport } = capture();

  await hubspotDealSearch({
    config: {
      "filterGroups": "[{\"type\":\"section\",\"text\":{\"type\":\"mrkdwn\",\"text\":\"Ticket *42*\"}}]",
      "sorts": "[{\"type\":\"section\",\"text\":{\"type\":\"mrkdwn\",\"text\":\"Ticket *42*\"}}]",
      "query": "example-query",
      "properties": "properties-one, properties-two",
      "limit": 200,
      "after": "example-after"
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "POST");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/crm/v3/objects/deals/search"), seen[0]!.url);

  assert.deepEqual(JSON.parse(String(seen[0]!.body ?? "{}")), {
    "filterGroups": [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "Ticket *42*"
        }
      }
    ],
    "sorts": [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "Ticket *42*"
        }
      }
    ],
    "query": "example-query",
    "properties": [
      "properties-one",
      "properties-two"
    ],
    "limit": 200,
    "after": "example-after"
  });
});

test("deal_update sends PATCH /crm/v3/objects/deals/{dealId}", async () => {
  const { seen, transport } = capture();

  await hubspotDealUpdate({
    config: {
      "dealId": "example-dealId",
      "properties": {
        "order_id": "7"
      }
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "PATCH");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/crm/v3/objects/deals/example-dealId"), seen[0]!.url);

  assert.deepEqual(JSON.parse(String(seen[0]!.body ?? "{}")), {
    "properties": {
      "order_id": "7"
    }
  });
});

test("owner_list sends GET /crm/v3/owners", async () => {
  const { seen, transport } = capture();

  await hubspotOwnerList({
    config: {
      "email": "example-email",
      "limit": 100,
      "after": "example-after"
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "GET");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/crm/v3/owners"), seen[0]!.url);

  assert.deepEqual(
    Object.fromEntries(new URL(seen[0]!.url).searchParams),
    {
      "email": "example-email",
      "limit": "100",
      "after": "example-after"
    },
  );
});

test("pipeline_list sends GET /crm/v3/pipelines/deals", async () => {
  const { seen, transport } = capture();

  await hubspotPipelineList({
    config: {},
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "GET");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/crm/v3/pipelines/deals"), seen[0]!.url);

  assert.deepEqual(
    Object.fromEntries(new URL(seen[0]!.url).searchParams),
    {},
  );
});

test("property_list sends GET /crm/v3/properties/{objectType}", async () => {
  const { seen, transport } = capture();

  await hubspotPropertyList({
    config: {
      "objectType": "deals"
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen.length, 1);
  assert.equal(seen[0]!.method, "GET");
  assert.ok(new URL(seen[0]!.url).pathname.endsWith("/crm/v3/properties/deals"), seen[0]!.url);

  assert.deepEqual(
    Object.fromEntries(new URL(seen[0]!.url).searchParams),
    {},
  );
});

test("the credential is placed the way the provider wants it", async () => {
  const { seen, transport } = capture();

  await hubspotCompanyCreate({
    config: {
      "properties": {
        "order_id": "7"
      }
    },
    credentials: CREDENTIALS,
    mode: "live",
    transport,
  });

  assert.equal(seen[0]!.headers.Authorization, "Bearer test_accessToken");
});

test("a missing required field is refused BEFORE anything is sent", async () => {
  // Nothing was attempted, so there is nothing to classify — and the message names
  // the field, rather than letting the provider answer three frames later with
  // "invalid request".
  const { seen, transport } = capture();

  await assert.rejects(
    hubspotCompanyCreate({
      config: {},
      credentials: CREDENTIALS,
      mode: "live",
      transport,
    }),
    new RegExp("properties"),
  );

  assert.equal(seen.length, 0, "the request must not have been sent");
});
