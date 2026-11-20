# GENERATED FILE — do not edit.
#
# Emitted from provider/actions/oauth-refresh.json by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/actions/oauth-refresh.json (or weaver's template/) and regenerate:
#
# npm run provider -- hubspot

"""Use the connection's refresh token to get a new access token. HubSpot access
tokens last 30 minutes.

POST /oauth/2026-03/token —
https://developers.hubspot.com/docs/api-reference/legacy/authentication/oauth-tokens/v1/migration-guide

This describes the request. `call` resolves the connection, picks the
estate, and either calls HubSpot or calls the faker.
"""

from __future__ import annotations

from typing import Any

from .._runtime import CallResult, Mode, call
from ..service import descriptor_for

OPERATION = "oauth_refresh"
METHOD = "POST"
PATH = "/oauth/2026-03/token"
SIDE_EFFECTS = "idempotent"


def body(config: dict[str, Any]) -> dict[str, Any]:
    """Build the form body for one call, failing loudly and specifically."""
    out: dict[str, Any] = {}

    out["grant_type"] = "refresh_token"
    return out


def oauth_refresh(
    config: dict[str, Any],
    *,
    credentials: dict[str, str | None] | None = None,
    mode: Mode = "auto",
    connection_id: str | None = None,
    attempts: int = 3,
) -> CallResult:
    """Use the connection's refresh token to get a new access token. HubSpot access tokens last 30
    minutes.
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
