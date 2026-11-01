<?php

declare(strict_types=1);

namespace ParticleAcademy\Hubspot\Actions;

use ParticleAcademy\Hubspot\Hubspot;
use ParticleAcademy\Connectors\ConnectorConfigException;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/company-get.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/company-get.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */
/**
 * Read one company, with its associations when asked.
 *
 * GET /crm/v3/objects/companies/{companyId} —
 * https://developers.hubspot.com/docs/reference/api/crm/objects/companies
 *
 * This describes the request. The connector client resolves the connection,
 * picks the estate, and either calls HubSpot or calls the faker.
 */
final class CompanyGet
{
    public const OPERATION = 'company_get';
    public const METHOD = 'GET';
    public const PATH = '/crm/v3/objects/companies/{companyId}';
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
        if (($config['companyId'] ?? null) === null || ($config['companyId'] ?? null) === '') {
            throw new ConnectorConfigException('company_get: "companyId" is required (Company id).');
        }

        $body = [];

        $value = $config['properties'] ?? null;
        if ($value !== null && $value !== '') {
            $body['properties'] = (string) $value;
        }

        $value = $config['associations'] ?? null;
        if ($value !== null && $value !== '') {
            $body['associations'] = (string) $value;
        }

        $body = $body === [] ? new \stdClass() : $body;
        return $body;
    }

    /**
     * The request path, with each config value URL-ENCODED into it.
     *
     * `PATH` above is the TEMPLATE, which is what the descriptor advertises;
     * this is what a caller sends. A value interpolated raw changes which URL
     * is called — a range like `Sheet1!A:B` or a sheet named `Q1/Q2` — and the
     * provider answers 404 about the document rather than about the encoding.
     *
     * @param array<string,mixed> $config
     */
    public static function path(array $config): string
    {
        return '/crm/v3/objects/companies/'.rawurlencode((string) ($config['companyId'] ?? ''));
    }
}
