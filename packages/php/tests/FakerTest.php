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

it('company_create fakes the shape HubSpot publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('hubspot', 'company_create', $config));

    $faked = HubspotFaker::respond('company_create', ['config' => $config, 'fake' => $fake]);

    // Through JSON and back, because a faked EMPTY object is a stdClass — the only
    // PHP value that spells `{}` on the wire — and `toBe` compares objects by
    // identity. This asserts the VALUES; the `{}`-versus-`[]` spelling is what
    // weaver's cross-runtime parity suite asserts, byte for byte.
    $faked = json_decode((string) json_encode($faked), true, 512, JSON_THROW_ON_ERROR);

    expect($faked)->toBe([
        'id' => '666995690',
        'properties' => [
            'name' => 'Acme',
            'domain' => 'acme.example.test',
            'hs_object_id' => '666995690',
            'createdate' => '2026-01-01T00:00:00.000Z',
            'lastmodifieddate' => '2026-01-01T00:00:00.000Z',
        ],
        'createdAt' => '2026-01-01T00:00:00.000Z',
        'updatedAt' => '2026-01-01T00:00:00.000Z',
        'archived' => false,
    ]);
});

it('company_get fakes the shape HubSpot publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('hubspot', 'company_get', $config));

    $faked = HubspotFaker::respond('company_get', ['config' => $config, 'fake' => $fake]);

    // Through JSON and back, because a faked EMPTY object is a stdClass — the only
    // PHP value that spells `{}` on the wire — and `toBe` compares objects by
    // identity. This asserts the VALUES; the `{}`-versus-`[]` spelling is what
    // weaver's cross-runtime parity suite asserts, byte for byte.
    $faked = json_decode((string) json_encode($faked), true, 512, JSON_THROW_ON_ERROR);

    expect($faked)->toBe([
        'id' => '880565950',
        'properties' => [
            'name' => 'Acme',
            'domain' => 'acme.example.test',
            'hs_object_id' => '880565950',
            'createdate' => '2026-01-01T00:00:00.000Z',
            'lastmodifieddate' => '2026-01-01T00:00:00.000Z',
        ],
        'createdAt' => '2026-01-01T00:00:00.000Z',
        'updatedAt' => '2026-01-01T00:00:00.000Z',
        'archived' => false,
    ]);
});

it('company_list fakes the shape HubSpot publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('hubspot', 'company_list', $config));

    $faked = HubspotFaker::respond('company_list', ['config' => $config, 'fake' => $fake]);

    // Through JSON and back, because a faked EMPTY object is a stdClass — the only
    // PHP value that spells `{}` on the wire — and `toBe` compares objects by
    // identity. This asserts the VALUES; the `{}`-versus-`[]` spelling is what
    // weaver's cross-runtime parity suite asserts, byte for byte.
    $faked = json_decode((string) json_encode($faked), true, 512, JSON_THROW_ON_ERROR);

    expect($faked)->toBe([
        'results' => [
            [
                'id' => '002451222',
                'properties' => [
                    'name' => 'Acme',
                    'domain' => 'acme.example.test',
                    'hs_object_id' => '002451222',
                    'createdate' => '2026-01-01T00:00:00.000Z',
                    'lastmodifieddate' => '2026-01-01T00:00:00.000Z',
                ],
                'createdAt' => '2026-01-01T00:00:00.000Z',
                'updatedAt' => '2026-01-01T00:00:00.000Z',
                'archived' => false,
            ],
        ],
        'paging' => [
            'next' => [
                'after' => '10',
                'link' => '?after=10',
            ],
        ],
    ]);
});

it('company_search fakes the shape HubSpot publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('hubspot', 'company_search', $config));

    $faked = HubspotFaker::respond('company_search', ['config' => $config, 'fake' => $fake]);

    // Through JSON and back, because a faked EMPTY object is a stdClass — the only
    // PHP value that spells `{}` on the wire — and `toBe` compares objects by
    // identity. This asserts the VALUES; the `{}`-versus-`[]` spelling is what
    // weaver's cross-runtime parity suite asserts, byte for byte.
    $faked = json_decode((string) json_encode($faked), true, 512, JSON_THROW_ON_ERROR);

    expect($faked)->toBe([
        'total' => 1,
        'results' => [
            [
                'id' => '686753895',
                'properties' => [
                    'name' => 'Acme',
                    'domain' => 'acme.example.test',
                    'hs_object_id' => '686753895',
                    'createdate' => '2026-01-01T00:00:00.000Z',
                    'lastmodifieddate' => '2026-01-01T00:00:00.000Z',
                ],
                'createdAt' => '2026-01-01T00:00:00.000Z',
                'updatedAt' => '2026-01-01T00:00:00.000Z',
                'archived' => false,
            ],
        ],
        'paging' => [
            'next' => [
                'after' => '10',
                'link' => '?after=10',
            ],
        ],
    ]);
});

it('company_update fakes the shape HubSpot publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('hubspot', 'company_update', $config));

    $faked = HubspotFaker::respond('company_update', ['config' => $config, 'fake' => $fake]);

    // Through JSON and back, because a faked EMPTY object is a stdClass — the only
    // PHP value that spells `{}` on the wire — and `toBe` compares objects by
    // identity. This asserts the VALUES; the `{}`-versus-`[]` spelling is what
    // weaver's cross-runtime parity suite asserts, byte for byte.
    $faked = json_decode((string) json_encode($faked), true, 512, JSON_THROW_ON_ERROR);

    expect($faked)->toBe([
        'id' => '952110347',
        'properties' => [
            'name' => 'Acme',
            'domain' => 'acme.example.test',
            'hs_object_id' => '952110347',
            'createdate' => '2026-01-01T00:00:00.000Z',
            'lastmodifieddate' => '2026-01-01T00:00:00.000Z',
        ],
        'createdAt' => '2026-01-01T00:00:00.000Z',
        'updatedAt' => '2026-01-01T00:00:00.000Z',
        'archived' => false,
    ]);
});

it('contact_create fakes the shape HubSpot publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('hubspot', 'contact_create', $config));

    $faked = HubspotFaker::respond('contact_create', ['config' => $config, 'fake' => $fake]);

    // Through JSON and back, because a faked EMPTY object is a stdClass — the only
    // PHP value that spells `{}` on the wire — and `toBe` compares objects by
    // identity. This asserts the VALUES; the `{}`-versus-`[]` spelling is what
    // weaver's cross-runtime parity suite asserts, byte for byte.
    $faked = json_decode((string) json_encode($faked), true, 512, JSON_THROW_ON_ERROR);

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

it('contact_get fakes the shape HubSpot publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('hubspot', 'contact_get', $config));

    $faked = HubspotFaker::respond('contact_get', ['config' => $config, 'fake' => $fake]);

    // Through JSON and back, because a faked EMPTY object is a stdClass — the only
    // PHP value that spells `{}` on the wire — and `toBe` compares objects by
    // identity. This asserts the VALUES; the `{}`-versus-`[]` spelling is what
    // weaver's cross-runtime parity suite asserts, byte for byte.
    $faked = json_decode((string) json_encode($faked), true, 512, JSON_THROW_ON_ERROR);

    expect($faked)->toBe([
        'id' => '143715836',
        'properties' => [
            'email' => 'rosa@example.test',
            'firstname' => 'Rosa',
            'lastname' => 'Diaz',
            'hs_object_id' => '143715836',
            'createdate' => '2026-01-01T00:00:00.000Z',
            'lastmodifieddate' => '2026-01-01T00:00:00.000Z',
        ],
        'createdAt' => '2026-01-01T00:00:00.000Z',
        'updatedAt' => '2026-01-01T00:00:00.000Z',
        'archived' => false,
    ]);
});

it('contact_list fakes the shape HubSpot publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('hubspot', 'contact_list', $config));

    $faked = HubspotFaker::respond('contact_list', ['config' => $config, 'fake' => $fake]);

    // Through JSON and back, because a faked EMPTY object is a stdClass — the only
    // PHP value that spells `{}` on the wire — and `toBe` compares objects by
    // identity. This asserts the VALUES; the `{}`-versus-`[]` spelling is what
    // weaver's cross-runtime parity suite asserts, byte for byte.
    $faked = json_decode((string) json_encode($faked), true, 512, JSON_THROW_ON_ERROR);

    expect($faked)->toBe([
        'results' => [
            [
                'id' => '005770685',
                'properties' => [
                    'email' => 'rosa@example.test',
                    'firstname' => 'Rosa',
                    'lastname' => 'Diaz',
                    'hs_object_id' => '005770685',
                    'createdate' => '2026-01-01T00:00:00.000Z',
                    'lastmodifieddate' => '2026-01-01T00:00:00.000Z',
                ],
                'createdAt' => '2026-01-01T00:00:00.000Z',
                'updatedAt' => '2026-01-01T00:00:00.000Z',
                'archived' => false,
            ],
        ],
        'paging' => [
            'next' => [
                'after' => '10',
                'link' => '?after=10',
            ],
        ],
    ]);
});

it('contact_search fakes the shape HubSpot publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('hubspot', 'contact_search', $config));

    $faked = HubspotFaker::respond('contact_search', ['config' => $config, 'fake' => $fake]);

    // Through JSON and back, because a faked EMPTY object is a stdClass — the only
    // PHP value that spells `{}` on the wire — and `toBe` compares objects by
    // identity. This asserts the VALUES; the `{}`-versus-`[]` spelling is what
    // weaver's cross-runtime parity suite asserts, byte for byte.
    $faked = json_decode((string) json_encode($faked), true, 512, JSON_THROW_ON_ERROR);

    expect($faked)->toBe([
        'total' => 1,
        'results' => [
            [
                'id' => '707784101',
                'properties' => [
                    'email' => 'rosa@example.test',
                    'firstname' => 'Rosa',
                    'lastname' => 'Diaz',
                    'hs_object_id' => '707784101',
                    'createdate' => '2026-01-01T00:00:00.000Z',
                    'lastmodifieddate' => '2026-01-01T00:00:00.000Z',
                ],
                'createdAt' => '2026-01-01T00:00:00.000Z',
                'updatedAt' => '2026-01-01T00:00:00.000Z',
                'archived' => false,
            ],
        ],
        'paging' => [
            'next' => [
                'after' => '10',
                'link' => '?after=10',
            ],
        ],
    ]);
});

it('contact_update fakes the shape HubSpot publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('hubspot', 'contact_update', $config));

    $faked = HubspotFaker::respond('contact_update', ['config' => $config, 'fake' => $fake]);

    // Through JSON and back, because a faked EMPTY object is a stdClass — the only
    // PHP value that spells `{}` on the wire — and `toBe` compares objects by
    // identity. This asserts the VALUES; the `{}`-versus-`[]` spelling is what
    // weaver's cross-runtime parity suite asserts, byte for byte.
    $faked = json_decode((string) json_encode($faked), true, 512, JSON_THROW_ON_ERROR);

    expect($faked)->toBe([
        'id' => '768737047',
        'properties' => [
            'email' => 'rosa@example.test',
            'firstname' => 'Rosa',
            'lastname' => 'Diaz',
            'hs_object_id' => '768737047',
            'createdate' => '2026-01-01T00:00:00.000Z',
            'lastmodifieddate' => '2026-01-01T00:00:00.000Z',
        ],
        'createdAt' => '2026-01-01T00:00:00.000Z',
        'updatedAt' => '2026-01-01T00:00:00.000Z',
        'archived' => false,
    ]);
});

it('deal_create fakes the shape HubSpot publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('hubspot', 'deal_create', $config));

    $faked = HubspotFaker::respond('deal_create', ['config' => $config, 'fake' => $fake]);

    // Through JSON and back, because a faked EMPTY object is a stdClass — the only
    // PHP value that spells `{}` on the wire — and `toBe` compares objects by
    // identity. This asserts the VALUES; the `{}`-versus-`[]` spelling is what
    // weaver's cross-runtime parity suite asserts, byte for byte.
    $faked = json_decode((string) json_encode($faked), true, 512, JSON_THROW_ON_ERROR);

    expect($faked)->toBe([
        'id' => '506683730',
        'properties' => [
            'dealname' => 'Acme renewal',
            'amount' => '12000',
            'dealstage' => 'appointmentscheduled',
            'pipeline' => 'default',
            'hs_object_id' => '506683730',
            'createdate' => '2026-01-01T00:00:00.000Z',
            'lastmodifieddate' => '2026-01-01T00:00:00.000Z',
        ],
        'createdAt' => '2026-01-01T00:00:00.000Z',
        'updatedAt' => '2026-01-01T00:00:00.000Z',
        'archived' => false,
    ]);
});

it('deal_get fakes the shape HubSpot publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('hubspot', 'deal_get', $config));

    $faked = HubspotFaker::respond('deal_get', ['config' => $config, 'fake' => $fake]);

    // Through JSON and back, because a faked EMPTY object is a stdClass — the only
    // PHP value that spells `{}` on the wire — and `toBe` compares objects by
    // identity. This asserts the VALUES; the `{}`-versus-`[]` spelling is what
    // weaver's cross-runtime parity suite asserts, byte for byte.
    $faked = json_decode((string) json_encode($faked), true, 512, JSON_THROW_ON_ERROR);

    expect($faked)->toBe([
        'id' => '916817673',
        'properties' => [
            'dealname' => 'Acme renewal',
            'amount' => '12000',
            'dealstage' => 'appointmentscheduled',
            'pipeline' => 'default',
            'hs_object_id' => '916817673',
            'createdate' => '2026-01-01T00:00:00.000Z',
            'lastmodifieddate' => '2026-01-01T00:00:00.000Z',
        ],
        'createdAt' => '2026-01-01T00:00:00.000Z',
        'updatedAt' => '2026-01-01T00:00:00.000Z',
        'archived' => false,
    ]);
});

it('deal_list fakes the shape HubSpot publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('hubspot', 'deal_list', $config));

    $faked = HubspotFaker::respond('deal_list', ['config' => $config, 'fake' => $fake]);

    // Through JSON and back, because a faked EMPTY object is a stdClass — the only
    // PHP value that spells `{}` on the wire — and `toBe` compares objects by
    // identity. This asserts the VALUES; the `{}`-versus-`[]` spelling is what
    // weaver's cross-runtime parity suite asserts, byte for byte.
    $faked = json_decode((string) json_encode($faked), true, 512, JSON_THROW_ON_ERROR);

    expect($faked)->toBe([
        'results' => [
            [
                'id' => '443388040',
                'properties' => [
                    'dealname' => 'Acme renewal',
                    'amount' => '12000',
                    'dealstage' => 'appointmentscheduled',
                    'pipeline' => 'default',
                    'hs_object_id' => '443388040',
                    'createdate' => '2026-01-01T00:00:00.000Z',
                    'lastmodifieddate' => '2026-01-01T00:00:00.000Z',
                ],
                'createdAt' => '2026-01-01T00:00:00.000Z',
                'updatedAt' => '2026-01-01T00:00:00.000Z',
                'archived' => false,
            ],
        ],
        'paging' => [
            'next' => [
                'after' => '10',
                'link' => '?after=10',
            ],
        ],
    ]);
});

it('deal_search fakes the shape HubSpot publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('hubspot', 'deal_search', $config));

    $faked = HubspotFaker::respond('deal_search', ['config' => $config, 'fake' => $fake]);

    // Through JSON and back, because a faked EMPTY object is a stdClass — the only
    // PHP value that spells `{}` on the wire — and `toBe` compares objects by
    // identity. This asserts the VALUES; the `{}`-versus-`[]` spelling is what
    // weaver's cross-runtime parity suite asserts, byte for byte.
    $faked = json_decode((string) json_encode($faked), true, 512, JSON_THROW_ON_ERROR);

    expect($faked)->toBe([
        'total' => 1,
        'results' => [
            [
                'id' => '157762918',
                'properties' => [
                    'dealname' => 'Acme renewal',
                    'amount' => '12000',
                    'dealstage' => 'appointmentscheduled',
                    'pipeline' => 'default',
                    'hs_object_id' => '157762918',
                    'createdate' => '2026-01-01T00:00:00.000Z',
                    'lastmodifieddate' => '2026-01-01T00:00:00.000Z',
                ],
                'createdAt' => '2026-01-01T00:00:00.000Z',
                'updatedAt' => '2026-01-01T00:00:00.000Z',
                'archived' => false,
            ],
        ],
        'paging' => [
            'next' => [
                'after' => '10',
                'link' => '?after=10',
            ],
        ],
    ]);
});

it('deal_update fakes the shape HubSpot publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('hubspot', 'deal_update', $config));

    $faked = HubspotFaker::respond('deal_update', ['config' => $config, 'fake' => $fake]);

    // Through JSON and back, because a faked EMPTY object is a stdClass — the only
    // PHP value that spells `{}` on the wire — and `toBe` compares objects by
    // identity. This asserts the VALUES; the `{}`-versus-`[]` spelling is what
    // weaver's cross-runtime parity suite asserts, byte for byte.
    $faked = json_decode((string) json_encode($faked), true, 512, JSON_THROW_ON_ERROR);

    expect($faked)->toBe([
        'id' => '292307275',
        'properties' => [
            'dealname' => 'Acme renewal',
            'amount' => '12000',
            'dealstage' => 'appointmentscheduled',
            'pipeline' => 'default',
            'hs_object_id' => '292307275',
            'createdate' => '2026-01-01T00:00:00.000Z',
            'lastmodifieddate' => '2026-01-01T00:00:00.000Z',
        ],
        'createdAt' => '2026-01-01T00:00:00.000Z',
        'updatedAt' => '2026-01-01T00:00:00.000Z',
        'archived' => false,
    ]);
});

it('owner_list fakes the shape HubSpot publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('hubspot', 'owner_list', $config));

    $faked = HubspotFaker::respond('owner_list', ['config' => $config, 'fake' => $fake]);

    // Through JSON and back, because a faked EMPTY object is a stdClass — the only
    // PHP value that spells `{}` on the wire — and `toBe` compares objects by
    // identity. This asserts the VALUES; the `{}`-versus-`[]` spelling is what
    // weaver's cross-runtime parity suite asserts, byte for byte.
    $faked = json_decode((string) json_encode($faked), true, 512, JSON_THROW_ON_ERROR);

    expect($faked)->toBe([
        'results' => [
            [
                'id' => '02341083',
                'email' => 'rosa@example.test',
                'firstName' => 'Rosa',
                'lastName' => 'Diaz',
                'userId' => 4242,
                'archived' => false,
            ],
        ],
        'paging' => [
            'next' => [
                'after' => '10',
                'link' => '?after=10',
            ],
        ],
    ]);
});

it('pipeline_list fakes the shape HubSpot publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('hubspot', 'pipeline_list', $config));

    $faked = HubspotFaker::respond('pipeline_list', ['config' => $config, 'fake' => $fake]);

    // Through JSON and back, because a faked EMPTY object is a stdClass — the only
    // PHP value that spells `{}` on the wire — and `toBe` compares objects by
    // identity. This asserts the VALUES; the `{}`-versus-`[]` spelling is what
    // weaver's cross-runtime parity suite asserts, byte for byte.
    $faked = json_decode((string) json_encode($faked), true, 512, JSON_THROW_ON_ERROR);

    expect($faked)->toBe([
        'results' => [
            [
                'id' => 'default',
                'label' => 'Sales pipeline',
                'displayOrder' => 0,
                'archived' => false,
                'stages' => [
                    [
                        'id' => 'appointmentscheduled',
                        'label' => 'Appointment scheduled',
                        'displayOrder' => 0,
                        'metadata' => [
                            'probability' => '0.2',
                        ],
                    ],
                    [
                        'id' => 'closedwon',
                        'label' => 'Closed won',
                        'displayOrder' => 1,
                        'metadata' => [
                            'probability' => '1.0',
                        ],
                    ],
                ],
            ],
        ],
    ]);
});

it('property_list fakes the shape HubSpot publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('hubspot', 'property_list', $config));

    $faked = HubspotFaker::respond('property_list', ['config' => $config, 'fake' => $fake]);

    // Through JSON and back, because a faked EMPTY object is a stdClass — the only
    // PHP value that spells `{}` on the wire — and `toBe` compares objects by
    // identity. This asserts the VALUES; the `{}`-versus-`[]` spelling is what
    // weaver's cross-runtime parity suite asserts, byte for byte.
    $faked = json_decode((string) json_encode($faked), true, 512, JSON_THROW_ON_ERROR);

    expect($faked)->toBe([
        'results' => [
            [
                'name' => 'dealstage',
                'label' => 'Deal Stage',
                'type' => 'enumeration',
                'fieldType' => 'select',
                'groupName' => 'dealinformation',
                'options' => [
                    [
                        'label' => 'Appointment scheduled',
                        'value' => 'appointmentscheduled',
                    ],
                ],
            ],
        ],
    ]);
});

it('crm_event fakes the shape HubSpot publishes', function () {
    $config = [];
    $fake = new FakeValues(FakeValues::seedForCall('hubspot', 'crm_event', $config));

    $faked = HubspotFaker::respond('crm_event', ['config' => $config, 'fake' => $fake]);

    // Through JSON and back, because a faked EMPTY object is a stdClass — the only
    // PHP value that spells `{}` on the wire — and `toBe` compares objects by
    // identity. This asserts the VALUES; the `{}`-versus-`[]` spelling is what
    // weaver's cross-runtime parity suite asserts, byte for byte.
    $faked = json_decode((string) json_encode($faked), true, 512, JSON_THROW_ON_ERROR);

    expect($faked)->toBe([
        [
            'eventId' => 531833541,
            'subscriptionId' => 3923621,
            'portalId' => 48807704,
            'appId' => 16111050,
            'occurredAt' => 1752613920733,
            'subscriptionType' => 'contact.creation',
            'attemptNumber' => 0,
            'objectId' => 138017612137,
            'changeFlag' => 'CREATED',
            'changeSource' => 'CRM_UI',
            'sourceId' => 'userId:76023669',
        ],
        [
            'eventId' => 531833542,
            'subscriptionId' => 3923622,
            'portalId' => 48807704,
            'appId' => 16111050,
            'occurredAt' => 1752613921000,
            'subscriptionType' => 'deal.propertyChange',
            'attemptNumber' => 0,
            'objectId' => 9876543210,
            'propertyName' => 'dealstage',
            'propertyValue' => 'closedwon',
            'changeSource' => 'CRM_UI',
            'sourceId' => 'userId:76023669',
        ],
    ]);
});

it('throws for an operation with no fixture rather than inventing a shape', function () {
    $fake = new FakeValues(FakeValues::seedForCall('hubspot', 'no_such_operation', []));

    expect(fn () => HubspotFaker::respond('no_such_operation', ['config' => [], 'fake' => $fake]))
        ->toThrow(InvalidArgumentException::class);
});
