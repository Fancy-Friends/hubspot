<?php

declare(strict_types=1);

/*
 * HubSpot — the published Composer package.
 *
 * GENERATED — do not edit. Fix weaver's template/ and regenerate.
 *
 * This runs against the PUBLISHED package, installed by name from the
 * registry into a project that has never seen this repo. Every other test
 * here imports from ../src and therefore cannot see the packaging.
 */

$autoload = getcwd().'/vendor/autoload.php';

if (! is_file($autoload)) {
    fwrite(STDERR, 'No vendor/autoload.php in '.getcwd().PHP_EOL);
    fwrite(STDERR, 'Run this from a project that has composer-required the published package:'.PHP_EOL);
    fwrite(STDERR, '    composer require particle-academy/hubspot-php'.PHP_EOL);
    exit(2);
}

require $autoload;

use ParticleAcademy\Connectors\FakeValues;
use ParticleAcademy\Hubspot\HubspotFaker;

$goldens = [
    [
        'operation' => 'company_create',
        'config' => [],
        'expected' => [
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
        ],
    ],
    [
        'operation' => 'company_get',
        'config' => [],
        'expected' => [
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
        ],
    ],
    [
        'operation' => 'company_list',
        'config' => [],
        'expected' => [
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
        ],
    ],
    [
        'operation' => 'company_search',
        'config' => [],
        'expected' => [
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
        ],
    ],
    [
        'operation' => 'company_update',
        'config' => [],
        'expected' => [
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
        ],
    ],
    [
        'operation' => 'contact_create',
        'config' => [],
        'expected' => [
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
        ],
    ],
    [
        'operation' => 'contact_get',
        'config' => [],
        'expected' => [
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
        ],
    ],
    [
        'operation' => 'contact_list',
        'config' => [],
        'expected' => [
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
        ],
    ],
    [
        'operation' => 'contact_search',
        'config' => [],
        'expected' => [
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
        ],
    ],
    [
        'operation' => 'contact_update',
        'config' => [],
        'expected' => [
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
        ],
    ],
    [
        'operation' => 'deal_create',
        'config' => [],
        'expected' => [
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
        ],
    ],
    [
        'operation' => 'deal_get',
        'config' => [],
        'expected' => [
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
        ],
    ],
    [
        'operation' => 'deal_list',
        'config' => [],
        'expected' => [
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
        ],
    ],
    [
        'operation' => 'deal_search',
        'config' => [],
        'expected' => [
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
        ],
    ],
    [
        'operation' => 'deal_update',
        'config' => [],
        'expected' => [
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
        ],
    ],
    [
        'operation' => 'owner_list',
        'config' => [],
        'expected' => [
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
        ],
    ],
    [
        'operation' => 'pipeline_list',
        'config' => [],
        'expected' => [
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
        ],
    ],
    [
        'operation' => 'property_list',
        'config' => [],
        'expected' => [
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
        ],
    ],
];

foreach ($goldens as $golden) {
    $operation = $golden['operation'];
    $config = $golden['config'];

    $fake = new FakeValues(FakeValues::seedForCall('hubspot', $operation, $config));
    $faked = HubspotFaker::respond($operation, ['config' => $config, 'fake' => $fake]);

    if ($faked !== $golden['expected']) {
        fwrite(STDERR, "the PUBLISHED package produced different bytes for {$operation}\n");
        fwrite(STDERR, '  got:      '.json_encode($faked)."\n");
        fwrite(STDERR, '  expected: '.json_encode($golden['expected'])."\n");
        exit(1);
    }

    echo "  ok   {$operation}\n";
}

echo "\n  ".count($goldens)." operations verified against the published package.\n";
