<?php

declare(strict_types=1);

namespace ParticleAcademy\Hubspot\Actions;

use ParticleAcademy\Hubspot\Hubspot;
use ParticleAcademy\Connectors\ConnectorConfigException;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/oauth-refresh.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/oauth-refresh.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */
/**
 * Use the connection's refresh token to get a new access token. HubSpot access
 * tokens last 30 minutes.
 *
 * POST /oauth/2026-03/token —
 * https://developers.hubspot.com/docs/api-reference/legacy/authentication/oauth-tokens/v1/migration-guide
 *
 * This describes the request. The connector client resolves the connection,
 * picks the estate, and either calls HubSpot or calls the faker.
 */
final class OauthRefresh
{
    public const OPERATION = 'oauth_refresh';
    public const METHOD = 'POST';
    public const PATH = '/oauth/2026-03/token';
    public const SIDE_EFFECTS = 'idempotent';

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
        $body = [];

        $body['grant_type'] = 'refresh_token';

        $body = $body === [] ? new \stdClass() : $body;
        return $body;
    }
}
