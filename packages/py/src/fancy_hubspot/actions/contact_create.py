# GENERATED FILE — do not edit.
#
# Emitted from provider/actions/contact-create.json by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/actions/contact-create.json (or weaver's template/) and regenerate:
#
# npm run provider -- hubspot

"""Create a contact in HubSpot.

POST /crm/v3/objects/contacts —
https://developers.hubspot.com/docs/reference/api/crm/objects/contacts

This describes the request. `call` resolves the connection, picks the
estate, and either calls HubSpot or calls the faker.
"""

from __future__ import annotations

from typing import Any

from .._runtime import CallResult, ConnectorConfigError, Mode, call
from ..service import descriptor

OPERATION = "contact_create"
METHOD = "POST"
PATH = "/crm/v3/objects/contacts"
SIDE_EFFECTS = "unsafe-to-replay"


def body(config: dict[str, Any]) -> dict[str, Any]:
    """Build the JSON body for one call, failing loudly and specifically."""
    if config.get("email") is None or config.get("email") == "":
        raise ConnectorConfigError(
            "contact_create: \"email\" is required (Email)."
        )

    out: dict[str, Any] = {}
    _value = config.get("email")
    if _value is None or _value == "":
        raise ConnectorConfigError("contact_create: \"email\" is required.")

    out["properties.email"] = str(_value).strip()
    _value = config.get("firstName")
    if _value is not None and _value != "":
        out["properties.firstname"] = str(_value)
    _value = config.get("lastName")
    if _value is not None and _value != "":
        out["properties.lastname"] = str(_value)
    _value = config.get("company")
    if _value is not None and _value != "":
        out["properties.company"] = str(_value)
    _value = config.get("phone")
    if _value is not None and _value != "":
        out["properties.phone"] = str(_value)
    _value = config.get("lifecycleStage")
    if _value is not None and _value != "":
        out["properties.lifecyclestage"] = str(_value)

    out["associations"] = []
    return _nest_fields(out)


def contact_create(
    config: dict[str, Any],
    *,
    credentials: dict[str, str | None] | None = None,
    mode: Mode = "auto",
    connection_id: str | None = None,
    attempts: int = 3,
) -> CallResult:
    """Create a contact in HubSpot."""
    return call(
        descriptor(),
        operation=OPERATION,
        method=METHOD,
        path=PATH,
        json_body=body(config),
        config=config,
        credentials=credentials,
        mode=mode,
        connection_id=connection_id,
        attempts=attempts,
    )



def _nest_fields(flat: dict[str, Any]) -> dict[str, Any]:
    """`{"properties.email": x}` -> `{"properties": {"email": x}}`.

    A dotted `as` means NESTING, and only a JSON body can nest -- in a form body
    that spelling already means a literal dotted key.
    """
    out: dict[str, Any] = {}

    for path, value in flat.items():
        parts = path.split(".")
        node = out

        for key in parts[:-1]:
            found = node.get(key)
            if not isinstance(found, dict):
                found = {}
                node[key] = found
            node = found

        node[parts[-1]] = value

    # The ROOT is always an object -- a JSON body's top level is never a list
    # -- so only its VALUES are converted. That also keeps the return type
    # honest: `_listify` returns Any, and returning it directly is a
    # no-any-return error under mypy --strict.
    return {key: _listify(value) for key, value in out.items()}


def _listify(node: Any) -> Any:
    """A mapping whose keys are 0, 1, 2 ... is an ARRAY, not an object.

    `dateRanges.0.startDate` has to become `[{...}]`. PHP produced the list by
    accident -- its integer-keyed arrays serialise as JSON arrays -- while
    TypeScript and Python produced `{"0": {...}}`, which the provider refuses
    as the wrong type. The parity suite is what caught the disagreement, and
    converting at the END keeps the walk above simple.
    """
    if not isinstance(node, dict):
        return node

    walked = {key: _listify(value) for key, value in node.items()}
    wanted = [str(index) for index in range(len(walked))]

    if walked and list(walked.keys()) == wanted:
        return [walked[key] for key in wanted]

    return walked