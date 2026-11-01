# GENERATED FILE — do not edit.
#
# Emitted from provider/fixtures/ by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/fixtures/ (or weaver's template/) and regenerate:
#
# npm run provider -- hubspot

"""The golden fixtures — the SAME values the TypeScript and PHP packages
assert.

Bit-for-bit identical is the claim, and this is what checks it for Python.
Cross-runtime drift does not fail loudly on its own: it completes, down one
path, with no error.
"""

import pytest

from fancy_hubspot._fake import FakeValues, seed_for_call
from fancy_hubspot.faker import respond


def test_company_create_fakes_the_published_shape() -> None:
    config = {}
    fake = FakeValues(seed_for_call("hubspot", "company_create", config))

    faked = respond("company_create", {"config": config, "fake": fake})

    assert faked == {
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
    }


def test_company_get_fakes_the_published_shape() -> None:
    config = {}
    fake = FakeValues(seed_for_call("hubspot", "company_get", config))

    faked = respond("company_get", {"config": config, "fake": fake})

    assert faked == {
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
    }


def test_company_list_fakes_the_published_shape() -> None:
    config = {}
    fake = FakeValues(seed_for_call("hubspot", "company_list", config))

    faked = respond("company_list", {"config": config, "fake": fake})

    assert faked == {
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
    }


def test_company_search_fakes_the_published_shape() -> None:
    config = {}
    fake = FakeValues(seed_for_call("hubspot", "company_search", config))

    faked = respond("company_search", {"config": config, "fake": fake})

    assert faked == {
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
    }


def test_company_update_fakes_the_published_shape() -> None:
    config = {}
    fake = FakeValues(seed_for_call("hubspot", "company_update", config))

    faked = respond("company_update", {"config": config, "fake": fake})

    assert faked == {
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
    }


def test_contact_create_fakes_the_published_shape() -> None:
    config = {}
    fake = FakeValues(seed_for_call("hubspot", "contact_create", config))

    faked = respond("contact_create", {"config": config, "fake": fake})

    assert faked == {
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
    }


def test_contact_get_fakes_the_published_shape() -> None:
    config = {}
    fake = FakeValues(seed_for_call("hubspot", "contact_get", config))

    faked = respond("contact_get", {"config": config, "fake": fake})

    assert faked == {
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
    }


def test_contact_list_fakes_the_published_shape() -> None:
    config = {}
    fake = FakeValues(seed_for_call("hubspot", "contact_list", config))

    faked = respond("contact_list", {"config": config, "fake": fake})

    assert faked == {
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
    }


def test_contact_search_fakes_the_published_shape() -> None:
    config = {}
    fake = FakeValues(seed_for_call("hubspot", "contact_search", config))

    faked = respond("contact_search", {"config": config, "fake": fake})

    assert faked == {
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
    }


def test_contact_update_fakes_the_published_shape() -> None:
    config = {}
    fake = FakeValues(seed_for_call("hubspot", "contact_update", config))

    faked = respond("contact_update", {"config": config, "fake": fake})

    assert faked == {
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
    }


def test_deal_create_fakes_the_published_shape() -> None:
    config = {}
    fake = FakeValues(seed_for_call("hubspot", "deal_create", config))

    faked = respond("deal_create", {"config": config, "fake": fake})

    assert faked == {
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
    }


def test_deal_get_fakes_the_published_shape() -> None:
    config = {}
    fake = FakeValues(seed_for_call("hubspot", "deal_get", config))

    faked = respond("deal_get", {"config": config, "fake": fake})

    assert faked == {
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
    }


def test_deal_list_fakes_the_published_shape() -> None:
    config = {}
    fake = FakeValues(seed_for_call("hubspot", "deal_list", config))

    faked = respond("deal_list", {"config": config, "fake": fake})

    assert faked == {
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
    }


def test_deal_search_fakes_the_published_shape() -> None:
    config = {}
    fake = FakeValues(seed_for_call("hubspot", "deal_search", config))

    faked = respond("deal_search", {"config": config, "fake": fake})

    assert faked == {
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
    }


def test_deal_update_fakes_the_published_shape() -> None:
    config = {}
    fake = FakeValues(seed_for_call("hubspot", "deal_update", config))

    faked = respond("deal_update", {"config": config, "fake": fake})

    assert faked == {
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
    }


def test_owner_list_fakes_the_published_shape() -> None:
    config = {}
    fake = FakeValues(seed_for_call("hubspot", "owner_list", config))

    faked = respond("owner_list", {"config": config, "fake": fake})

    assert faked == {
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
    }


def test_pipeline_list_fakes_the_published_shape() -> None:
    config = {}
    fake = FakeValues(seed_for_call("hubspot", "pipeline_list", config))

    faked = respond("pipeline_list", {"config": config, "fake": fake})

    assert faked == {
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
    }


def test_property_list_fakes_the_published_shape() -> None:
    config = {}
    fake = FakeValues(seed_for_call("hubspot", "property_list", config))

    faked = respond("property_list", {"config": config, "fake": fake})

    assert faked == {
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
    }


def test_crm_event_fakes_the_published_shape() -> None:
    config = {}
    fake = FakeValues(seed_for_call("hubspot", "crm_event", config))

    faked = respond("crm_event", {"config": config, "fake": fake})

    assert faked == [
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
    ]


def test_an_operation_with_no_fixture_raises_rather_than_inventing_a_shape() -> None:
    fake = FakeValues(seed_for_call("hubspot", "no_such_operation", {}))

    with pytest.raises(ValueError, match="no fake response"):
        respond("no_such_operation", {"config": {}, "fake": fake})
