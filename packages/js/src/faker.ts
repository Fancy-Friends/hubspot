/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/fixtures/ by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/fixtures/ (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * The HubSpot faker.
 *
 * Shapes, not behaviour: the goal is that a downstream node sees the field
 * NAMES HubSpot actually publishes, so an author can wire {{ $json.data.id }}
 * against a fake and have it keep working against the real thing.
 *
 * Deterministic — same inputs, same output. A faker returning a fresh uuid
 * every call cannot be asserted on, so its fixtures degrade to "it did not
 * throw", which is the assertion that catches nothing.
 */

import type { ConnectorFaker, FakeRequest } from "@particle-academy/fancy-connector-core";

function fakeCompanyCreate({ config, fake }: FakeRequest): unknown {
  const boundRecordId = Array.from({ length: 9 }, () => fake.int(0, 9)).join("");

  return {
    "id": boundRecordId,
    "properties": {
      "name": "Acme",
      "domain": "acme.example.test",
      "hs_object_id": boundRecordId,
      "createdate": "2026-01-01T00:00:00.000Z",
      "lastmodifieddate": "2026-01-01T00:00:00.000Z",
    },
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-01-01T00:00:00.000Z",
    "archived": false,
  };
}

function fakeCompanyGet({ config, fake }: FakeRequest): unknown {
  const boundRecordId = Array.from({ length: 9 }, () => fake.int(0, 9)).join("");

  return {
    "id": boundRecordId,
    "properties": {
      "name": "Acme",
      "domain": "acme.example.test",
      "hs_object_id": boundRecordId,
      "createdate": "2026-01-01T00:00:00.000Z",
      "lastmodifieddate": "2026-01-01T00:00:00.000Z",
    },
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-01-01T00:00:00.000Z",
    "archived": false,
  };
}

function fakeCompanyList({ config, fake }: FakeRequest): unknown {
  const boundRecordId = Array.from({ length: 9 }, () => fake.int(0, 9)).join("");

  return {
    "results": [
      {
        "id": boundRecordId,
        "properties": {
          "name": "Acme",
          "domain": "acme.example.test",
          "hs_object_id": boundRecordId,
          "createdate": "2026-01-01T00:00:00.000Z",
          "lastmodifieddate": "2026-01-01T00:00:00.000Z",
        },
        "createdAt": "2026-01-01T00:00:00.000Z",
        "updatedAt": "2026-01-01T00:00:00.000Z",
        "archived": false,
      },
    ],
    "paging": {
      "next": {
        "after": "10",
        "link": "?after=10",
      },
    },
  };
}

function fakeCompanySearch({ config, fake }: FakeRequest): unknown {
  const boundRecordId = Array.from({ length: 9 }, () => fake.int(0, 9)).join("");

  return {
    "total": 1,
    "results": [
      {
        "id": boundRecordId,
        "properties": {
          "name": "Acme",
          "domain": "acme.example.test",
          "hs_object_id": boundRecordId,
          "createdate": "2026-01-01T00:00:00.000Z",
          "lastmodifieddate": "2026-01-01T00:00:00.000Z",
        },
        "createdAt": "2026-01-01T00:00:00.000Z",
        "updatedAt": "2026-01-01T00:00:00.000Z",
        "archived": false,
      },
    ],
    "paging": {
      "next": {
        "after": "10",
        "link": "?after=10",
      },
    },
  };
}

function fakeCompanyUpdate({ config, fake }: FakeRequest): unknown {
  const boundRecordId = Array.from({ length: 9 }, () => fake.int(0, 9)).join("");

  return {
    "id": boundRecordId,
    "properties": {
      "name": "Acme",
      "domain": "acme.example.test",
      "hs_object_id": boundRecordId,
      "createdate": "2026-01-01T00:00:00.000Z",
      "lastmodifieddate": "2026-01-01T00:00:00.000Z",
    },
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-01-01T00:00:00.000Z",
    "archived": false,
  };
}

function fakeContactCreate({ config, fake }: FakeRequest): unknown {
  const boundContactId = Array.from({ length: 9 }, () => fake.int(0, 9)).join("");

  return {
    "id": boundContactId,
    "properties": {
      "email": (config.email !== undefined && config.email !== null && config.email !== "" ? String(config.email) : null),
      "firstname": (config.firstName !== undefined && config.firstName !== null && config.firstName !== "" ? String(config.firstName) : null),
      "lastname": (config.lastName !== undefined && config.lastName !== null && config.lastName !== "" ? String(config.lastName) : null),
      "company": (config.company !== undefined && config.company !== null && config.company !== "" ? String(config.company) : null),
      "phone": (config.phone !== undefined && config.phone !== null && config.phone !== "" ? String(config.phone) : null),
      "lifecyclestage": (config.lifecycleStage !== undefined && config.lifecycleStage !== null && config.lifecycleStage !== "" ? String(config.lifecycleStage) : "lead"),
      "createdate": "2026-01-01T00:00:00.000Z",
      "lastmodifieddate": "2026-01-01T00:00:00.000Z",
      "hs_object_id": boundContactId,
    },
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-01-01T00:00:00.000Z",
    "archived": false,
  };
}

function fakeContactGet({ config, fake }: FakeRequest): unknown {
  const boundRecordId = Array.from({ length: 9 }, () => fake.int(0, 9)).join("");

  return {
    "id": boundRecordId,
    "properties": {
      "email": "rosa@example.test",
      "firstname": "Rosa",
      "lastname": "Diaz",
      "hs_object_id": boundRecordId,
      "createdate": "2026-01-01T00:00:00.000Z",
      "lastmodifieddate": "2026-01-01T00:00:00.000Z",
    },
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-01-01T00:00:00.000Z",
    "archived": false,
  };
}

function fakeContactList({ config, fake }: FakeRequest): unknown {
  const boundRecordId = Array.from({ length: 9 }, () => fake.int(0, 9)).join("");

  return {
    "results": [
      {
        "id": boundRecordId,
        "properties": {
          "email": "rosa@example.test",
          "firstname": "Rosa",
          "lastname": "Diaz",
          "hs_object_id": boundRecordId,
          "createdate": "2026-01-01T00:00:00.000Z",
          "lastmodifieddate": "2026-01-01T00:00:00.000Z",
        },
        "createdAt": "2026-01-01T00:00:00.000Z",
        "updatedAt": "2026-01-01T00:00:00.000Z",
        "archived": false,
      },
    ],
    "paging": {
      "next": {
        "after": "10",
        "link": "?after=10",
      },
    },
  };
}

function fakeContactSearch({ config, fake }: FakeRequest): unknown {
  const boundRecordId = Array.from({ length: 9 }, () => fake.int(0, 9)).join("");

  return {
    "total": 1,
    "results": [
      {
        "id": boundRecordId,
        "properties": {
          "email": "rosa@example.test",
          "firstname": "Rosa",
          "lastname": "Diaz",
          "hs_object_id": boundRecordId,
          "createdate": "2026-01-01T00:00:00.000Z",
          "lastmodifieddate": "2026-01-01T00:00:00.000Z",
        },
        "createdAt": "2026-01-01T00:00:00.000Z",
        "updatedAt": "2026-01-01T00:00:00.000Z",
        "archived": false,
      },
    ],
    "paging": {
      "next": {
        "after": "10",
        "link": "?after=10",
      },
    },
  };
}

function fakeContactUpdate({ config, fake }: FakeRequest): unknown {
  const boundRecordId = Array.from({ length: 9 }, () => fake.int(0, 9)).join("");

  return {
    "id": boundRecordId,
    "properties": {
      "email": "rosa@example.test",
      "firstname": "Rosa",
      "lastname": "Diaz",
      "hs_object_id": boundRecordId,
      "createdate": "2026-01-01T00:00:00.000Z",
      "lastmodifieddate": "2026-01-01T00:00:00.000Z",
    },
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-01-01T00:00:00.000Z",
    "archived": false,
  };
}

function fakeDealCreate({ config, fake }: FakeRequest): unknown {
  const boundRecordId = Array.from({ length: 9 }, () => fake.int(0, 9)).join("");

  return {
    "id": boundRecordId,
    "properties": {
      "dealname": "Acme renewal",
      "amount": "12000",
      "dealstage": "appointmentscheduled",
      "pipeline": "default",
      "hs_object_id": boundRecordId,
      "createdate": "2026-01-01T00:00:00.000Z",
      "lastmodifieddate": "2026-01-01T00:00:00.000Z",
    },
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-01-01T00:00:00.000Z",
    "archived": false,
  };
}

function fakeDealGet({ config, fake }: FakeRequest): unknown {
  const boundRecordId = Array.from({ length: 9 }, () => fake.int(0, 9)).join("");

  return {
    "id": boundRecordId,
    "properties": {
      "dealname": "Acme renewal",
      "amount": "12000",
      "dealstage": "appointmentscheduled",
      "pipeline": "default",
      "hs_object_id": boundRecordId,
      "createdate": "2026-01-01T00:00:00.000Z",
      "lastmodifieddate": "2026-01-01T00:00:00.000Z",
    },
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-01-01T00:00:00.000Z",
    "archived": false,
  };
}

function fakeDealList({ config, fake }: FakeRequest): unknown {
  const boundRecordId = Array.from({ length: 9 }, () => fake.int(0, 9)).join("");

  return {
    "results": [
      {
        "id": boundRecordId,
        "properties": {
          "dealname": "Acme renewal",
          "amount": "12000",
          "dealstage": "appointmentscheduled",
          "pipeline": "default",
          "hs_object_id": boundRecordId,
          "createdate": "2026-01-01T00:00:00.000Z",
          "lastmodifieddate": "2026-01-01T00:00:00.000Z",
        },
        "createdAt": "2026-01-01T00:00:00.000Z",
        "updatedAt": "2026-01-01T00:00:00.000Z",
        "archived": false,
      },
    ],
    "paging": {
      "next": {
        "after": "10",
        "link": "?after=10",
      },
    },
  };
}

function fakeDealSearch({ config, fake }: FakeRequest): unknown {
  const boundRecordId = Array.from({ length: 9 }, () => fake.int(0, 9)).join("");

  return {
    "total": 1,
    "results": [
      {
        "id": boundRecordId,
        "properties": {
          "dealname": "Acme renewal",
          "amount": "12000",
          "dealstage": "appointmentscheduled",
          "pipeline": "default",
          "hs_object_id": boundRecordId,
          "createdate": "2026-01-01T00:00:00.000Z",
          "lastmodifieddate": "2026-01-01T00:00:00.000Z",
        },
        "createdAt": "2026-01-01T00:00:00.000Z",
        "updatedAt": "2026-01-01T00:00:00.000Z",
        "archived": false,
      },
    ],
    "paging": {
      "next": {
        "after": "10",
        "link": "?after=10",
      },
    },
  };
}

function fakeDealUpdate({ config, fake }: FakeRequest): unknown {
  const boundRecordId = Array.from({ length: 9 }, () => fake.int(0, 9)).join("");

  return {
    "id": boundRecordId,
    "properties": {
      "dealname": "Acme renewal",
      "amount": "12000",
      "dealstage": "appointmentscheduled",
      "pipeline": "default",
      "hs_object_id": boundRecordId,
      "createdate": "2026-01-01T00:00:00.000Z",
      "lastmodifieddate": "2026-01-01T00:00:00.000Z",
    },
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-01-01T00:00:00.000Z",
    "archived": false,
  };
}

function fakeOwnerList({ config, fake }: FakeRequest): unknown {
  const boundOwnerId = Array.from({ length: 8 }, () => fake.int(0, 9)).join("");

  return {
    "results": [
      {
        "id": boundOwnerId,
        "email": "rosa@example.test",
        "firstName": "Rosa",
        "lastName": "Diaz",
        "userId": 4242,
        "archived": false,
      },
    ],
    "paging": {
      "next": {
        "after": "10",
        "link": "?after=10",
      },
    },
  };
}

function fakePipelineList({ config, fake }: FakeRequest): unknown {
  return {
    "results": [
      {
        "id": "default",
        "label": "Sales pipeline",
        "displayOrder": 0,
        "archived": false,
        "stages": [
          {
            "id": "appointmentscheduled",
            "label": "Appointment scheduled",
            "displayOrder": 0,
            "metadata": {
              "probability": "0.2",
            },
          },
          {
            "id": "closedwon",
            "label": "Closed won",
            "displayOrder": 1,
            "metadata": {
              "probability": "1.0",
            },
          },
        ],
      },
    ],
  };
}

function fakePropertyList({ config, fake }: FakeRequest): unknown {
  return {
    "results": [
      {
        "name": "dealstage",
        "label": "Deal Stage",
        "type": "enumeration",
        "fieldType": "select",
        "groupName": "dealinformation",
        "options": [
          {
            "label": "Appointment scheduled",
            "value": "appointmentscheduled",
          },
        ],
      },
    ],
  };
}

export const hubspotFaker: ConnectorFaker = (operation, request) => {
  switch (operation) {
    case "company_create":
      return fakeCompanyCreate(request);

    case "company_get":
      return fakeCompanyGet(request);

    case "company_list":
      return fakeCompanyList(request);

    case "company_search":
      return fakeCompanySearch(request);

    case "company_update":
      return fakeCompanyUpdate(request);

    case "contact_create":
      return fakeContactCreate(request);

    case "contact_get":
      return fakeContactGet(request);

    case "contact_list":
      return fakeContactList(request);

    case "contact_search":
      return fakeContactSearch(request);

    case "contact_update":
      return fakeContactUpdate(request);

    case "deal_create":
      return fakeDealCreate(request);

    case "deal_get":
      return fakeDealGet(request);

    case "deal_list":
      return fakeDealList(request);

    case "deal_search":
      return fakeDealSearch(request);

    case "deal_update":
      return fakeDealUpdate(request);

    case "owner_list":
      return fakeOwnerList(request);

    case "pipeline_list":
      return fakePipelineList(request);

    case "property_list":
      return fakePropertyList(request);

    default:
      // A faker asked for an operation it has no shape for must SAY so. Making
      // something up would produce a green run whose output silently has none
      // of the fields the author is about to reference.
      throw new Error(
        `hubspot: no fake response is defined for "${operation}". ` +
          "Add a fixture under provider/fixtures/ and regenerate — a connector without a faker " +
          "cannot be developed against, tested, or demonstrated.",
      );
  }
};
