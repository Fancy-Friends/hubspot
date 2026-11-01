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
            'company_create' => self::CompanyCreate($config, $fake),
            'company_get' => self::CompanyGet($config, $fake),
            'company_list' => self::CompanyList($config, $fake),
            'company_search' => self::CompanySearch($config, $fake),
            'company_update' => self::CompanyUpdate($config, $fake),
            'contact_create' => self::ContactCreate($config, $fake),
            'contact_get' => self::ContactGet($config, $fake),
            'contact_list' => self::ContactList($config, $fake),
            'contact_search' => self::ContactSearch($config, $fake),
            'contact_update' => self::ContactUpdate($config, $fake),
            'deal_create' => self::DealCreate($config, $fake),
            'deal_get' => self::DealGet($config, $fake),
            'deal_list' => self::DealList($config, $fake),
            'deal_search' => self::DealSearch($config, $fake),
            'deal_update' => self::DealUpdate($config, $fake),
            'owner_list' => self::OwnerList($config, $fake),
            'pipeline_list' => self::PipelineList($config, $fake),
            'property_list' => self::PropertyList($config, $fake),
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
    private static function CompanyCreate(array $config, mixed $fake): array|\stdClass
    {
        $boundRecordId = implode('', array_map(static fn (): int => $fake->int(0, 9), range(1, 9)));

        return [
        'id' => $boundRecordId,
        'properties' => [
            'name' => 'Acme',
            'domain' => 'acme.example.test',
            'hs_object_id' => $boundRecordId,
            'createdate' => '2026-01-01T00:00:00.000Z',
            'lastmodifieddate' => '2026-01-01T00:00:00.000Z',
        ],
        'createdAt' => '2026-01-01T00:00:00.000Z',
        'updatedAt' => '2026-01-01T00:00:00.000Z',
        'archived' => false,
    ];
    }

    /** @param array<string,mixed> $config */
    private static function CompanyGet(array $config, mixed $fake): array|\stdClass
    {
        $boundRecordId = implode('', array_map(static fn (): int => $fake->int(0, 9), range(1, 9)));

        return [
        'id' => $boundRecordId,
        'properties' => [
            'name' => 'Acme',
            'domain' => 'acme.example.test',
            'hs_object_id' => $boundRecordId,
            'createdate' => '2026-01-01T00:00:00.000Z',
            'lastmodifieddate' => '2026-01-01T00:00:00.000Z',
        ],
        'createdAt' => '2026-01-01T00:00:00.000Z',
        'updatedAt' => '2026-01-01T00:00:00.000Z',
        'archived' => false,
    ];
    }

    /** @param array<string,mixed> $config */
    private static function CompanyList(array $config, mixed $fake): array|\stdClass
    {
        $boundRecordId = implode('', array_map(static fn (): int => $fake->int(0, 9), range(1, 9)));

        return [
        'results' => [
            [
                'id' => $boundRecordId,
                'properties' => [
                    'name' => 'Acme',
                    'domain' => 'acme.example.test',
                    'hs_object_id' => $boundRecordId,
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
    ];
    }

    /** @param array<string,mixed> $config */
    private static function CompanySearch(array $config, mixed $fake): array|\stdClass
    {
        $boundRecordId = implode('', array_map(static fn (): int => $fake->int(0, 9), range(1, 9)));

        return [
        'total' => 1,
        'results' => [
            [
                'id' => $boundRecordId,
                'properties' => [
                    'name' => 'Acme',
                    'domain' => 'acme.example.test',
                    'hs_object_id' => $boundRecordId,
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
    ];
    }

    /** @param array<string,mixed> $config */
    private static function CompanyUpdate(array $config, mixed $fake): array|\stdClass
    {
        $boundRecordId = implode('', array_map(static fn (): int => $fake->int(0, 9), range(1, 9)));

        return [
        'id' => $boundRecordId,
        'properties' => [
            'name' => 'Acme',
            'domain' => 'acme.example.test',
            'hs_object_id' => $boundRecordId,
            'createdate' => '2026-01-01T00:00:00.000Z',
            'lastmodifieddate' => '2026-01-01T00:00:00.000Z',
        ],
        'createdAt' => '2026-01-01T00:00:00.000Z',
        'updatedAt' => '2026-01-01T00:00:00.000Z',
        'archived' => false,
    ];
    }

    /** @param array<string,mixed> $config */
    private static function ContactCreate(array $config, mixed $fake): array|\stdClass
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

    /** @param array<string,mixed> $config */
    private static function ContactGet(array $config, mixed $fake): array|\stdClass
    {
        $boundRecordId = implode('', array_map(static fn (): int => $fake->int(0, 9), range(1, 9)));

        return [
        'id' => $boundRecordId,
        'properties' => [
            'email' => 'rosa@example.test',
            'firstname' => 'Rosa',
            'lastname' => 'Diaz',
            'hs_object_id' => $boundRecordId,
            'createdate' => '2026-01-01T00:00:00.000Z',
            'lastmodifieddate' => '2026-01-01T00:00:00.000Z',
        ],
        'createdAt' => '2026-01-01T00:00:00.000Z',
        'updatedAt' => '2026-01-01T00:00:00.000Z',
        'archived' => false,
    ];
    }

    /** @param array<string,mixed> $config */
    private static function ContactList(array $config, mixed $fake): array|\stdClass
    {
        $boundRecordId = implode('', array_map(static fn (): int => $fake->int(0, 9), range(1, 9)));

        return [
        'results' => [
            [
                'id' => $boundRecordId,
                'properties' => [
                    'email' => 'rosa@example.test',
                    'firstname' => 'Rosa',
                    'lastname' => 'Diaz',
                    'hs_object_id' => $boundRecordId,
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
    ];
    }

    /** @param array<string,mixed> $config */
    private static function ContactSearch(array $config, mixed $fake): array|\stdClass
    {
        $boundRecordId = implode('', array_map(static fn (): int => $fake->int(0, 9), range(1, 9)));

        return [
        'total' => 1,
        'results' => [
            [
                'id' => $boundRecordId,
                'properties' => [
                    'email' => 'rosa@example.test',
                    'firstname' => 'Rosa',
                    'lastname' => 'Diaz',
                    'hs_object_id' => $boundRecordId,
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
    ];
    }

    /** @param array<string,mixed> $config */
    private static function ContactUpdate(array $config, mixed $fake): array|\stdClass
    {
        $boundRecordId = implode('', array_map(static fn (): int => $fake->int(0, 9), range(1, 9)));

        return [
        'id' => $boundRecordId,
        'properties' => [
            'email' => 'rosa@example.test',
            'firstname' => 'Rosa',
            'lastname' => 'Diaz',
            'hs_object_id' => $boundRecordId,
            'createdate' => '2026-01-01T00:00:00.000Z',
            'lastmodifieddate' => '2026-01-01T00:00:00.000Z',
        ],
        'createdAt' => '2026-01-01T00:00:00.000Z',
        'updatedAt' => '2026-01-01T00:00:00.000Z',
        'archived' => false,
    ];
    }

    /** @param array<string,mixed> $config */
    private static function DealCreate(array $config, mixed $fake): array|\stdClass
    {
        $boundRecordId = implode('', array_map(static fn (): int => $fake->int(0, 9), range(1, 9)));

        return [
        'id' => $boundRecordId,
        'properties' => [
            'dealname' => 'Acme renewal',
            'amount' => '12000',
            'dealstage' => 'appointmentscheduled',
            'pipeline' => 'default',
            'hs_object_id' => $boundRecordId,
            'createdate' => '2026-01-01T00:00:00.000Z',
            'lastmodifieddate' => '2026-01-01T00:00:00.000Z',
        ],
        'createdAt' => '2026-01-01T00:00:00.000Z',
        'updatedAt' => '2026-01-01T00:00:00.000Z',
        'archived' => false,
    ];
    }

    /** @param array<string,mixed> $config */
    private static function DealGet(array $config, mixed $fake): array|\stdClass
    {
        $boundRecordId = implode('', array_map(static fn (): int => $fake->int(0, 9), range(1, 9)));

        return [
        'id' => $boundRecordId,
        'properties' => [
            'dealname' => 'Acme renewal',
            'amount' => '12000',
            'dealstage' => 'appointmentscheduled',
            'pipeline' => 'default',
            'hs_object_id' => $boundRecordId,
            'createdate' => '2026-01-01T00:00:00.000Z',
            'lastmodifieddate' => '2026-01-01T00:00:00.000Z',
        ],
        'createdAt' => '2026-01-01T00:00:00.000Z',
        'updatedAt' => '2026-01-01T00:00:00.000Z',
        'archived' => false,
    ];
    }

    /** @param array<string,mixed> $config */
    private static function DealList(array $config, mixed $fake): array|\stdClass
    {
        $boundRecordId = implode('', array_map(static fn (): int => $fake->int(0, 9), range(1, 9)));

        return [
        'results' => [
            [
                'id' => $boundRecordId,
                'properties' => [
                    'dealname' => 'Acme renewal',
                    'amount' => '12000',
                    'dealstage' => 'appointmentscheduled',
                    'pipeline' => 'default',
                    'hs_object_id' => $boundRecordId,
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
    ];
    }

    /** @param array<string,mixed> $config */
    private static function DealSearch(array $config, mixed $fake): array|\stdClass
    {
        $boundRecordId = implode('', array_map(static fn (): int => $fake->int(0, 9), range(1, 9)));

        return [
        'total' => 1,
        'results' => [
            [
                'id' => $boundRecordId,
                'properties' => [
                    'dealname' => 'Acme renewal',
                    'amount' => '12000',
                    'dealstage' => 'appointmentscheduled',
                    'pipeline' => 'default',
                    'hs_object_id' => $boundRecordId,
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
    ];
    }

    /** @param array<string,mixed> $config */
    private static function DealUpdate(array $config, mixed $fake): array|\stdClass
    {
        $boundRecordId = implode('', array_map(static fn (): int => $fake->int(0, 9), range(1, 9)));

        return [
        'id' => $boundRecordId,
        'properties' => [
            'dealname' => 'Acme renewal',
            'amount' => '12000',
            'dealstage' => 'appointmentscheduled',
            'pipeline' => 'default',
            'hs_object_id' => $boundRecordId,
            'createdate' => '2026-01-01T00:00:00.000Z',
            'lastmodifieddate' => '2026-01-01T00:00:00.000Z',
        ],
        'createdAt' => '2026-01-01T00:00:00.000Z',
        'updatedAt' => '2026-01-01T00:00:00.000Z',
        'archived' => false,
    ];
    }

    /** @param array<string,mixed> $config */
    private static function OwnerList(array $config, mixed $fake): array|\stdClass
    {
        $boundOwnerId = implode('', array_map(static fn (): int => $fake->int(0, 9), range(1, 8)));

        return [
        'results' => [
            [
                'id' => $boundOwnerId,
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
    ];
    }

    /** @param array<string,mixed> $config */
    private static function PipelineList(array $config, mixed $fake): array|\stdClass
    {
        return [
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
    ];
    }

    /** @param array<string,mixed> $config */
    private static function PropertyList(array $config, mixed $fake): array|\stdClass
    {
        return [
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
    ];
    }
}
