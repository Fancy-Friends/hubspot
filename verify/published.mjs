/*
 * HubSpot — the published npm packages.
 *
 * GENERATED — do not edit. Fix weaver's template/ and regenerate.
 *
 * This runs against the PUBLISHED package, installed by name from the
 * registry into a project that has never seen this repo. Every other test
 * here imports from ../src and therefore cannot see the packaging.
 */

import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { hubspotFaker } from "@particle-academy/hubspot-js";
import { HUBSPOT_KINDS } from "@particle-academy/hubspot-ui";
import { fakeRequest } from "@particle-academy/fancy-connector-core";

/*
 * WHERE did that come from?
 *
 * Node resolves a bare specifier from the importing MODULE's directory, not
 * the working directory. So running this script across from a checkout
 * resolves out of the REPO's node_modules and silently tests the source
 * again — which it did, and passed, before CI caught it.
 *
 * Two things are checked, because neither is enough alone: that the package
 * came from an INSTALL rather than from source, and that this script is not
 * sitting inside the provider repo it is supposed to be testing.
 */
const resolved = import.meta.resolve("@particle-academy/hubspot-js");
const here = dirname(fileURLToPath(import.meta.url));

assert.ok(
  !existsSync(join(here, "..", "packages", "js", "package.json")),
  `${here} is inside the provider repo, so a bare import resolves the repo's ` +
    "own node_modules. Copy this script into a project that installed the " +
    "published package and run it there.",
);
assert.match(resolved, /node_modules/, `resolved ${resolved}, which is not an installed package`);
console.log(`  ok   resolved from ${resolved}`);

const GOLDENS = [
  {
    "operation": "company_create",
    "config": {},
    "expected": {
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
    }
  },
  {
    "operation": "company_get",
    "config": {},
    "expected": {
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
    }
  },
  {
    "operation": "company_list",
    "config": {},
    "expected": {
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
    }
  },
  {
    "operation": "company_search",
    "config": {},
    "expected": {
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
    }
  },
  {
    "operation": "company_update",
    "config": {},
    "expected": {
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
    }
  },
  {
    "operation": "contact_create",
    "config": {},
    "expected": {
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
    }
  },
  {
    "operation": "contact_get",
    "config": {},
    "expected": {
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
    }
  },
  {
    "operation": "contact_list",
    "config": {},
    "expected": {
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
    }
  },
  {
    "operation": "contact_search",
    "config": {},
    "expected": {
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
    }
  },
  {
    "operation": "contact_update",
    "config": {},
    "expected": {
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
    }
  },
  {
    "operation": "deal_create",
    "config": {},
    "expected": {
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
    }
  },
  {
    "operation": "deal_get",
    "config": {},
    "expected": {
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
    }
  },
  {
    "operation": "deal_list",
    "config": {},
    "expected": {
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
    }
  },
  {
    "operation": "deal_search",
    "config": {},
    "expected": {
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
    }
  },
  {
    "operation": "deal_update",
    "config": {},
    "expected": {
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
    }
  },
  {
    "operation": "owner_list",
    "config": {},
    "expected": {
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
    }
  },
  {
    "operation": "pipeline_list",
    "config": {},
    "expected": {
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
    }
  },
  {
    "operation": "property_list",
    "config": {},
    "expected": {
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
    }
  },
  {
    "operation": "crm_event",
    "config": {},
    "expected": [
      {
        "eventId": 531833541,
        "subscriptionId": 3923621,
        "portalId": 48807704,
        "appId": 16111050,
        "occurredAt": 1752613920733,
        "subscriptionType": "contact.creation",
        "attemptNumber": 0,
        "objectId": 138017612137,
        "changeFlag": "CREATED",
        "changeSource": "CRM_UI",
        "sourceId": "userId:76023669"
      },
      {
        "eventId": 531833542,
        "subscriptionId": 3923622,
        "portalId": 48807704,
        "appId": 16111050,
        "occurredAt": 1752613921000,
        "subscriptionType": "deal.propertyChange",
        "attemptNumber": 0,
        "objectId": 9876543210,
        "propertyName": "dealstage",
        "propertyValue": "closedwon",
        "changeSource": "CRM_UI",
        "sourceId": "userId:76023669"
      }
    ]
  }
];

for (const { operation, config, expected } of GOLDENS) {
  const faked = hubspotFaker(operation, fakeRequest("hubspot", operation, config));

  assert.deepEqual(
    faked,
    expected,
    `the PUBLISHED package produced different bytes for ${operation} than the repo does`,
  );
  console.log(`  ok   ${operation}`);
}

// The ui package is a separate tarball, and js depends on it by its
// published name — so this also proves that dependency resolves.
assert.equal(HUBSPOT_KINDS.length, 19);
for (const kind of HUBSPOT_KINDS) {
  const keys = kind.configSchema.map((field) => field.key);
  assert.equal(keys[0], "connection");
  assert.equal(keys[1], "mode");
  assert.ok(kind.outputShape.length > 0, `${kind.name} declares no output shape`);
}
console.log(`  ok   ui kinds resolve from ${"@particle-academy/hubspot-ui"}`);

console.log(`\n  ${GOLDENS.length} operations verified against the published packages.`);
