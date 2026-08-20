/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/contact-create.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/contact-create.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */

/**
 * Create a contact in HubSpot.
 *
 * POST /crm/v3/objects/contacts —
 * https://developers.hubspot.com/docs/reference/api/crm/objects/contacts
 *
 * Notice what is NOT here: no key, no base URL, no mode check, no retry loop,
 * no fake/real branch. This describes the request; callConnector resolves the
 * connection, picks the estate, and either calls HubSpot or calls the faker.
 *
 * sideEffects: unsafe-to-replay.
 */

import {
  callConnector,
  type ConnectorResult,
  type RequestedMode,
  type Transport,
} from "@particle-academy/fancy-connector-core";
import { HUBSPOT } from "../service.js";

export const CONTACT_CREATE_OPERATION = "contact_create";

export type ContactCreateOptions = {
  /** The node's resolved config. Keys: email, firstName, lastName, company, phone, lifecycleStage. */
  config: Record<string, unknown>;
  credentials?: Record<string, string | undefined>;
  mode?: RequestedMode;
  connectionId?: string | null;
  input?: unknown;
  attempts?: number;
  /** Override the transport. The only way to exercise this without a network. */
  transport?: Transport;
};

export async function hubspotContactCreate(options: ContactCreateOptions): Promise<ConnectorResult> {
  const config = options.config ?? {};

  if (config.email === undefined || config.email === null || config.email === "") {
    throw new Error(`contact_create: "email" is required (Email).`);
  }

  return callConnector(HUBSPOT, {
    operation: CONTACT_CREATE_OPERATION,
    config,
    input: options.input,
    ...(options.credentials === undefined ? {} : { credentials: options.credentials }),
    ...(options.mode === undefined ? {} : { mode: options.mode }),
    ...(options.connectionId === undefined ? {} : { connectionId: options.connectionId }),
    ...(options.attempts === undefined ? {} : { attempts: options.attempts }),
    ...(options.transport === undefined ? {} : { transport: options.transport }),
    request: {
      method: "POST",
      path: "/crm/v3/objects/contacts",
      json: nestFields({
        "properties.email": String(config.email).trim(),
        ...(config.firstName !== undefined && config.firstName !== null && config.firstName !== "" ? { "properties.firstname": String(config.firstName) } : {}),
        ...(config.lastName !== undefined && config.lastName !== null && config.lastName !== "" ? { "properties.lastname": String(config.lastName) } : {}),
        ...(config.company !== undefined && config.company !== null && config.company !== "" ? { "properties.company": String(config.company) } : {}),
        ...(config.phone !== undefined && config.phone !== null && config.phone !== "" ? { "properties.phone": String(config.phone) } : {}),
        ...(config.lifecycleStage !== undefined && config.lifecycleStage !== null && config.lifecycleStage !== "" ? { "properties.lifecyclestage": String(config.lifecycleStage) } : {}),
        "associations": [],
      }),
    },
  });
}

/**
 * `{"properties.email": x}` -> `{properties: {email: x}}`.
 *
 * A dotted `as` means NESTING, and only a JSON body can nest. The validator
 * refuses that spelling anywhere else, because in a form body it already means
 * something different — a literal dotted key.
 */
function nestFields(flat: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};

  for (const [path, value] of Object.entries(flat)) {
    const parts = path.split(".");
    let node = out;

    while (parts.length > 1) {
      const key = parts.shift() as string;

      if (typeof node[key] !== "object" || node[key] === null) node[key] = {};
      node = node[key] as Record<string, unknown>;
    }

    node[parts[0] as string] = value;
  }

  return out;
}
