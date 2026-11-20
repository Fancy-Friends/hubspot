<?php

declare(strict_types=1);

namespace ParticleAcademy\Hubspot\Actions;

use ParticleAcademy\Hubspot\Hubspot;
use ParticleAcademy\Connectors\ConnectorConfigException;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/oauth-exchange-code.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/oauth-exchange-code.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */
/**
 * Exchange the authorization code HubSpot sent to your redirect URL for an
 * access token and a refresh token.
 *
 * POST /oauth/2026-03/token —
 * https://developers.hubspot.com/docs/api-reference/legacy/authentication/oauth-tokens/v1/migration-guide
 *
 * This describes the request. The connector client resolves the connection,
 * picks the estate, and either calls HubSpot or calls the faker.
 */
final class OauthExchangeCode
{
    public const OPERATION = 'oauth_exchange_code';
    public const METHOD = 'POST';
    public const PATH = '/oauth/2026-03/token';
    public const SIDE_EFFECTS = 'unsafe-to-replay';

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
        if (($config['code'] ?? null) === null || ($config['code'] ?? null) === '') {
            throw new ConnectorConfigException('oauth_exchange_code: "code" is required (Authorization code).');
        }

        if (($config['redirectUri'] ?? null) === null || ($config['redirectUri'] ?? null) === '') {
            throw new ConnectorConfigException('oauth_exchange_code: "redirectUri" is required (Redirect URL).');
        }

        $body = [];

        $value = $config['code'] ?? null;
        $body['code'] = (string) $value;

        $value = $config['redirectUri'] ?? null;
        $body['redirect_uri'] = (string) $value;

        $body['grant_type'] = 'authorization_code';

        $body = $body === [] ? new \stdClass() : $body;
        return $body;
    }
}
