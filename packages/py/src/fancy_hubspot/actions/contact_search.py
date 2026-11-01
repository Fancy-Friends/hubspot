# GENERATED FILE — do not edit.
#
# Emitted from provider/actions/contact-search.json by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/actions/contact-search.json (or weaver's template/) and regenerate:
#
# npm run provider -- hubspot

"""Find contacts by property filters, sorts or a text query.

POST /crm/v3/objects/contacts/search —
https://developers.hubspot.com/docs/reference/api/crm/objects/contacts

This describes the request. `call` resolves the connection, picks the
estate, and either calls HubSpot or calls the faker.
"""

from __future__ import annotations

import json
from typing import Any

from .._runtime import CallResult, ConnectorConfigError, Mode, call
from ..service import descriptor

OPERATION = "contact_search"
METHOD = "POST"
PATH = "/crm/v3/objects/contacts/search"
SIDE_EFFECTS = "none"


def body(config: dict[str, Any]) -> dict[str, Any]:
    """Build the JSON body for one call, failing loudly and specifically."""
    _filtergroups = config.get("filterGroups")
    if isinstance(_filtergroups, str) and _filtergroups != "":
        try:
            json.loads(_filtergroups)
        except ValueError as _error:
            raise ConnectorConfigError(
                "contact_search: \"filterGroups\" must be JSON: "
                f"{_error}"
            ) from _error

    _sorts = config.get("sorts")
    if isinstance(_sorts, str) and _sorts != "":
        try:
            json.loads(_sorts)
        except ValueError as _error:
            raise ConnectorConfigError(
                "contact_search: \"sorts\" must be JSON: "
                f"{_error}"
            ) from _error

    limit = config.get("limit")
    if limit is not None and limit != "":
        try:
            _n = float(limit)
        except (TypeError, ValueError):
            _n = None
        if _n is None or _n != int(_n) or _n < 1 or _n > 200:
            raise ConnectorConfigError(
                "contact_search: \"limit\" must be a integer, got "
                f"{limit!r}."
            )

    out: dict[str, Any] = {}
    _value = config.get("filterGroups")
    if _value is not None and _value != "":
        out["filterGroups"] = json.loads(_value) if isinstance(_value, str) else _value
    _value = config.get("sorts")
    if _value is not None and _value != "":
        out["sorts"] = json.loads(_value) if isinstance(_value, str) else _value
    _value = config.get("query")
    if _value is not None and _value != "":
        out["query"] = str(_value)
    _value = config.get("properties")
    if _value is not None and _value != "":
        out["properties"] = _properties_list(config.get("properties"))
    _value = config.get("limit")
    if _value is not None and _value != "":
        out["limit"] = int(float(_value))
    _value = config.get("after")
    if _value is not None and _value != "":
        out["after"] = str(_value)

    return out


def contact_search(
    config: dict[str, Any],
    *,
    credentials: dict[str, str | None] | None = None,
    mode: Mode = "auto",
    connection_id: str | None = None,
    attempts: int = 3,
) -> CallResult:
    """Find contacts by property filters, sorts or a text query."""
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


def _properties_list(value: Any) -> list[str]:
    """One value, a ","-separated string, or a list — all end up a list."""
    if isinstance(value, list):
        items = [str(item) for item in value]
    elif isinstance(value, str):
        items = value.split(",")
    else:
        return []

    return [item.strip() for item in items if item.strip()]