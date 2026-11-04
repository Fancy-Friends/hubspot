# GENERATED FILE — do not edit.
#
# Emitted from provider/triggers/crm-event.json by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/triggers/crm-event.json (or weaver's template/) and regenerate:
#
# npm run provider -- hubspot

"""HubSpot's webhook trigger — the delivery contract.

Kept beside the service descriptor rather than inside a node, because a
signature scheme is a fact about HUBSPOT.
"""

from __future__ import annotations

from typing import Any

from .._runtime import Verification, verify_hmac
from ..faker import respond
from ..service import SERVICE

OPERATION = "crm_event"
DELIVERY = "webhook"
SETUP = (
    "In the HubSpot app's webhook settings, set the target URL to the route your host mounts "
    "for this trigger and subscribe to the deal, contact and company events you want. "
    "Deliveries are signed with the app's client secret, already on the connection as "
    "`clientSecret`. ONE URL serves every portal that installed the app, so route each event "
    "by its portalId, and only after the signature has verified: map portalId to the "
    "connection created when that portal installed, and drop an unmapped portalId with a 2xx "
    "and a log line, creating nothing. HubSpot retries a failed delivery, and eventId is not "
    "guaranteed to be unique, so never dedupe on eventId alone: a retry is the same event "
    "resent, differing only in attemptNumber, so compare every other field. This connector's "
    "scope list covers every action, read and write, and is not what your consent URL must "
    "ask for: HubSpot requires your app's required scopes in the authorize URL's `scope` "
    "parameter and shows an error otherwise, so build it from your own app's configuration. A "
    "read-only host asks for its read scopes only."
)
ROUTE: dict[str, str] = {"by": "portalId", "path": "[].portalId"}
SIGNATURE_HEADER = "X-HubSpot-Signature-v3"
TIMESTAMP_HEADER = "X-HubSpot-Request-Timestamp"
ALGORITHM = "sha256"
SIGNATURE_ENCODING = "base64"

# The provider's documented replay window, in seconds.
TOLERANCE = 300

# WHICH credential holds the signing secret — a field name, not a secret.
# S105 reads any string assigned to a *_CREDENTIAL name as a hardcoded
# password; here the value is the key to look up on the connection.
SECRET_CREDENTIAL = "clientSecret"  # noqa: S105


def parse_signature(raw: str) -> tuple[str | None, str | None]:
    """The whole header is the signature."""
    return raw, None


def _header(headers: dict[str, str], name: str) -> str | None:
    """One header, case-insensitively — proxies do not preserve case."""
    return next((v for k, v in headers.items() if k.lower() == name.lower()), None)


def signed_payload(
    raw: str,
    timestamp: str | None,
    delivery_id: str | None = None,
    line: dict[str, str] | None = None,
) -> str:
    """The exact bytes HubSpot signs."""
    _method = line["method"] if line else ""
    _uri = line["uri"] if line else ""
    return f"{_method}{_uri}{raw}{timestamp or ''}"


def verify_delivery(
    raw: str,
    headers: dict[str, str],
    clientsecret: str | None,
    now: int | None = None,
    method: str | None = None,
    url: str | None = None,
) -> Verification:
    """Verify one inbound HubSpot delivery.
    
    The host calls this BEFORE starting a run, with the body exactly as
    received. Re-serialised JSON changes key order and whitespace and produces a
    mismatch that looks precisely like a wrong secret — hours of debugging the
    wrong thing.
    """
    header = _header(headers, SIGNATURE_HEADER)
    signature, timestamp = parse_signature(header) if header else (None, None)
    if timestamp is None:
        timestamp = _header(headers, TIMESTAMP_HEADER)

    return verify_hmac(
        raw=raw,
        signature=signature,
        secret=clientsecret,
        payload=signed_payload,
        algorithm=ALGORITHM,
        encoding=SIGNATURE_ENCODING,
        tolerance=TOLERANCE,
        timestamp=timestamp,
        now=now,
        timestamp_unit="ms",
        signs_request_line=True,
        uri="hubspot-v3",
        method=method,
        url=url,
    )


def sample_event(config: dict[str, Any] | None = None) -> Any:
    """A faked sample event, so the trigger is runnable before any of the setup
    above.
    
    An author can see the real field names and wire the downstream nodes against
    them before the provider has ever been contacted.
    """
    from .._fake import FakeValues, seed_for_call

    resolved = config or {}
    fake = FakeValues(seed_for_call(SERVICE, OPERATION, resolved))

    return respond(OPERATION, {"config": resolved, "fake": fake})
