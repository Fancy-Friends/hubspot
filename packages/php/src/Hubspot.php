<?php

declare(strict_types=1);

namespace ParticleAcademy\Hubspot;

use ParticleAcademy\Connectors\Mode;
use ParticleAcademy\Connectors\PreparedRequest;
use ParticleAcademy\Connectors\SandboxKind;
use ParticleAcademy\Connectors\ServiceDescriptor;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/manifest.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/manifest.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */
/**
 * HubSpot, as one service descriptor shared by every HubSpot operation.
 *
 * The PHP twin of the js package's `src/service.ts`.
 *
 * ## The sandbox trap, written down where it is used
 *
 * HubSpot's test estate is a DEVELOPER TEST ACCOUNT: a separate portal you
 * create from the developer account, with its own portal id, its own data and
 * its own OAuth install. Same API host, different account -- so the credential
 * is different and the URL is not. Test accounts expire if unused and carry
 * reduced limits, which is why they are a place to test rather than a place to
 * build against.
 */
final class Hubspot
{
    // The connector API version this package was GENERATED against. A
    // literal, never imported: an imported constant lets an upgrade rewrite
    // the very claim it exists to detect.
    public const CONNECTOR_API_VERSION = 1;

    public const SERVICE = 'hubspot';

    public const LIVE_URL = 'https://api.hubapi.com';
    public const SANDBOX_URL = 'https://api.hubapi.com';

    /** @var list<string> Credential keys a remote call cannot proceed without. */
    public const REQUIRES = [
        'accessToken',
    ];

    public static function descriptor(): ServiceDescriptor
    {
        return new ServiceDescriptor(
            service: self::SERVICE,
            title: 'HubSpot',
            sandbox: SandboxKind::SeparateAccount,
            baseUrls: [
                Mode::Live->value => self::LIVE_URL,
                Mode::Sandbox->value => self::SANDBOX_URL,
            ],
            requires: self::REQUIRES,
            authorize: self::authorize(...),
            faker: HubspotFaker::respond(...),
        );
    }

    /**
     * Apply HubSpot's auth scheme to an outgoing request.
     *
     * An OAuth2 access token is presented exactly like a static bearer token. The
     * difference is not in the request -- it is that this one EXPIRES, and
     * something has to refresh it. That is the host's job, and `oauth` below is
     * what tells it how.
     *
     * @param array<string,string> $credentials
     */
    public static function authorize(array $credentials, PreparedRequest $request, Mode $mode): void
    {
        $request->withHeader('Authorization', 'Bearer '.($credentials['accessToken'] ?? ''));
    }
}
