# GENERATED FILE — do not edit.
#
# Emitted from provider/actions/company-create.json by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/actions/company-create.json (or weaver's template/) and regenerate:
#
# npm run provider -- hubspot

"""Create a company in HubSpot.

POST /crm/v3/objects/companies —
https://developers.hubspot.com/docs/reference/api/crm/objects/companies

This describes the request. `call` resolves the connection, picks the
estate, and either calls HubSpot or calls the faker.
"""

from __future__ import annotations

from typing import Any

from .._runtime import CallResult, ConnectorConfigError, Mode, call
from ..service import descriptor

OPERATION = "company_create"
METHOD = "POST"
PATH = "/crm/v3/objects/companies"
SIDE_EFFECTS = "unsafe-to-replay"


def body(config: dict[str, Any]) -> dict[str, Any]:
    """Build the JSON body for one call, failing loudly and specifically."""
    if config.get("properties") is None or config.get("properties") == "":
        raise ConnectorConfigError(
            "company_create: \"properties\" is required (Properties)."
        )

    out: dict[str, Any] = {}
    out["properties"] = _properties_map(config.get("properties"))

    out["associations"] = []
    return out


def company_create(
    config: dict[str, Any],
    *,
    credentials: dict[str, str | None] | None = None,
    mode: Mode = "auto",
    connection_id: str | None = None,
    attempts: int = 3,
) -> CallResult:
    """Create a company in HubSpot."""
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