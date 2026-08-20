<?php

declare(strict_types=1);

namespace ParticleAcademy\Hubspot;

use ParticleAcademy\Connectors\FakeRequest;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/fixtures/ by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/fixtures/ (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */
/**
 * The HubSpot faker — the PHP twin of the js package's `src/faker.ts`.
 *
 * Bit-for-bit identical: the same FNV-1a seed and the same xorshift32
 * sequence, so a golden fixture asserts the exact faked payload and BOTH
 * runtimes have to produce it. That turns the faker into a parity test rather
 * than a convenience.
 */
final class HubspotFaker
{
    /** @param array<string,mixed> $request */
    public static function respond(string $operation, array $request): mixed
    {
        /** @var array<string,mixed> $config */
        $config = $request['config'] ?? [];
        /** @var FakeValuesLike $fake */
        $fake = $request['fake'];

        return match ($operation) {
            'contact_create' => self::ContactCreate($config, $fake),
            default => throw new \InvalidArgumentException(
                // A faker asked for an operation it has no shape for must SAY so.
                // Making something up would produce a green run whose output
                // silently has none of the fields the author is about to reference.
                'hubspot: no fake response is defined for "'.$operation.'". '
                    .'Add a fixture under provider/fixtures/ and regenerate — a connector without a faker '
                    .'cannot be developed against, tested, or demonstrated.'
            ),
        };
    }

    /** @param array<string,mixed> $config */
    private static function ContactCreate(array $config, mixed $fake): array
    {
        $boundContactId = implode('', array_map(static fn (): int => $fake->int(0, 9), range(1, 9)));

        return [
        'id' => $boundContactId,
        'properties' => [
            'email' => ((($v = $config['email'] ?? null) !== null && $v !== '') ? (string) $v : null),
            'firstname' => ((($v = $config['firstName'] ?? null) !== null && $v !== '') ? (string) $v : null),
            'lastname' => ((($v = $config['lastName'] ?? null) !== null && $v !== '') ? (string) $v : null),
            'company' => ((($v = $config['company'] ?? null) !== null && $v !== '') ? (string) $v : null),
            'phone' => ((($v = $config['phone'] ?? null) !== null && $v !== '') ? (string) $v : null),
            'lifecyclestage' => ((($v = $config['lifecycleStage'] ?? null) !== null && $v !== '') ? (string) $v : 'lead'),
            'createdate' => '2026-01-01T00:00:00.000Z',
            'lastmodifieddate' => '2026-01-01T00:00:00.000Z',
            'hs_object_id' => $boundContactId,
        ],
        'createdAt' => '2026-01-01T00:00:00.000Z',
        'updatedAt' => '2026-01-01T00:00:00.000Z',
        'archived' => false,
    ];
    }
}
