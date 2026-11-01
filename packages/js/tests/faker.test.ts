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
 * The golden fixtures.
 *
 * Deterministic on purpose: the same seed produces the same bytes in
 * TypeScript, PHP and Python, so this file and its twins in the other packages
 * assert the SAME values. That turns the faker into a parity test rather than
 * a convenience — which matters, because cross-runtime drift does not fail
 * loudly. It completes, down one path, with no error.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { fakeRequest } from "@particle-academy/fancy-connector-core";

import { hubspotFaker } from "../src/faker.js";

test("company_create fakes the shape HubSpot publishes", () => {
  const config = {};

  const faked = hubspotFaker("company_create", fakeRequest("hubspot", "company_create", config));

  assert.deepEqual(faked, {
    "id": "666995690",
    "properties": {
      "name": "Acme",
      "domain": "acme.example.test",
      "hs_object_id": "666995690",
      "createdate": "2026-01-01T00:00:00.000Z",
      "lastmodifieddate": "2026-01-01T00:00:00.000Z"
    },
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-01-01T00:00:00.000Z",
    "archived": false
  });
});

test("company_get fakes the shape HubSpot publishes", () => {
  const config = {};

  const faked = hubspotFaker("company_get", fakeRequest("hubspot", "company_get", config));

  assert.deepEqual(faked, {
    "id": "880565950",
    "properties": {
      "name": "Acme",
      "domain": "acme.example.test",
      "hs_object_id": "880565950",
      "createdate": "2026-01-01T00:00:00.000Z",
      "lastmodifieddate": "2026-01-01T00:00:00.000Z"
    },
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-01-01T00:00:00.000Z",
    "archived": false
  });
});

test("company_list fakes the shape HubSpot publishes", () => {
  const config = {};

  const faked = hubspotFaker("company_list", fakeRequest("hubspot", "company_list", config));

  assert.deepEqual(faked, {
    "results": [
      {
        "id": "002451222",
        "properties": {
          "name": "Acme",
          "domain": "acme.example.test",
          "hs_object_id": "002451222",
          "createdate": "2026-01-01T00:00:00.000Z",
          "lastmodifieddate": "2026-01-01T00:00:00.000Z"
        },
        "createdAt": "2026-01-01T00:00:00.000Z",
        "updatedAt": "2026-01-01T00:00:00.000Z",
        "archived": false
      }
    ],
    "paging": {
      "next": {
        "after": "10",
        "link": "?after=10"
      }
    }
  });
});

test("company_search fakes the shape HubSpot publishes", () => {
  const config = {};

  const faked = hubspotFaker("company_search", fakeRequest("hubspot", "company_search", config));

  assert.deepEqual(faked, {
    "total": 1,
    "results": [
      {
        "id": "686753895",
        "properties": {
          "name": "Acme",
          "domain": "acme.example.test",
          "hs_object_id": "686753895",
          "createdate": "2026-01-01T00:00:00.000Z",
          "lastmodifieddate": "2026-01-01T00:00:00.000Z"
        },
        "createdAt": "2026-01-01T00:00:00.000Z",
        "updatedAt": "2026-01-01T00:00:00.000Z",
        "archived": false
      }
    ],
    "paging": {
      "next": {
        "after": "10",
        "link": "?after=10"
      }
    }
  });
});

test("company_update fakes the shape HubSpot publishes", () => {
  const config = {};

  const faked = hubspotFaker("company_update", fakeRequest("hubspot", "company_update", config));

  assert.deepEqual(faked, {
    "id": "952110347",
    "properties": {
      "name": "Acme",
      "domain": "acme.example.test",
      "hs_object_id": "952110347",
      "createdate": "2026-01-01T00:00:00.000Z",
      "lastmodifieddate": "2026-01-01T00:00:00.000Z"
    },
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-01-01T00:00:00.000Z",
    "archived": false
  });
});

test("contact_create fakes the shape HubSpot publishes", () => {
  const config = {};

  const faked = hubspotFaker("contact_create", fakeRequest("hubspot", "contact_create", config));

  assert.deepEqual(faked, {
    "id": "448767632",
    "properties": {
      "email": null,
      "firstname": null,
      "lastname": null,
      "company": null,
      "phone": null,
      "lifecyclestage": "lead",
      "createdate": "2026-01-01T00:00:00.000Z",
      "lastmodifieddate": "2026-01-01T00:00:00.000Z",
      "hs_object_id": "448767632"
    },
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-01-01T00:00:00.000Z",
    "archived": false
  });
});

test("contact_get fakes the shape HubSpot publishes", () => {
  const config = {};

  const faked = hubspotFaker("contact_get", fakeRequest("hubspot", "contact_get", config));

  assert.deepEqual(faked, {
    "id": "143715836",
    "properties": {
      "email": "rosa@example.test",
      "firstname": "Rosa",
      "lastname": "Diaz",
      "hs_object_id": "143715836",
      "createdate": "2026-01-01T00:00:00.000Z",
      "lastmodifieddate": "2026-01-01T00:00:00.000Z"
    },
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-01-01T00:00:00.000Z",
    "archived": false
  });
});

test("contact_list fakes the shape HubSpot publishes", () => {
  const config = {};

  const faked = hubspotFaker("contact_list", fakeRequest("hubspot", "contact_list", config));

  assert.deepEqual(faked, {
    "results": [
      {
        "id": "005770685",
        "properties": {
          "email": "rosa@example.test",
          "firstname": "Rosa",
          "lastname": "Diaz",
          "hs_object_id": "005770685",
          "createdate": "2026-01-01T00:00:00.000Z",
          "lastmodifieddate": "2026-01-01T00:00:00.000Z"
        },
        "createdAt": "2026-01-01T00:00:00.000Z",
        "updatedAt": "2026-01-01T00:00:00.000Z",
        "archived": false
      }
    ],
    "paging": {
      "next": {
        "after": "10",
        "link": "?after=10"
      }
    }
  });
});

test("contact_search fakes the shape HubSpot publishes", () => {
  const config = {};

  const faked = hubspotFaker("contact_search", fakeRequest("hubspot", "contact_search", config));

  assert.deepEqual(faked, {
    "total": 1,
    "results": [
      {
        "id": "707784101",
        "properties": {
          "email": "rosa@example.test",
          "firstname": "Rosa",
          "lastname": "Diaz",
          "hs_object_id": "707784101",
          "createdate": "2026-01-01T00:00:00.000Z",
          "lastmodifieddate": "2026-01-01T00:00:00.000Z"
        },
        "createdAt": "2026-01-01T00:00:00.000Z",
        "updatedAt": "2026-01-01T00:00:00.000Z",
        "archived": false
      }
    ],
    "paging": {
      "next": {
        "after": "10",
        "link": "?after=10"
      }
    }
  });
});

test("contact_update fakes the shape HubSpot publishes", () => {
  const config = {};

  const faked = hubspotFaker("contact_update", fakeRequest("hubspot", "contact_update", config));

  assert.deepEqual(faked, {
    "id": "768737047",
    "properties": {
      "email": "rosa@example.test",
      "firstname": "Rosa",
      "lastname": "Diaz",
      "hs_object_id": "768737047",
      "createdate": "2026-01-01T00:00:00.000Z",
      "lastmodifieddate": "2026-01-01T00:00:00.000Z"
    },
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-01-01T00:00:00.000Z",
    "archived": false
  });
});

test("deal_create fakes the shape HubSpot publishes", () => {
  const config = {};

  const faked = hubspotFaker("deal_create", fakeRequest("hubspot", "deal_create", config));

  assert.deepEqual(faked, {
    "id": "506683730",
    "properties": {
      "dealname": "Acme renewal",
      "amount": "12000",
      "dealstage": "appointmentscheduled",
      "pipeline": "default",
      "hs_object_id": "506683730",
      "createdate": "2026-01-01T00:00:00.000Z",
      "lastmodifieddate": "2026-01-01T00:00:00.000Z"
    },
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-01-01T00:00:00.000Z",
    "archived": false
  });
});

test("deal_get fakes the shape HubSpot publishes", () => {
  const config = {};

  const faked = hubspotFaker("deal_get", fakeRequest("hubspot", "deal_get", config));

  assert.deepEqual(faked, {
    "id": "916817673",
    "properties": {
      "dealname": "Acme renewal",
      "amount": "12000",
      "dealstage": "appointmentscheduled",
      "pipeline": "default",
      "hs_object_id": "916817673",
      "createdate": "2026-01-01T00:00:00.000Z",
      "lastmodifieddate": "2026-01-01T00:00:00.000Z"
    },
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-01-01T00:00:00.000Z",
    "archived": false
  });
});

test("deal_list fakes the shape HubSpot publishes", () => {
  const config = {};

  const faked = hubspotFaker("deal_list", fakeRequest("hubspot", "deal_list", config));

  assert.deepEqual(faked, {
    "results": [
      {
        "id": "443388040",
        "properties": {
          "dealname": "Acme renewal",
          "amount": "12000",
          "dealstage": "appointmentscheduled",
          "pipeline": "default",
          "hs_object_id": "443388040",
          "createdate": "2026-01-01T00:00:00.000Z",
          "lastmodifieddate": "2026-01-01T00:00:00.000Z"
        },
        "createdAt": "2026-01-01T00:00:00.000Z",
        "updatedAt": "2026-01-01T00:00:00.000Z",
        "archived": false
      }
    ],
    "paging": {
      "next": {
        "after": "10",
        "link": "?after=10"
      }
    }
  });
});

test("deal_search fakes the shape HubSpot publishes", () => {
  const config = {};

  const faked = hubspotFaker("deal_search", fakeRequest("hubspot", "deal_search", config));

  assert.deepEqual(faked, {
    "total": 1,
    "results": [
      {
        "id": "157762918",
        "properties": {
          "dealname": "Acme renewal",
          "amount": "12000",
          "dealstage": "appointmentscheduled",
          "pipeline": "default",
          "hs_object_id": "157762918",
          "createdate": "2026-01-01T00:00:00.000Z",
          "lastmodifieddate": "2026-01-01T00:00:00.000Z"
        },
        "createdAt": "2026-01-01T00:00:00.000Z",
        "updatedAt": "2026-01-01T00:00:00.000Z",
        "archived": false
      }
    ],
    "paging": {
      "next": {
        "after": "10",
        "link": "?after=10"
      }
    }
  });
});

test("deal_update fakes the shape HubSpot publishes", () => {
  const config = {};

  const faked = hubspotFaker("deal_update", fakeRequest("hubspot", "deal_update", config));

  assert.deepEqual(faked, {
    "id": "292307275",
    "properties": {
      "dealname": "Acme renewal",
      "amount": "12000",
      "dealstage": "appointmentscheduled",
      "pipeline": "default",
      "hs_object_id": "292307275",
      "createdate": "2026-01-01T00:00:00.000Z",
      "lastmodifieddate": "2026-01-01T00:00:00.000Z"
    },
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-01-01T00:00:00.000Z",
    "archived": false
  });
});

test("owner_list fakes the shape HubSpot publishes", () => {
  const config = {};

  const faked = hubspotFaker("owner_list", fakeRequest("hubspot", "owner_list", config));

  assert.deepEqual(faked, {
    "results": [
      {
        "id": "02341083",
        "email": "rosa@example.test",
        "firstName": "Rosa",
        "lastName": "Diaz",
        "userId": 4242,
        "archived": false
      }
    ],
    "paging": {
      "next": {
        "after": "10",
        "link": "?after=10"
      }
    }
  });
});

test("pipeline_list fakes the shape HubSpot publishes", () => {
  const config = {};

  const faked = hubspotFaker("pipeline_list", fakeRequest("hubspot", "pipeline_list", config));

  assert.deepEqual(faked, {
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
              "probability": "0.2"
            }
          },
          {
            "id": "closedwon",
            "label": "Closed won",
            "displayOrder": 1,
            "metadata": {
              "probability": "1.0"
            }
          }
        ]
      }
    ]
  });
});

test("property_list fakes the shape HubSpot publishes", () => {
  const config = {};

  const faked = hubspotFaker("property_list", fakeRequest("hubspot", "property_list", config));

  assert.deepEqual(faked, {
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
            "value": "appointmentscheduled"
          }
        ]
      }
    ]
  });
});

test("an operation with no fixture throws rather than inventing a shape", () => {
  assert.throws(() => hubspotFaker("no_such_operation", fakeRequest("hubspot", "no_such_operation", {})), /no fake response/);
});
