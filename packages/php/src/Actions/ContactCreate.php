<?php

declare(strict_types=1);

namespace ParticleAcademy\Hubspot\Actions;

use ParticleAcademy\Hubspot\Hubspot;
use ParticleAcademy\Connectors\ConnectorConfigException;

/*
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
 * This describes the request. The connector client resolves the connection,
 * picks the estate, and either calls HubSpot or calls the faker.
 */
final class ContactCreate
{
    public const OPERATION = 'contact_create';
    public const METHOD = 'POST';
    public const PATH = '/crm/v3/objects/contacts';
    public const SIDE_EFFECTS = 'unsafe-to-replay';

    /**
     * Build the JSON body for one call.
     *
     * Validation fails loudly and specifically here, rather than three frames
     * later as an "invalid request" from HubSpot.
     *
     * @param array<string,mixed> $config
     * An EMPTY body is `{}`, not `[]` — and PHP cannot tell those apart, because
     * both are `array()` and `json_encode` picks the list. So an empty one is
     * returned as an object. TypeScript and Python have no such ambiguity, which
     * is why this is a difference only the byte-parity suite can see.
     *
     * @return array<string,mixed>|\stdClass
     */
    public static function body(array $config): array|\stdClass
    {
        if ((($config['email'] ?? null) === null || ($config['email'] ?? null) === '') && ! array_key_exists('email', self::propertiesMap($config['properties'] ?? null))) {
            throw new ConnectorConfigException('contact_create: "email" is required — as Email, or as "email" in Properties.');
        }

        $value = $config['email'] ?? null;
        $inMap = self::propertiesMap($config['properties'] ?? null)['email'] ?? null;
        if ($value !== null && $value !== '' && $inMap !== null && $inMap !== trim((string) $value)) {
            throw new ConnectorConfigException('contact_create: "email" was given twice with different values — as Email and as "email" in Properties.');
        }

        $value = $config['firstName'] ?? null;
        $inMap = self::propertiesMap($config['properties'] ?? null)['firstname'] ?? null;
        if ($value !== null && $value !== '' && $inMap !== null && $inMap !== (string) $value) {
            throw new ConnectorConfigException('contact_create: "firstName" was given twice with different values — as First name and as "firstname" in Properties.');
        }

        $value = $config['lastName'] ?? null;
        $inMap = self::propertiesMap($config['properties'] ?? null)['lastname'] ?? null;
        if ($value !== null && $value !== '' && $inMap !== null && $inMap !== (string) $value) {
            throw new ConnectorConfigException('contact_create: "lastName" was given twice with different values — as Last name and as "lastname" in Properties.');
        }

        $value = $config['company'] ?? null;
        $inMap = self::propertiesMap($config['properties'] ?? null)['company'] ?? null;
        if ($value !== null && $value !== '' && $inMap !== null && $inMap !== (string) $value) {
            throw new ConnectorConfigException('contact_create: "company" was given twice with different values — as Company and as "company" in Properties.');
        }

        $value = $config['phone'] ?? null;
        $inMap = self::propertiesMap($config['properties'] ?? null)['phone'] ?? null;
        if ($value !== null && $value !== '' && $inMap !== null && $inMap !== (string) $value) {
            throw new ConnectorConfigException('contact_create: "phone" was given twice with different values — as Phone and as "phone" in Properties.');
        }

        $value = $config['lifecycleStage'] ?? null;
        $inMap = self::propertiesMap($config['properties'] ?? null)['lifecyclestage'] ?? null;
        if ($value !== null && $value !== '' && $inMap !== null && $inMap !== (string) $value) {
            throw new ConnectorConfigException('contact_create: "lifecycleStage" was given twice with different values — as Lifecycle stage and as "lifecyclestage" in Properties.');
        }

        $body = [];

        $value = $config['email'] ?? null;
        if ($value !== null && $value !== '') {
            $body['properties.email'] = trim((string) $value);
        }

        $value = $config['firstName'] ?? null;
        if ($value !== null && $value !== '') {
            $body['properties.firstname'] = (string) $value;
        }

        $value = $config['lastName'] ?? null;
        if ($value !== null && $value !== '') {
            $body['properties.lastname'] = (string) $value;
        }

        $value = $config['company'] ?? null;
        if ($value !== null && $value !== '') {
            $body['properties.company'] = (string) $value;
        }

        $value = $config['phone'] ?? null;
        if ($value !== null && $value !== '') {
            $body['properties.phone'] = (string) $value;
        }

        $value = $config['lifecycleStage'] ?? null;
        if ($value !== null && $value !== '') {
            $body['properties.lifecyclestage'] = (string) $value;
        }

        $body['associations'] = [];

        $body = self::nestFields($body);
        $merged = array_replace(self::propertiesMap($config['properties'] ?? null), is_array($body['properties'] ?? null) ? $body['properties'] : []);
        $body['properties'] = $merged === [] ? new \stdClass() : $merged;
        $body = $body === [] ? new \stdClass() : $body;
        return $body;
    }

    /**
     * `['properties.email' => x]` -> `['properties' => ['email' => x]]`.
     *
     * A dotted `as` means NESTING, and only a JSON body can nest — in a form
     * body that spelling already means a literal dotted key.
     *
     * @param  array<string,mixed>  $flat
     * @return array<string,mixed>
     */
    private static function nestFields(array $flat): array
    {
        $out = [];

        foreach ($flat as $path => $value) {
            $parts = explode('.', (string) $path);
            $node = &$out;

            while (count($parts) > 1) {
                $key = array_shift($parts);

                if (! isset($node[$key]) || ! is_array($node[$key])) {
                    $node[$key] = [];
                }

                $node = &$node[$key];
            }

            $node[$parts[0]] = $value;
            unset($node);
        }

        return $out;
    }

    /** A JSON body wants the real nested object, not a JSON string. @return array<string,string> */
    private static function propertiesMap(mixed $value): array
    {
        if (is_object($value)) {
            $value = get_object_vars($value);
        }
        if (! is_array($value)) {
            return [];
        }

        $out = [];

        foreach ($value as $key => $item) {
            if ($item !== null && $item !== '') {
                $out[(string) $key] = (string) $item;
            }
        }

        return $out;
    }
}
