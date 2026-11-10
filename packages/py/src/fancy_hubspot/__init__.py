# GENERATED FILE — do not edit.
#
# Emitted from provider/manifest.json by weaver's generator.
# A hand-edit here is destroyed by the next protocol sync, which is worse than
# being rejected, because it works until it silently does not. Fix
# provider/manifest.json (or weaver's template/) and regenerate:
#
# npm run provider -- hubspot

"""HubSpot for Python.

The service descriptor, its faker, its delivery contract, and one function
per operation — plain HTTP on the stdlib, no vendor SDK and no runtime
dependency.
"""

from __future__ import annotations

from ._fake import FakeValues
from .actions.company_create import company_create
from .actions.company_get import company_get
from .actions.company_list import company_list
from .actions.company_search import company_search
from .actions.company_update import company_update
from .actions.contact_create import contact_create
from .actions.contact_get import contact_get
from .actions.contact_list import contact_list
from .actions.contact_search import contact_search
from .actions.contact_update import contact_update
from .actions.deal_create import deal_create
from .actions.deal_get import deal_get
from .actions.deal_list import deal_list
from .actions.deal_search import deal_search
from .actions.deal_update import deal_update
from .actions.owner_list import owner_list
from .actions.pipeline_list import pipeline_list
from .actions.property_list import property_list
from .faker import respond
from .service import BASE_URLS, CONNECTOR_API_VERSION, REQUIRES, SANDBOX, SERVICE, TITLE, descriptor
from .triggers import crm_event

__version__ = "0.7.2"

__all__ = [
    "BASE_URLS",
    "CONNECTOR_API_VERSION",
    "REQUIRES",
    "SANDBOX",
    "SERVICE",
    "TITLE",
    "FakeValues",
    "company_create",
    "company_get",
    "company_list",
    "company_search",
    "company_update",
    "contact_create",
    "contact_get",
    "contact_list",
    "contact_search",
    "contact_update",
    "crm_event",
    "deal_create",
    "deal_get",
    "deal_list",
    "deal_search",
    "deal_update",
    "descriptor",
    "owner_list",
    "pipeline_list",
    "property_list",
    "respond",
]
