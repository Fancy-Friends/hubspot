<?php

declare(strict_types=1);

namespace ParticleAcademy\Hubspot\Triggers;

use ParticleAcademy\Connectors\DeliveryMechanism;
use ParticleAcademy\Connectors\WebhookVerifier;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/triggers/crm-event.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/triggers/crm-event.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */
/**
 * HubSpot's webhook trigger — the delivery contract.
 *
 * Kept beside the service descriptor rather than inside a node, because a
 * signature scheme is a fact about HUBSPOT. The twin of the js package's
 * trigger module.
 */
final class CrmEvent
{
    public const OPERATION = 'crm_event';
    public const DELIVERY = DeliveryMechanism::Webhook;

    public const SETUP = 'In the HubSpot app\'s webhook settings, set the target URL to the route your host mounts for this trigger and subscribe to the deal, contact and company events you want. Deliveries are signed with the app\'s client secret, already on the connection as `clientSecret`. ONE URL serves every portal that installed the app, so route each event by its portalId, and only after the signature has verified: map portalId to the connection created when that portal installed, and drop an unmapped portalId with a 2xx and a log line, creating nothing.';

    /** Header carrying the signature. */
    public const SIGNATURE_HEADER = 'X-HubSpot-Signature-v3';

    /** Header carrying the timestamp HubSpot signs. */
    public const TIMESTAMP_HEADER = 'X-HubSpot-Request-Timestamp';

    /** The provider's documented replay window, in seconds. */
    public const TOLERANCE = 300;

    /** The credential holding the signing secret. */
    public const SECRET_CREDENTIAL = 'clientSecret';

    /** The exact bytes HubSpot signs. */
    public static function signedPayload(string $raw, ?string $timestamp, ?string $id = null, ?array $line = null): string
    {
        return ($line['method'] ?? '').($line['uri'] ?? '').$raw.($timestamp ?? '');
    }

    /**
     * Verify one inbound HubSpot delivery.
     *
     * The host calls this BEFORE starting a run, with the body exactly as
     * received. Re-serialised JSON changes key order and whitespace and produces a
     * mismatch that looks precisely like a wrong secret — hours spent debugging
     * the wrong thing.
     *
     * @param array<string,string|list<string>> $headers
     * @return array{ok: bool, reason: ?string}
     */
    public static function verifyDelivery(
        string $raw,
        array $headers,
        ?string $clientSecret,
        ?int $now = null,
        ?string $method = null,
        ?string $url = null,
    ): array {
        $header = WebhookVerifier::header($headers, self::SIGNATURE_HEADER);
        $parsed = ['signature' => $header, 'timestamp' => null];
        $timestamp = $parsed['timestamp'] ?? WebhookVerifier::header($headers, self::TIMESTAMP_HEADER);

        return WebhookVerifier::verify(
            raw: $raw,
            signature: $parsed['signature'],
            secret: $clientSecret,
            payload: self::signedPayload(...),
            algorithm: 'sha256',
            tolerance: self::TOLERANCE,
            timestamp: $timestamp,
            now: $now,
            encoding: 'base64',
            timestampUnit: 'ms',
            signsRequestLine: true,
            uri: 'hubspot-v3',
            method: $method,
            url: $url,
        );
    }

    /** The ONE key a host may route a delivery by: only after verification, only to a connection it minted; an unmapped key is dropped with a 2xx. */
    public const ROUTE = ['by' => 'portalId', 'path' => '[].portalId'];
}
