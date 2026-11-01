# GENERATED FILE — do not edit.
#
# Emitted from provider/actions/contact-list.json by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/actions/contact-list.json (or weaver's template/) and regenerate:
#
# npm run provider -- hubspot

"""Page through every contact in the portal.

GET /crm/v3/objects/contacts —
https://developers.hubspot.com/docs/reference/api/crm/objects/contacts

This describes the request. `call` resolves the connection, picks the
estate, and either calls HubSpot or calls the faker.
"""

from __future__ import annotations

from typing import Any

from .._runtime import CallResult, ConnectorConfigError, Mode, call
from ..service import descriptor

OPERATION = "contact_list"
METHOD = "GET"
PATH = "/crm/v3/objects/contacts"
SIDE_EFFECTS = "none"


def body(config: dict[str, Any]) -> dict[str, Any]:
    """Build the form body for one call, failing loudly and specifically."""
    limit = config.get("limit")
    if limit is not None and limit != "":
        try:
            _n = float(limit)
        except (TypeError, ValueError):
            _n = None
        if _n is None or _n != int(_n) or _n < 1 or _n > 100:
            raise ConnectorConfigError(
                "contact_list: \"limit\" must be a integer, got "
                f"{limit!r}."
            )

    out: dict[str, Any] = {}
    _value = config.get("limit")
    if _value is not None and _value != "":
        out["limit"] = int(float(_value))
    _value = config.get("after")
    if _value is not None and _value != "":
        out["after"] = str(_value)
    _value = config.get("properties")
    if _value is not None and _value != "":
        out["properties"] = str(_value)
    _value = config.get("associations")
    if _value is not None and _value != "":
        out["associations"] = str(_value)

    return out


def contact_list(
    config: dict[str, Any],
    *,
    credentials: dict[str, str | None] | None = None,
    mode: Mode = "auto",
    connection_id: str | None = None,
    attempts: int = 3,
) -> CallResult:
    """Page through every contact in the portal."""
    return call(
        descriptor(),
        operation=OPERATION,
        method=METHOD,
        path=PATH,
        form=body(config),
        config=config,
        credentials=credentials,
        mode=mode,
        connection_id=connection_id,
        attempts=attempts,
    )
