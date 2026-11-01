# GENERATED FILE — do not edit.
#
# Emitted from provider/actions/owner-list.json by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/actions/owner-list.json (or weaver's template/) and regenerate:
#
# npm run provider -- hubspot

"""Page through the portal's owners: the users records can be assigned to.

GET /crm/v3/owners —
https://developers.hubspot.com/docs/reference/api/crm/owners

This describes the request. `call` resolves the connection, picks the
estate, and either calls HubSpot or calls the faker.
"""

from __future__ import annotations

from typing import Any

from .._runtime import CallResult, ConnectorConfigError, Mode, call
from ..service import descriptor

OPERATION = "owner_list"
METHOD = "GET"
PATH = "/crm/v3/owners"
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
                "owner_list: \"limit\" must be a integer, got "
                f"{limit!r}."
            )

    out: dict[str, Any] = {}
    _value = config.get("email")
    if _value is not None and _value != "":
        out["email"] = str(_value)
    _value = config.get("limit")
    if _value is not None and _value != "":
        out["limit"] = int(float(_value))
    _value = config.get("after")
    if _value is not None and _value != "":
        out["after"] = str(_value)

    return out


def owner_list(
    config: dict[str, Any],
    *,
    credentials: dict[str, str | None] | None = None,
    mode: Mode = "auto",
    connection_id: str | None = None,
    attempts: int = 3,
) -> CallResult:
    """Page through the portal's owners: the users records can be assigned to."""
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
