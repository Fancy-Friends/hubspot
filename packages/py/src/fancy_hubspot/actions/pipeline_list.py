# GENERATED FILE — do not edit.
#
# Emitted from provider/actions/pipeline-list.json by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/actions/pipeline-list.json (or weaver's template/) and regenerate:
#
# npm run provider -- hubspot

"""Every deal pipeline in the portal, with its stages in order.

GET /crm/v3/pipelines/deals —
https://developers.hubspot.com/docs/reference/api/crm/pipelines

This describes the request. `call` resolves the connection, picks the
estate, and either calls HubSpot or calls the faker.
"""

from __future__ import annotations

from typing import Any

from .._runtime import CallResult, Mode, call
from ..service import descriptor

OPERATION = "pipeline_list"
METHOD = "GET"
PATH = "/crm/v3/pipelines/deals"
SIDE_EFFECTS = "none"


def body(config: dict[str, Any]) -> dict[str, Any]:
    """Build the form body for one call, failing loudly and specifically."""
    out: dict[str, Any] = {}

    return out


def pipeline_list(
    config: dict[str, Any],
    *,
    credentials: dict[str, str | None] | None = None,
    mode: Mode = "auto",
    connection_id: str | None = None,
    attempts: int = 3,
) -> CallResult:
    """Every deal pipeline in the portal, with its stages in order."""
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
