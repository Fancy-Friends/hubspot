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
  /** The node's resolved config. Keys: email, firstName, lastName, company, phone, lifecycleStage, properties. */
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

  if ((config.email === undefined || config.email === null || config.email === "") && propertiesMap(config.properties)["email"] === undefined) {
    throw new Error(`contact_create: "email" is required — as Email, or as "email" in Properties.`);
  }

  {
    const inMap = propertiesMap(config.properties)["email"];
    if (config.email !== undefined && config.email !== null && config.email !== "" && inMap !== undefined && inMap !== String(config.email).trim()) {
      throw new Error(`contact_create: "email" was given twice with different values — as Email and as "email" in Properties.`);
    }
  }

  {
    const inMap = propertiesMap(config.properties)["firstname"];
    if (config.firstName !== undefined && config.firstName !== null && config.firstName !== "" && inMap !== undefined && inMap !== String(config.firstName)) {
      throw new Error(`contact_create: "firstName" was given twice with different values — as First name and as "firstname" in Properties.`);
    }
  }

  {
    const inMap = propertiesMap(config.properties)["lastname"];
    if (config.lastName !== undefined && config.lastName !== null && config.lastName !== "" && inMap !== undefined && inMap !== String(config.lastName)) {
      throw new Error(`contact_create: "lastName" was given twice with different values — as Last name and as "lastname" in Properties.`);
    }
  }

  {
    const inMap = propertiesMap(config.properties)["company"];
    if (config.company !== undefined && config.company !== null && config.company !== "" && inMap !== undefined && inMap !== String(config.company)) {
      throw new Error(`contact_create: "company" was given twice with different values — as Company and as "company" in Properties.`);
    }
  }

  {
    const inMap = propertiesMap(config.properties)["phone"];
    if (config.phone !== undefined && config.phone !== null && config.phone !== "" && inMap !== undefined && inMap !== String(config.phone)) {
      throw new Error(`contact_create: "phone" was given twice with different values — as Phone and as "phone" in Properties.`);
    }
  }

  {
    const inMap = propertiesMap(config.properties)["lifecyclestage"];
    if (config.lifecycleStage !== undefined && config.lifecycleStage !== null && config.lifecycleStage !== "" && inMap !== undefined && inMap !== String(config.lifecycleStage)) {
      throw new Error(`contact_create: "lifecycleStage" was given twice with different values — as Lifecycle stage and as "lifecyclestage" in Properties.`);
    }
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
      json: mergeInto(nestFields({
        ...(config.email !== undefined && config.email !== null && config.email !== "" ? { "properties.email": String(config.email).trim() } : {}),
        ...(config.firstName !== undefined && config.firstName !== null && config.firstName !== "" ? { "properties.firstname": String(config.firstName) } : {}),
        ...(config.lastName !== undefined && config.lastName !== null && config.lastName !== "" ? { "properties.lastname": String(config.lastName) } : {}),
        ...(config.company !== undefined && config.company !== null && config.company !== "" ? { "properties.company": String(config.company) } : {}),
        ...(config.phone !== undefined && config.phone !== null && config.phone !== "" ? { "properties.phone": String(config.phone) } : {}),
        ...(config.lifecycleStage !== undefined && config.lifecycleStage !== null && config.lifecycleStage !== "" ? { "properties.lifecyclestage": String(config.lifecycleStage) } : {}),
        "associations": [],
      }), "properties", propertiesMap(config.properties)),
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
      // A NUMERIC segment is an array index: `dateRanges.0.startDate` has to
      // become `[{startDate}]`, not `{"0": {startDate}}`. PHP produced the
      // array by accident (its integer-keyed arrays serialise as JSON lists)
      // and the other two produced an object, which the provider rejects as
      // the wrong type. The parity suite is what caught the disagreement.
      const wantsArray = /^\d+$/.test(parts[0] ?? "");

      if (typeof node[key] !== "object" || node[key] === null) node[key] = wantsArray ? [] : {};
      node = node[key] as Record<string, unknown>;
    }

    node[parts[0] as string] = value;
  }

  return out;
}

/**
 * The map under `key` is the BASE; the named fields already nested there
 * merge into it. A key given both ways with different values was refused
 * before this ran.
 */
function mergeInto(body: Record<string, unknown>, key: string, map: Record<string, string>): Record<string, unknown> {
  const named = body[key];

  return { ...body, [key]: { ...map, ...(named !== null && typeof named === "object" ? named : {}) } };
}

/** `{ k: "v" }` → `{ "properties": { "k": "v" } }` — a JSON body wants the real object. */
function propertiesMap(value: unknown): Record<string, string> {
  if (!value || typeof value !== "object") return {};

  const out: Record<string, string> = {};
  for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
    if (item !== undefined && item !== null && item !== "") out[key] = String(item);
  }

  return out;
}
