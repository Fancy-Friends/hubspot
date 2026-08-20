# GENERATED FILE — do not edit.
#
# Emitted from provider/manifest.json by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/manifest.json (or weaver's template/) and regenerate:
#
# npm run provider -- hubspot

"""HubSpot, as one service descriptor shared by every HubSpot operation.

The Python twin of the js and php packages' service modules.

## The sandbox trap, written down where it is used

HubSpot's test estate is a DEVELOPER TEST ACCOUNT: a separate portal you
create from the developer account, with its own portal id, its own data and
its own OAuth install. Same API host, different account -- so the credential
is different and the URL is not. Test accounts expire if unused and carry
reduced limits, which is why they are a place to test rather than a place to
build against.
"""

from __future__ import annotations

from ._runtime import PreparedRequest, ServiceDescriptor
from .faker import respond

# The connector API version this package was GENERATED against. A literal,
# never imported: an imported constant lets an upgrade rewrite the very claim
# it exists to detect, after which the copy agrees with itself forever.
CONNECTOR_API_VERSION = 1

SERVICE = "hubspot"
TITLE = "HubSpot"
SANDBOX = "separate-account"
BASE_URLS = {
    "live": "https://api.hubapi.com",
    "sandbox": "https://api.hubapi.com",
}

"""Credential keys a remote call cannot proceed without."""
REQUIRES = [
    "accessToken",
]


def authorize(
    credentials: dict[str, str | None],
    request: PreparedRequest,
    mode: str,
) -> None:
    """Apply HubSpot's auth scheme to an outgoing request.
    
    An OAuth2 access token is presented exactly like a static bearer token. The
    difference is not in the request -- it is that this one EXPIRES, and
    something has to refresh it. That is the host's job, and `oauth` below is
    what tells it how.
    """
    request.headers["Authorization"] = f"Bearer {credentials.get('accessToken') or ''}"


def descriptor() -> ServiceDescriptor:
    """The HubSpot service, for the Python runtime."""
    return ServiceDescriptor(
        service=SERVICE,
        title=TITLE,
        sandbox=SANDBOX,
        base_urls=BASE_URLS,
        requires=REQUIRES,
        authorize=authorize,
        faker=respond,
        idempotency_header=None,
    )
