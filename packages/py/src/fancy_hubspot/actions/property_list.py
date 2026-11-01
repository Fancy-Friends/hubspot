# GENERATED FILE — do not edit.
#
# Emitted from provider/actions/property-list.json by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/actions/property-list.json (or weaver's template/) and regenerate:
#
# npm run provider -- hubspot

"""Every property defined on deals, contacts or companies: name, label, type
and the options of an enumeration.

GET /crm/v3/properties/{objectType} —
https://developers.hubspot.com/docs/reference/api/crm/properties

This describes the request. `call` resolves the connection, picks the
estate, and either calls HubSpot or calls the faker.
"""

from __future__ import annotations

from typing import Any
from urllib.parse import quote

from .._runtime import CallResult, ConnectorConfigError, Mode, call
from ..service import descriptor

OPERATION = "property_list"
METHOD = "GET"
PATH = "/crm/v3/properties/{objectType}"
SIDE_EFFECTS = "none"


def body(config: dict[str, Any]) -> dict[str, Any]:
    """Build the form body for one call, failing loudly and specifically."""
    if config.get("objectType") is None or config.get("objectType") == "":
        raise ConnectorConfigError(
            "property_list: \"objectType\" is required (Object)."
        )

    out: dict[str, Any] = {}

    return out



def path(config: dict[str, Any]) -> str:
    """The request path, with each config value URL-ENCODED into it.

    `PATH` above is the TEMPLATE, which is what the descriptor advertises;
    this is what a caller sends. A value interpolated raw changes WHICH URL is
    called — a range like `Sheet1!A:B`, or a sheet named `Q1/Q2` — and the
    provider answers 404 about the document rather than about the encoding.
    """
    return (
        "/crm/v3/properties/"
        + quote(str(config.get("objectType") or ""), safe="")
    )

def property_list(
    config: dict[str, Any],
    *,
    credentials: dict[str, str | None] | None = None,
    mode: Mode = "auto",
    connection_id: str | None = None,
    attempts: int = 3,
) -> CallResult:
    """Every property defined on deals, contacts or companies: name, label, type and the options of
    an enumeration.
    """
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
