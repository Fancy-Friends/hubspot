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


def respond(operation: str, request: dict[str, Any]) -> Any:
    """Dispatch to the fixture for one operation."""
    config: dict[str, Any] = request.get("config") or {}
    fake: FakeValues = request["fake"]

    if operation == "contact_create":
        return _contact_create(config, fake)

    # A faker asked for an operation it has no shape for must SAY so. Making
    # something up would produce a green run whose output silently has none of
    # the fields the author is about to reference.
    raise ValueError(
        f'hubspot: no fake response is defined for "{operation}". '
        "Add a fixture under provider/fixtures/ and regenerate — a connector without a faker "
        "cannot be developed against, tested, or demonstrated."
    )
