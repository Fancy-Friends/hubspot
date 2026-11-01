<?php

declare(strict_types=1);

namespace ParticleAcademy\Hubspot\Flow;

use FancyFlow\Attributes\FlowNode;
use FancyFlow\Contracts\NodeExecutor;
use FancyFlow\Runtime\ExecutionContext;
use FancyFlow\Runtime\Port;
use FancyFlow\Runtime\RunEvent;
use ParticleAcademy\Connectors\ConnectorClient;
use ParticleAcademy\Hubspot\Actions\PropertyList;
use ParticleAcademy\Hubspot\Hubspot;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/property-list.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/property-list.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */
/**
 * List property definitions, run on a fancy-flow-php host.
 *
 * The PHP twin of `hubspotPropertyListExecutor` in
 * @particle-academy/hubspot-js: the same request, built from the node's config
 * by the same `Actions\PropertyList` a host would call directly, and the same
 * value on `out` — the client's `{data, mode, connection}`.
 *
 * The client resolves the connection and the estate from the config. With
 * nothing configured that is FAKE, so a node dropped on a canvas runs against
 * the faker rather than HubSpot. To reach a real estate, pass a
 * `ConnectorClient` that knows the host's connections — or bind one in the
 * container, which resolves the constructor by type.
 */
#[FlowNode(
    name: '@particle-academy/hubspot_property_list',
    aliases: [
        'hubspot_property_list',
    ],
    category: 'io',
    label: 'List property definitions',
    description: 'Every property defined on deals, contacts or companies: name, label, type and the options of an enumeration.',
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
            'path' => 'data.results',
            'type' => 'array',
            'description' => 'Every property definition on the object.',
        ],
        [
            'path' => 'data.results[].name',
            'type' => 'string',
            'description' => 'The internal name a record\'s properties are keyed by.',
        ],
        [
            'path' => 'data.results[].label',
            'type' => 'string',
            'description' => 'The display label.',
        ],
        [
            'path' => 'data.results[].type',
            'type' => 'string',
            'description' => 'string, number, date, datetime, enumeration, bool.',
        ],
        [
            'path' => 'data.results[].fieldType',
            'type' => 'string',
            'description' => 'How HubSpot renders it: text, select, checkbox, …',
        ],
        [
            'path' => 'data.results[].options',
            'type' => 'array',
            'description' => 'An enumeration\'s options: label, value.',
        ],
    ],
)]
final class PropertyListExecutor implements NodeExecutor
{
    public function __construct(private readonly ?ConnectorClient $client = null) {}

    public function execute(ExecutionContext $ctx): mixed
    {
        $config = $ctx->config();

        $result = ($this->client ?? new ConnectorClient)->call(
            Hubspot::descriptor(),
            PropertyList::OPERATION,
            $config,
            [
                'method' => PropertyList::METHOD,
                'path' => PropertyList::path($config),
                'query' => PropertyList::body($config),
            ],
            $ctx->input('in'),
        );

        $id = is_array($result->data) ? ($result->data['id'] ?? null) : null;
        $ctx->emit(RunEvent::log(
            'info',
            'hubspot property_list'.(is_scalar($id) ? ' '.$id : '').' ('.$result->mode->value.')',
            $ctx->node->id,
        ));

        return Port::only('out', $result->toArray());
    }
}
