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
