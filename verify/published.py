"""
HubSpot — the published PyPI wheel.

GENERATED — do not edit. Fix weaver's template/ and regenerate.

Runs against the PUBLISHED wheel, installed by name into a fresh venv.
Every other test here imports from ../src and cannot see the packaging —
a missing py.typed or an unshipped module passes there and breaks for
every user.
"""

from importlib.metadata import requires

from fancy_hubspot._fake import FakeValues, seed_for_call
from fancy_hubspot.faker import respond

GOLDENS = [
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
                "lastmodifieddate": "2026-01-01T00:00:00.000Z",
            },
            "createdAt": "2026-01-01T00:00:00.000Z",
            "updatedAt": "2026-01-01T00:00:00.000Z",
            "archived": False,
        },
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
                "lastmodifieddate": "2026-01-01T00:00:00.000Z",
            },
            "createdAt": "2026-01-01T00:00:00.000Z",
            "updatedAt": "2026-01-01T00:00:00.000Z",
            "archived": False,
        },
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
                        "lastmodifieddate": "2026-01-01T00:00:00.000Z",
                    },
                    "createdAt": "2026-01-01T00:00:00.000Z",
                    "updatedAt": "2026-01-01T00:00:00.000Z",
                    "archived": False,
                },
            ],
            "paging": {
                "next": {
                    "after": "10",
                    "link": "?after=10",
                },
            },
        },
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
                        "lastmodifieddate": "2026-01-01T00:00:00.000Z",
                    },
                    "createdAt": "2026-01-01T00:00:00.000Z",
                    "updatedAt": "2026-01-01T00:00:00.000Z",
                    "archived": False,
                },
            ],
            "paging": {
                "next": {
                    "after": "10",
                    "link": "?after=10",
                },
            },
        },
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
                "lastmodifieddate": "2026-01-01T00:00:00.000Z",
            },
            "createdAt": "2026-01-01T00:00:00.000Z",
            "updatedAt": "2026-01-01T00:00:00.000Z",
            "archived": False,
        },
    },
    {
        "operation": "contact_create",
        "config": {},
        "expected": {
            "id": "448767632",
            "properties": {
                "email": None,
                "firstname": None,
                "lastname": None,
                "company": None,
                "phone": None,
                "lifecyclestage": "lead",
                "createdate": "2026-01-01T00:00:00.000Z",
                "lastmodifieddate": "2026-01-01T00:00:00.000Z",
                "hs_object_id": "448767632",
            },
            "createdAt": "2026-01-01T00:00:00.000Z",
            "updatedAt": "2026-01-01T00:00:00.000Z",
            "archived": False,
        },
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
                "lastmodifieddate": "2026-01-01T00:00:00.000Z",
            },
            "createdAt": "2026-01-01T00:00:00.000Z",
            "updatedAt": "2026-01-01T00:00:00.000Z",
            "archived": False,
        },
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
                        "lastmodifieddate": "2026-01-01T00:00:00.000Z",
                    },
                    "createdAt": "2026-01-01T00:00:00.000Z",
                    "updatedAt": "2026-01-01T00:00:00.000Z",
                    "archived": False,
                },
            ],
            "paging": {
                "next": {
                    "after": "10",
                    "link": "?after=10",
                },
            },
        },
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
                        "lastmodifieddate": "2026-01-01T00:00:00.000Z",
                    },
                    "createdAt": "2026-01-01T00:00:00.000Z",
                    "updatedAt": "2026-01-01T00:00:00.000Z",
                    "archived": False,
                },
            ],
            "paging": {
                "next": {
                    "after": "10",
                    "link": "?after=10",
                },
            },
        },
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
                "lastmodifieddate": "2026-01-01T00:00:00.000Z",
            },
            "createdAt": "2026-01-01T00:00:00.000Z",
            "updatedAt": "2026-01-01T00:00:00.000Z",
            "archived": False,
        },
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
                "lastmodifieddate": "2026-01-01T00:00:00.000Z",
            },
            "createdAt": "2026-01-01T00:00:00.000Z",
            "updatedAt": "2026-01-01T00:00:00.000Z",
            "archived": False,
        },
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
                "lastmodifieddate": "2026-01-01T00:00:00.000Z",
            },
            "createdAt": "2026-01-01T00:00:00.000Z",
            "updatedAt": "2026-01-01T00:00:00.000Z",
            "archived": False,
        },
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
                        "lastmodifieddate": "2026-01-01T00:00:00.000Z",
                    },
                    "createdAt": "2026-01-01T00:00:00.000Z",
                    "updatedAt": "2026-01-01T00:00:00.000Z",
                    "archived": False,
                },
            ],
            "paging": {
                "next": {
                    "after": "10",
                    "link": "?after=10",
                },
            },
        },
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
                        "lastmodifieddate": "2026-01-01T00:00:00.000Z",
                    },
                    "createdAt": "2026-01-01T00:00:00.000Z",
                    "updatedAt": "2026-01-01T00:00:00.000Z",
                    "archived": False,
                },
            ],
            "paging": {
                "next": {
                    "after": "10",
                    "link": "?after=10",
                },
            },
        },
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
                "lastmodifieddate": "2026-01-01T00:00:00.000Z",
            },
            "createdAt": "2026-01-01T00:00:00.000Z",
            "updatedAt": "2026-01-01T00:00:00.000Z",
            "archived": False,
        },
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
                    "archived": False,
                },
            ],
            "paging": {
                "next": {
                    "after": "10",
                    "link": "?after=10",
                },
            },
        },
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
                    "archived": False,
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
        },
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
                            "value": "appointmentscheduled",
                        },
                    ],
                },
            ],
        },
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
                "sourceId": "userId:76023669",
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
                "sourceId": "userId:76023669",
            },
        ],
    },
]


def main() -> None:
    # Zero runtime dependencies is a design constraint, checked on the
    # INSTALLED distribution rather than on the pyproject that claimed it.
    declared = requires("fancy-hubspot")
    assert not declared, f"expected no runtime dependencies, got {declared}"
    print("  ok   zero runtime dependencies on the installed distribution")

    for golden in GOLDENS:
        operation, config = golden["operation"], golden["config"]
        fake = FakeValues(seed_for_call("hubspot", operation, config))
        faked = respond(operation, {"config": config, "fake": fake})

        assert faked == golden["expected"], (
            f"the PUBLISHED wheel produced different bytes for {operation} than the repo does"
        )
        print(f"  ok   {operation}")

    print(f"\n  {len(GOLDENS)} operations verified against the published wheel.")


if __name__ == "__main__":
    main()
