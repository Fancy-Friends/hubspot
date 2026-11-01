# GENERATED FILE — do not edit.
#
# Emitted from provider/actions/contact-update.json by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/actions/contact-update.json (or weaver's template/) and regenerate:
#
# npm run provider -- hubspot

"""Change properties on an existing contact.

PATCH /crm/v3/objects/contacts/{contactId} —
https://developers.hubspot.com/docs/reference/api/crm/objects/contacts

This describes the request. `call` resolves the connection, picks the
estate, and either calls HubSpot or calls the faker.
"""

from __future__ import annotations

from typing import Any
from urllib.parse import quote

from .._runtime import CallResult, ConnectorConfigError, Mode, call
from ..service import descriptor

OPERATION = "contact_update"
METHOD = "PATCH"
PATH = "/crm/v3/objects/contacts/{contactId}"
SIDE_EFFECTS = "idempotent"


def body(config: dict[str, Any]) -> dict[str, Any]:
    """Build the JSON body for one call, failing loudly and specifically."""
    if config.get("contactId") is None or config.get("contactId") == "":
        raise ConnectorConfigError(
            "contact_update: \"contactId\" is required (Contact id)."
        )

    if config.get("properties") is None or config.get("properties") == "":
        raise ConnectorConfigError(
            "contact_update: \"properties\" is required (Properties)."
        )

    out: dict[str, Any] = {}
    out["properties"] = _properties_map(config.get("properties"))

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

def contact_update(
    config: dict[str, Any],
    *,
    credentials: dict[str, str | None] | None = None,
    mode: Mode = "auto",
    connection_id: str | None = None,
    attempts: int = 3,
) -> CallResult:
    """Change properties on an existing contact."""
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


def _properties_map(value: Any) -> dict[str, str]:
    """A JSON body wants the real nested object, not a JSON string."""
    if not isinstance(value, dict):
        return {}

    return {str(k): str(v) for k, v in value.items() if v is not None and v != ""}