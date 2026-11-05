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
    _given = config.get("email")
    _in_map = _properties_map(config.get("properties")).get("email")
    if (_given is None or _given == "") and _in_map is None:
        raise ConnectorConfigError(
            "contact_create: \"email\" is required — as Email, or as \"email\" in Properties."
        )

    _value = config.get("email")
    _in_map = _properties_map(config.get("properties")).get("email")
    _sent = str(_value).strip() if _value is not None and _value != "" else None
    if _sent is not None and _in_map is not None and _in_map != _sent:
        raise ConnectorConfigError(
            "contact_create: \"email\" was given twice with different values — as Email and as "
            "\"email\" in Properties."
        )

    _value = config.get("firstName")
    _in_map = _properties_map(config.get("properties")).get("firstname")
    _sent = str(_value) if _value is not None and _value != "" else None
    if _sent is not None and _in_map is not None and _in_map != _sent:
        raise ConnectorConfigError(
            "contact_create: \"firstName\" was given twice with different values — as First name "
            "and as \"firstname\" in Properties."
        )

    _value = config.get("lastName")
    _in_map = _properties_map(config.get("properties")).get("lastname")
    _sent = str(_value) if _value is not None and _value != "" else None
    if _sent is not None and _in_map is not None and _in_map != _sent:
        raise ConnectorConfigError(
            "contact_create: \"lastName\" was given twice with different values — as Last name and "
            "as \"lastname\" in Properties."
        )

    _value = config.get("company")
    _in_map = _properties_map(config.get("properties")).get("company")
    _sent = str(_value) if _value is not None and _value != "" else None
    if _sent is not None and _in_map is not None and _in_map != _sent:
        raise ConnectorConfigError(
            "contact_create: \"company\" was given twice with different values — as Company and as "
            "\"company\" in Properties."
        )

    _value = config.get("phone")
    _in_map = _properties_map(config.get("properties")).get("phone")
    _sent = str(_value) if _value is not None and _value != "" else None
    if _sent is not None and _in_map is not None and _in_map != _sent:
        raise ConnectorConfigError(
            "contact_create: \"phone\" was given twice with different values — as Phone and as "
            "\"phone\" in Properties."
        )

    _value = config.get("lifecycleStage")
    _in_map = _properties_map(config.get("properties")).get("lifecyclestage")
    _sent = str(_value) if _value is not None and _value != "" else None
    if _sent is not None and _in_map is not None and _in_map != _sent:
        raise ConnectorConfigError(
            "contact_create: \"lifecycleStage\" was given twice with different values — as "
            "Lifecycle stage and as \"lifecyclestage\" in Properties."
        )

    out: dict[str, Any] = {}
    _value = config.get("email")
    if _value is not None and _value != "":
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
    out = _nest_fields(out)
    _named = out.get("properties")
    out["properties"] = {
        **_properties_map(config.get("properties")),
        **(_named if isinstance(_named, dict) else {}),
    }
    return out


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

def _properties_map(value: Any) -> dict[str, str]:
    """A JSON body wants the real nested object, not a JSON string."""
    if not isinstance(value, dict):
        return {}

    return {str(k): str(v) for k, v in value.items() if v is not None and v != ""}