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
