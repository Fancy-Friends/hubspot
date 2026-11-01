<?php

declare(strict_types=1);

namespace ParticleAcademy\Hubspot\Flow;

use FancyFlow\Attributes\FlowNode;
use FancyFlow\Contracts\NodeExecutor;
use FancyFlow\Runtime\ExecutionContext;
use FancyFlow\Runtime\Port;
use FancyFlow\Runtime\RunEvent;
use ParticleAcademy\Connectors\ConnectorClient;
use ParticleAcademy\Hubspot\Actions\ContactGet;
use ParticleAcademy\Hubspot\Hubspot;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/contact-get.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/contact-get.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */
/**
 * Get contact, run on a fancy-flow-php host.
 *
 * The PHP twin of `hubspotContactGetExecutor` in @particle-academy/hubspot-js:
 * the same request, built from the node's config by the same
 * `Actions\ContactGet` a host would call directly, and the same value on `out`
 * — the client's `{data, mode, connection}`.
 *
 * The client resolves the connection and the estate from the config. With
 * nothing configured that is FAKE, so a node dropped on a canvas runs against
 * the faker rather than HubSpot. To reach a real estate, pass a
 * `ConnectorClient` that knows the host's connections — or bind one in the
 * container, which resolves the constructor by type.
 */
#[FlowNode(
    name: '@particle-academy/hubspot_contact_get',
    aliases: [
        'hubspot_contact_get',
    ],
    category: 'io',
    label: 'Get contact',
    description: 'Read one contact, with its associations when asked.',
    inputs: [
        [
            'id' => 'in',
        ],
    ],
    outputs: [
        [
            'id' => 'out',
        ],
    ],
    sideEffects: 'none',
    outputShape: [
        [
            'path' => 'data.id',
            'type' => 'string',
            'description' => 'HubSpot\'s contact id. A NUMERIC STRING, not a number; pass it back as given.',
        ],
        [
            'path' => 'data.properties',
            'type' => 'object',
            'description' => 'The requested properties, every value a string or null.',
        ],
        [
            'path' => 'data.createdAt',
            'type' => 'string',
            'description' => 'ISO 8601 timestamp.',
        ],
        [
            'path' => 'data.updatedAt',
            'type' => 'string',
            'description' => 'ISO 8601 timestamp.',
        ],
        [
            'path' => 'data.archived',
            'type' => 'boolean',
            'description' => 'FALSE for a live record.',
        ],
        [
            'path' => 'data.associations',
            'type' => 'object',
            'description' => 'Associated ids by object type, when associations were asked for.',
        ],
    ],
)]
final class ContactGetExecutor implements NodeExecutor
{
    public function __construct(private readonly ?ConnectorClient $client = null) {}

    public function execute(ExecutionContext $ctx): mixed
    {
        $config = $ctx->config();

        $result = ($this->client ?? new ConnectorClient)->call(
            Hubspot::descriptor(),
            ContactGet::OPERATION,
            $config,
            [
                'method' => ContactGet::METHOD,
                'path' => ContactGet::path($config),
                'query' => ContactGet::body($config),
            ],
            $ctx->input('in'),
        );

        $id = is_array($result->data) ? ($result->data['id'] ?? null) : null;
        $ctx->emit(RunEvent::log(
            'info',
            'hubspot contact_get'.(is_scalar($id) ? ' '.$id : '').' ('.$result->mode->value.')',
            $ctx->node->id,
        ));

        return Port::only('out', $result->toArray());
    }
}
