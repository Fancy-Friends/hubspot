# GENERATED FILE — do not edit.
#
# Emitted from provider/actions/contact-get.json by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/actions/contact-get.json (or weaver's template/) and regenerate:
#
# npm run provider -- hubspot

"""Read one contact, with its associations when asked.

GET /crm/v3/objects/contacts/{contactId} —
https://developers.hubspot.com/docs/reference/api/crm/objects/contacts

This describes the request. `call` resolves the connection, picks the
estate, and either calls HubSpot or calls the faker.
"""

from __future__ import annotations

from typing import Any
from urllib.parse import quote

from .._runtime import CallResult, ConnectorConfigError, Mode, call
from ..service import descriptor

OPERATION = "contact_get"
METHOD = "GET"
PATH = "/crm/v3/objects/contacts/{contactId}"
SIDE_EFFECTS = "none"


def body(config: dict[str, Any]) -> dict[str, Any]:
    """Build the form body for one call, failing loudly and specifically."""
    if config.get("contactId") is None or config.get("contactId") == "":
        raise ConnectorConfigError(
            "contact_get: \"contactId\" is required (Contact id)."
        )

    out: dict[str, Any] = {}
    _value = config.get("properties")
    if _value is not None and _value != "":
        out["properties"] = str(_value)
    _value = config.get("associations")
    if _value is not None and _value != "":
        out["associations"] = str(_value)

    return out



def path(config: dict[str, Any]) -> str:
    """The request path, with each config value URL-ENCODED into it.

    `PATH` above is the TEMPLATE, which is what the descriptor advertises;
    this is what a caller sends. A value interpolated raw changes WHICH URL is
    called — a range like `Sheet1!A:B`, or a sheet named `Q1/Q2` — and the
    provider answers 404 about the document rather than about the encoding.
    """
    return (
        "/crm/v3/objects/contacts/"
        + quote(str(config.get("contactId") or ""), safe="")
    )

def contact_get(
    config: dict[str, Any],
    *,
    credentials: dict[str, str | None] | None = None,
    mode: Mode = "auto",
    connection_id: str | None = None,
    attempts: int = 3,
) -> CallResult:
    """Read one contact, with its associations when asked."""
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
