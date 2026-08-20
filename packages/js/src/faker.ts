/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/fixtures/ by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/fixtures/ (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * The HubSpot faker.
 *
 * Shapes, not behaviour: the goal is that a downstream node sees the field
 * NAMES HubSpot actually publishes, so an author can wire {{ $json.data.id }}
 * against a fake and have it keep working against the real thing.
 *
 * Deterministic — same inputs, same output. A faker returning a fresh uuid
 * every call cannot be asserted on, so its fixtures degrade to "it did not
 * throw", which is the assertion that catches nothing.
 */

import type { ConnectorFaker, FakeRequest } from "@particle-academy/fancy-connector-core";

function fakeContactCreate({ config, fake }: FakeRequest): unknown {
  const boundContactId = Array.from({ length: 9 }, () => fake.int(0, 9)).join("");

  return {
    "id": boundContactId,
    "properties": {
      "email": (config.email !== undefined && config.email !== null && config.email !== "" ? String(config.email) : null),
      "firstname": (config.firstName !== undefined && config.firstName !== null && config.firstName !== "" ? String(config.firstName) : null),
      "lastname": (config.lastName !== undefined && config.lastName !== null && config.lastName !== "" ? String(config.lastName) : null),
      "company": (config.company !== undefined && config.company !== null && config.company !== "" ? String(config.company) : null),
      "phone": (config.phone !== undefined && config.phone !== null && config.phone !== "" ? String(config.phone) : null),
      "lifecyclestage": (config.lifecycleStage !== undefined && config.lifecycleStage !== null && config.lifecycleStage !== "" ? String(config.lifecycleStage) : "lead"),
      "createdate": "2026-01-01T00:00:00.000Z",
      "lastmodifieddate": "2026-01-01T00:00:00.000Z",
      "hs_object_id": boundContactId,
    },
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-01-01T00:00:00.000Z",
    "archived": false,
  };
}

export const hubspotFaker: ConnectorFaker = (operation, request) => {
  switch (operation) {
    case "contact_create":
      return fakeContactCreate(request);

    default:
      // A faker asked for an operation it has no shape for must SAY so. Making
      // something up would produce a green run whose output silently has none
      // of the fields the author is about to reference.
      throw new Error(
        `hubspot: no fake response is defined for "${operation}". ` +
          "Add a fixture under provider/fixtures/ and regenerate — a connector without a faker " +
          "cannot be developed against, tested, or demonstrated.",
      );
  }
};
