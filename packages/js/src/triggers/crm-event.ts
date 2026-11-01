/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/triggers/crm-event.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/triggers/crm-event.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * HubSpot's webhook trigger — the delivery contract.
 *
 * Kept beside the service descriptor rather than inside a node, because a
 * signature scheme is a fact about HUBSPOT. Two HubSpot triggers must not be
 * able to disagree about how a delivery is verified.
 */

import { verifyDelivery, type HmacScheme, type InboundDelivery, type TriggerDescriptor, type WebhookVerification } from "@particle-academy/fancy-connector-core";
import { hubspotFaker } from "../faker.js";

export const HUBSPOT_CRM_EVENT_SIGNATURE_HEADER = "X-HubSpot-Signature-v3";
/** The provider's documented replay window, in seconds. */
export const HUBSPOT_CRM_EVENT_TOLERANCE = 300;

export const HUBSPOT_CRM_EVENT_SCHEME: HmacScheme = {
  algorithm: "SHA-256",
  payload: (raw, timestamp, _id, request) => `${request?.method ?? ""}${request?.uri ?? ""}${raw}${timestamp}`,
  tolerance: HUBSPOT_CRM_EVENT_TOLERANCE,
  timestampUnit: "ms",
  signsRequestLine: true,
  uri: "hubspot-v3",
  encoding: "base64",
};

export const HUBSPOT_CRM_EVENT: TriggerDescriptor = {
  service: "hubspot",
  operation: "crm_event",
  delivery: "webhook",
  setup:
    "In the HubSpot app's webhook settings, set the target URL to the route your host mounts for this trigger and subscribe to the deal, contact and company events you want. Deliveries are signed with the app's client secret, already on the connection as `clientSecret`. ONE URL serves every portal that installed the app, so route each event by its portalId, and only after the signature has verified: map portalId to the connection created when that portal installed, and drop an unmapped portalId with a 2xx and a log line, creating nothing.",
  verification: {
    signatureHeader: HUBSPOT_CRM_EVENT_SIGNATURE_HEADER,
    scheme: HUBSPOT_CRM_EVENT_SCHEME,
    timestampHeader: "X-HubSpot-Request-Timestamp",
  },
  route: { by: "portalId", path: "[].portalId" },
  faker: hubspotFaker,
};

/**
 * Verify one inbound HubSpot delivery.
 *
 * The host calls this BEFORE starting a run, with the body exactly as
 * received. Re-serialised JSON changes key order and whitespace, and produces
 * a mismatch that looks precisely like a wrong secret — hours of debugging the
 * wrong thing.
 *
 * The secret is the connection's `clientSecret`.
 */
export function verifyHubspotDelivery(
  delivery: InboundDelivery,
  clientSecret: string | undefined,
  now?: number,
): Promise<WebhookVerification> {
  return verifyDelivery(HUBSPOT_CRM_EVENT, delivery, clientSecret, now);
}
