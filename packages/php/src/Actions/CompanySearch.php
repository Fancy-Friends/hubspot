<?php

declare(strict_types=1);

namespace ParticleAcademy\Hubspot\Actions;

use ParticleAcademy\Hubspot\Hubspot;
use ParticleAcademy\Connectors\ConnectorConfigException;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/company-search.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/company-search.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */
/**
 * Find companies by property filters, sorts or a text query.
 *
 * POST /crm/v3/objects/companies/search —
 * https://developers.hubspot.com/docs/reference/api/crm/objects/companies
 *
 * This describes the request. The connector client resolves the connection,
 * picks the estate, and either calls HubSpot or calls the faker.
 */
final class CompanySearch
{
    public const OPERATION = 'company_search';
    public const METHOD = 'POST';
    public const PATH = '/crm/v3/objects/companies/search';
    public const SIDE_EFFECTS = 'none';

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
        $filterGroups = $config['filterGroups'] ?? null;
        if (is_string($filterGroups) && $filterGroups !== '') {
            try {
                json_decode($filterGroups, false, 512, JSON_THROW_ON_ERROR);
            } catch (\JsonException $e) {
                throw new ConnectorConfigException(
                    'company_search: "filterGroups" must be JSON: '.$e->getMessage(),
                );
            }
        }

        $sorts = $config['sorts'] ?? null;
        if (is_string($sorts) && $sorts !== '') {
            try {
                json_decode($sorts, false, 512, JSON_THROW_ON_ERROR);
            } catch (\JsonException $e) {
                throw new ConnectorConfigException(
                    'company_search: "sorts" must be JSON: '.$e->getMessage(),
                );
            }
        }

        $limit = $config['limit'] ?? null;
        if (($limit !== null && $limit !== '') && ! (is_numeric($limit) && (float) $limit === floor((float) $limit) && (float) $limit >= 1 && (float) $limit <= 200)) {
            throw new ConnectorConfigException(
                'company_search: "limit" must be a integer, got '.json_encode($limit).'.'
            );
        }

        $body = [];

        $value = $config['filterGroups'] ?? null;
        if ($value !== null && $value !== '') {
            $body['filterGroups'] = is_string($value) ? json_decode($value, false, 512, JSON_THROW_ON_ERROR) : $value;
        }

        $value = $config['sorts'] ?? null;
        if ($value !== null && $value !== '') {
            $body['sorts'] = is_string($value) ? json_decode($value, false, 512, JSON_THROW_ON_ERROR) : $value;
        }

        $value = $config['query'] ?? null;
        if ($value !== null && $value !== '') {
            $body['query'] = (string) $value;
        }

        $value = $config['properties'] ?? null;
        if ($value !== null && $value !== '') {
            $body['properties'] = self::propertiesList($config['properties'] ?? null);
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

    /** One value, a ,-separated string, or an array — all end up a list. @return list<string> */
    private static function propertiesList(mixed $value): array
    {
        if (is_array($value)) {
            $items = array_map(static fn (mixed $item): string => (string) $item, $value);
        } elseif (is_string($value)) {
            $items = explode(',', $value);
        } else {
            return [];
        }

        $items = array_map(trim(...), $items);

        return array_values(array_filter($items, static fn (string $item): bool => $item !== ''));
    }
}
