<?php

declare(strict_types=1);

namespace ParticleAcademy\Hubspot\Actions;

use ParticleAcademy\Hubspot\Hubspot;
use ParticleAcademy\Connectors\ConnectorConfigException;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/deal-create.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/deal-create.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */
/**
 * Create a deal in HubSpot.
 *
 * POST /crm/v3/objects/deals —
 * https://developers.hubspot.com/docs/reference/api/crm/objects/deals
 *
 * This describes the request. The connector client resolves the connection,
 * picks the estate, and either calls HubSpot or calls the faker.
 */
final class DealCreate
{
    public const OPERATION = 'deal_create';
    public const METHOD = 'POST';
    public const PATH = '/crm/v3/objects/deals';
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
        if (($config['properties'] ?? null) === null || ($config['properties'] ?? null) === '') {
            throw new ConnectorConfigException('deal_create: "properties" is required (Properties).');
        }

        $body = [];

        $body['properties'] = self::propertiesMap($config['properties'] ?? null);

        $body['associations'] = [];

        $body = $body === [] ? new \stdClass() : $body;
        return $body;
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
