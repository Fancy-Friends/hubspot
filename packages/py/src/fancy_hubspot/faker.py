# GENERATED FILE — do not edit.
#
# Emitted from provider/fixtures/ by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/fixtures/ (or weaver's template/) and regenerate:
#
# npm run provider -- hubspot

"""The HubSpot faker.

Bit-for-bit identical to the TypeScript and PHP fakers: the same FNV-1a seed
and the same xorshift32 sequence, so a golden fixture asserts the exact
faked payload and ALL THREE runtimes have to produce it. That turns the
faker into a parity test rather than a convenience — which matters, because
cross-runtime drift does not fail loudly. It completes, down one path, with
no error.
"""

from __future__ import annotations

from typing import Any

from ._fake import FakeValues


def _as_number(value: Any) -> float | None:
    """The coercion an `"as": "integer" | "number"` config binding uses: a value
    that IS a number, never int(float(...))'s uncaught ValueError on one that
    merely looks like text (a text field's auto-generated example, before an
    author has typed a real one).
    """
    try:
        return float(value)
    except (TypeError, ValueError):
        return None


def _company_create(config: dict[str, Any], fake: FakeValues) -> Any:
    bound_record_id = "".join(str(fake.int(0, 9)) for _ in range(9))

    return {
        "id": bound_record_id,
        "properties": {
            "name": "Acme",
            "domain": "acme.example.test",
            "hs_object_id": bound_record_id,
            "createdate": "2026-01-01T00:00:00.000Z",
            "lastmodifieddate": "2026-01-01T00:00:00.000Z",
        },
        "createdAt": "2026-01-01T00:00:00.000Z",
        "updatedAt": "2026-01-01T00:00:00.000Z",
        "archived": False,
    }


def _company_get(config: dict[str, Any], fake: FakeValues) -> Any:
    bound_record_id = "".join(str(fake.int(0, 9)) for _ in range(9))

    return {
        "id": bound_record_id,
        "properties": {
            "name": "Acme",
            "domain": "acme.example.test",
            "hs_object_id": bound_record_id,
            "createdate": "2026-01-01T00:00:00.000Z",
            "lastmodifieddate": "2026-01-01T00:00:00.000Z",
        },
        "createdAt": "2026-01-01T00:00:00.000Z",
        "updatedAt": "2026-01-01T00:00:00.000Z",
        "archived": False,
    }


def _company_list(config: dict[str, Any], fake: FakeValues) -> Any:
    bound_record_id = "".join(str(fake.int(0, 9)) for _ in range(9))

    return {
        "results": [
            {
                "id": bound_record_id,
                "properties": {
                    "name": "Acme",
                    "domain": "acme.example.test",
                    "hs_object_id": bound_record_id,
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


def _company_search(config: dict[str, Any], fake: FakeValues) -> Any:
    bound_record_id = "".join(str(fake.int(0, 9)) for _ in range(9))

    return {
        "total": 1,
        "results": [
            {
                "id": bound_record_id,
                "properties": {
                    "name": "Acme",
                    "domain": "acme.example.test",
                    "hs_object_id": bound_record_id,
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


def _company_update(config: dict[str, Any], fake: FakeValues) -> Any:
    bound_record_id = "".join(str(fake.int(0, 9)) for _ in range(9))

    return {
        "id": bound_record_id,
        "properties": {
            "name": "Acme",
            "domain": "acme.example.test",
            "hs_object_id": bound_record_id,
            "createdate": "2026-01-01T00:00:00.000Z",
            "lastmodifieddate": "2026-01-01T00:00:00.000Z",
        },
        "createdAt": "2026-01-01T00:00:00.000Z",
        "updatedAt": "2026-01-01T00:00:00.000Z",
        "archived": False,
    }


def _contact_create(config: dict[str, Any], fake: FakeValues) -> Any:
    bound_contact_id = "".join(str(fake.int(0, 9)) for _ in range(9))

    return {
        "id": bound_contact_id,
        "properties": {
            "email": (str(_v) if (_v := config.get("email")) is not None and _v != "" else None),
            "firstname": (
                str(_v)
                if (_v := config.get("firstName")) is not None and _v != ""
                else None
            ),
            "lastname": (
                str(_v)
                if (_v := config.get("lastName")) is not None and _v != ""
                else None
            ),
            "company": (
                str(_v)
                if (_v := config.get("company")) is not None and _v != ""
                else None
            ),
            "phone": (str(_v) if (_v := config.get("phone")) is not None and _v != "" else None),
            "lifecyclestage": (
                str(_v)
                if (_v := config.get("lifecycleStage")) is not None and _v != ""
                else "lead"
            ),
            "createdate": "2026-01-01T00:00:00.000Z",
            "lastmodifieddate": "2026-01-01T00:00:00.000Z",
            "hs_object_id": bound_contact_id,
        },
        "createdAt": "2026-01-01T00:00:00.000Z",
        "updatedAt": "2026-01-01T00:00:00.000Z",
        "archived": False,
    }


def _contact_get(config: dict[str, Any], fake: FakeValues) -> Any:
    bound_record_id = "".join(str(fake.int(0, 9)) for _ in range(9))

    return {
        "id": bound_record_id,
        "properties": {
            "email": "rosa@example.test",
            "firstname": "Rosa",
            "lastname": "Diaz",
            "hs_object_id": bound_record_id,
            "createdate": "2026-01-01T00:00:00.000Z",
            "lastmodifieddate": "2026-01-01T00:00:00.000Z",
        },
        "createdAt": "2026-01-01T00:00:00.000Z",
        "updatedAt": "2026-01-01T00:00:00.000Z",
        "archived": False,
    }


def _contact_list(config: dict[str, Any], fake: FakeValues) -> Any:
    bound_record_id = "".join(str(fake.int(0, 9)) for _ in range(9))

    return {
        "results": [
            {
                "id": bound_record_id,
                "properties": {
                    "email": "rosa@example.test",
                    "firstname": "Rosa",
                    "lastname": "Diaz",
                    "hs_object_id": bound_record_id,
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


def _contact_search(config: dict[str, Any], fake: FakeValues) -> Any:
    bound_record_id = "".join(str(fake.int(0, 9)) for _ in range(9))

    return {
        "total": 1,
        "results": [
            {
                "id": bound_record_id,
                "properties": {
                    "email": "rosa@example.test",
                    "firstname": "Rosa",
                    "lastname": "Diaz",
                    "hs_object_id": bound_record_id,
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


def _contact_update(config: dict[str, Any], fake: FakeValues) -> Any:
    bound_record_id = "".join(str(fake.int(0, 9)) for _ in range(9))

    return {
        "id": bound_record_id,
        "properties": {
            "email": "rosa@example.test",
            "firstname": "Rosa",
            "lastname": "Diaz",
            "hs_object_id": bound_record_id,
            "createdate": "2026-01-01T00:00:00.000Z",
            "lastmodifieddate": "2026-01-01T00:00:00.000Z",
        },
        "createdAt": "2026-01-01T00:00:00.000Z",
        "updatedAt": "2026-01-01T00:00:00.000Z",
        "archived": False,
    }


def _deal_create(config: dict[str, Any], fake: FakeValues) -> Any:
    bound_record_id = "".join(str(fake.int(0, 9)) for _ in range(9))

    return {
        "id": bound_record_id,
        "properties": {
            "dealname": "Acme renewal",
            "amount": "12000",
            "dealstage": "appointmentscheduled",
            "pipeline": "default",
            "hs_object_id": bound_record_id,
            "createdate": "2026-01-01T00:00:00.000Z",
            "lastmodifieddate": "2026-01-01T00:00:00.000Z",
        },
        "createdAt": "2026-01-01T00:00:00.000Z",
        "updatedAt": "2026-01-01T00:00:00.000Z",
        "archived": False,
    }


def _deal_get(config: dict[str, Any], fake: FakeValues) -> Any:
    bound_record_id = "".join(str(fake.int(0, 9)) for _ in range(9))

    return {
        "id": bound_record_id,
        "properties": {
            "dealname": "Acme renewal",
            "amount": "12000",
            "dealstage": "appointmentscheduled",
            "pipeline": "default",
            "hs_object_id": bound_record_id,
            "createdate": "2026-01-01T00:00:00.000Z",
            "lastmodifieddate": "2026-01-01T00:00:00.000Z",
        },
        "createdAt": "2026-01-01T00:00:00.000Z",
        "updatedAt": "2026-01-01T00:00:00.000Z",
        "archived": False,
    }


def _deal_list(config: dict[str, Any], fake: FakeValues) -> Any:
    bound_record_id = "".join(str(fake.int(0, 9)) for _ in range(9))

    return {
        "results": [
            {
                "id": bound_record_id,
                "properties": {
                    "dealname": "Acme renewal",
                    "amount": "12000",
                    "dealstage": "appointmentscheduled",
                    "pipeline": "default",
                    "hs_object_id": bound_record_id,
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


def _deal_search(config: dict[str, Any], fake: FakeValues) -> Any:
    bound_record_id = "".join(str(fake.int(0, 9)) for _ in range(9))

    return {
        "total": 1,
        "results": [
            {
                "id": bound_record_id,
                "properties": {
                    "dealname": "Acme renewal",
                    "amount": "12000",
                    "dealstage": "appointmentscheduled",
                    "pipeline": "default",
                    "hs_object_id": bound_record_id,
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


def _deal_update(config: dict[str, Any], fake: FakeValues) -> Any:
    bound_record_id = "".join(str(fake.int(0, 9)) for _ in range(9))

    return {
        "id": bound_record_id,
        "properties": {
            "dealname": "Acme renewal",
            "amount": "12000",
            "dealstage": "appointmentscheduled",
            "pipeline": "default",
            "hs_object_id": bound_record_id,
            "createdate": "2026-01-01T00:00:00.000Z",
            "lastmodifieddate": "2026-01-01T00:00:00.000Z",
        },
        "createdAt": "2026-01-01T00:00:00.000Z",
        "updatedAt": "2026-01-01T00:00:00.000Z",
        "archived": False,
    }


def _owner_list(config: dict[str, Any], fake: FakeValues) -> Any:
    bound_owner_id = "".join(str(fake.int(0, 9)) for _ in range(8))

    return {
        "results": [
            {
                "id": bound_owner_id,
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


def _pipeline_list(config: dict[str, Any], fake: FakeValues) -> Any:
    return {
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


def _property_list(config: dict[str, Any], fake: FakeValues) -> Any:
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
    }


def respond(operation: str, request: dict[str, Any]) -> Any:
    """Dispatch to the fixture for one operation."""
    config: dict[str, Any] = request.get("config") or {}
    fake: FakeValues = request["fake"]

    if operation == "company_create":
        return _company_create(config, fake)

    if operation == "company_get":
        return _company_get(config, fake)

    if operation == "company_list":
        return _company_list(config, fake)

    if operation == "company_search":
        return _company_search(config, fake)

    if operation == "company_update":
        return _company_update(config, fake)

    if operation == "contact_create":
        return _contact_create(config, fake)

    if operation == "contact_get":
        return _contact_get(config, fake)

    if operation == "contact_list":
        return _contact_list(config, fake)

    if operation == "contact_search":
        return _contact_search(config, fake)

    if operation == "contact_update":
        return _contact_update(config, fake)

    if operation == "deal_create":
        return _deal_create(config, fake)

    if operation == "deal_get":
        return _deal_get(config, fake)

    if operation == "deal_list":
        return _deal_list(config, fake)

    if operation == "deal_search":
        return _deal_search(config, fake)

    if operation == "deal_update":
        return _deal_update(config, fake)

    if operation == "owner_list":
        return _owner_list(config, fake)

    if operation == "pipeline_list":
        return _pipeline_list(config, fake)

    if operation == "property_list":
        return _property_list(config, fake)

    # A faker asked for an operation it has no shape for must SAY so. Making
    # something up would produce a green run whose output silently has none of
    # the fields the author is about to reference.
    raise ValueError(
        f'hubspot: no fake response is defined for "{operation}". '
        "Add a fixture under provider/fixtures/ and regenerate — a connector without a faker "
        "cannot be developed against, tested, or demonstrated."
    )
