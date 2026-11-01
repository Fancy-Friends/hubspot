<?php

declare(strict_types=1);

namespace ParticleAcademy\Hubspot\Actions;

use ParticleAcademy\Hubspot\Hubspot;
use ParticleAcademy\Connectors\ConnectorConfigException;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/owner-list.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/owner-list.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */
/**
 * Page through the portal's owners: the users records can be assigned to.
 *
 * GET /crm/v3/owners —
 * https://developers.hubspot.com/docs/reference/api/crm/owners
 *
 * This describes the request. The connector client resolves the connection,
 * picks the estate, and either calls HubSpot or calls the faker.
 */
final class OwnerList
{
    public const OPERATION = 'owner_list';
    public const METHOD = 'GET';
    public const PATH = '/crm/v3/owners';
    public const SIDE_EFFECTS = 'none';

    /**
     * Build the form body for one call.
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
        $limit = $config['limit'] ?? null;
        if (($limit !== null && $limit !== '') && ! (is_numeric($limit) && (float) $limit === floor((float) $limit) && (float) $limit >= 1 && (float) $limit <= 100)) {
            throw new ConnectorConfigException(
                'owner_list: "limit" must be a integer, got '.json_encode($limit).'.'
            );
        }

        $body = [];

        $value = $config['email'] ?? null;
        if ($value !== null && $value !== '') {
            $body['email'] = (string) $value;
        }

        $value = $config['limit'] ?? null;
        if ($value !== null && $value !== '') {
            $body['limit'] = (int) $value;
        }

        $value = $config['after'] ?? null;
        if ($value !== null && $value !== '') {
            $body['after'] = (string) $value;
        }

        $body = $body === [] ? new \stdClass() : $body;
        return $body;
    }
}
