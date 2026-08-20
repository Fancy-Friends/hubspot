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
     * @return array<string,scalar>
     */
    public static function body(array $config): array
    {
        if (($config['email'] ?? null) === null || ($config['email'] ?? null) === '') {
            throw new ConnectorConfigException('contact_create: "email" is required (Email).');
        }

        $body = [];

        $value = $config['email'] ?? null;
        $body['properties.email'] = trim((string) $value);

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

        return self::nestFields($body);
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
}
