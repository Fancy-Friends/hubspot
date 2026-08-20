<?php

declare(strict_types=1);

use ParticleAcademy\Hubspot\HubspotFaker;
use ParticleAcademy\Connectors\FakeValues;

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
 * The golden fixtures — the SAME values the TypeScript and Python packages
 * assert.
 *
 * Bit-for-bit identical is the claim, and this is what checks it.
 * Cross-runtime drift does not fail loudly on its own: it completes, down one
 * path, with no error.
 */

it('contact_create fakes the shape HubSpot publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('hubspot', 'contact_create', $config));

    $faked = HubspotFaker::respond('contact_create', ['config' => $config, 'fake' => $fake]);

    expect($faked)->toBe([
        'id' => '448767632',
        'properties' => [
            'email' => null,
            'firstname' => null,
            'lastname' => null,
            'company' => null,
            'phone' => null,
            'lifecyclestage' => 'lead',
            'createdate' => '2026-01-01T00:00:00.000Z',
            'lastmodifieddate' => '2026-01-01T00:00:00.000Z',
            'hs_object_id' => '448767632',
        ],
        'createdAt' => '2026-01-01T00:00:00.000Z',
        'updatedAt' => '2026-01-01T00:00:00.000Z',
        'archived' => false,
    ]);
});

it('throws for an operation with no fixture rather than inventing a shape', function () {
    $fake = new FakeValues(FakeValues::seedForCall('hubspot', 'no_such_operation', []));

    expect(fn () => HubspotFaker::respond('no_such_operation', ['config' => [], 'fake' => $fake]))
        ->toThrow(InvalidArgumentException::class);
});
