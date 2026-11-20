# GENERATED FILE — do not edit.
#
# Emitted from provider/actions/oauth-introspect.json by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/actions/oauth-introspect.json (or weaver's template/) and
# regenerate:
#
# npm run provider -- hubspot

"""Ask HubSpot whether a token is still active, and what it is for. Replaces
both v1 token-info calls.

POST /oauth/2026-03/token/introspect —
https://developers.hubspot.com/docs/api-reference/legacy/authentication/oauth-tokens/v1/migration-guide

This describes the request. `call` resolves the connection, picks the
estate, and either calls HubSpot or calls the faker.
"""

from __future__ import annotations

from typing import Any

from .._runtime import CallResult, ConnectorConfigError, Mode, call
from ..service import descriptor_for

OPERATION = "oauth_introspect"
METHOD = "POST"
PATH = "/oauth/2026-03/token/introspect"
SIDE_EFFECTS = "none"


def body(config: dict[str, Any]) -> dict[str, Any]:
    """Build the form body for one call, failing loudly and specifically."""
    if config.get("token") is None or config.get("token") == "":
        raise ConnectorConfigError(
            "oauth_introspect: \"token\" is required (Token)."
        )

    out: dict[str, Any] = {}
    _value = config.get("token")
    if _value is None or _value == "":
        raise ConnectorConfigError("oauth_introspect: \"token\" is required.")

    out["token"] = str(_value)
    _value = config.get("tokenTypeHint")
    if _value is not None and _value != "":
        out["token_type_hint"] = str(_value)

    return out


def oauth_introspect(
    config: dict[str, Any],
    *,
    credentials: dict[str, str | None] | None = None,
    mode: Mode = "auto",
    connection_id: str | None = None,
    attempts: int = 3,
) -> CallResult:
    """Ask HubSpot whether a token is still active, and what it is for. Replaces both v1 token-info
    calls.
    """
    return call(
        descriptor_for(OPERATION),
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
