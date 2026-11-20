# GENERATED FILE — do not edit.
#
# Emitted from provider/actions/oauth-exchange-code.json by weaver's
# generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/actions/oauth-exchange-code.json (or weaver's template/) and
# regenerate:
#
# npm run provider -- hubspot

"""Exchange the authorization code HubSpot sent to your redirect URL for an
access token and a refresh token.

POST /oauth/2026-03/token —
https://developers.hubspot.com/docs/api-reference/legacy/authentication/oauth-tokens/v1/migration-guide

This describes the request. `call` resolves the connection, picks the
estate, and either calls HubSpot or calls the faker.
"""

from __future__ import annotations

from typing import Any

from .._runtime import CallResult, ConnectorConfigError, Mode, call
from ..service import descriptor_for

OPERATION = "oauth_exchange_code"
METHOD = "POST"
PATH = "/oauth/2026-03/token"
SIDE_EFFECTS = "unsafe-to-replay"


def body(config: dict[str, Any]) -> dict[str, Any]:
    """Build the form body for one call, failing loudly and specifically."""
    if config.get("code") is None or config.get("code") == "":
        raise ConnectorConfigError(
            "oauth_exchange_code: \"code\" is required (Authorization code)."
        )

    if config.get("redirectUri") is None or config.get("redirectUri") == "":
        raise ConnectorConfigError(
            "oauth_exchange_code: \"redirectUri\" is required (Redirect URL)."
        )

    out: dict[str, Any] = {}
    _value = config.get("code")
    if _value is None or _value == "":
        raise ConnectorConfigError("oauth_exchange_code: \"code\" is required.")

    out["code"] = str(_value)
    _value = config.get("redirectUri")
    if _value is None or _value == "":
        raise ConnectorConfigError("oauth_exchange_code: \"redirectUri\" is required.")

    out["redirect_uri"] = str(_value)

    out["grant_type"] = "authorization_code"
    return out


def oauth_exchange_code(
    config: dict[str, Any],
    *,
    credentials: dict[str, str | None] | None = None,
    mode: Mode = "auto",
    connection_id: str | None = None,
    attempts: int = 3,
) -> CallResult:
    """Exchange the authorization code HubSpot sent to your redirect URL for an access token and a
    refresh token.
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
