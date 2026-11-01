<?php

declare(strict_types=1);

namespace ParticleAcademy\Hubspot\Flow;

use FancyFlow\Attributes\FlowNode;
use FancyFlow\Contracts\NodeExecutor;
use FancyFlow\Runtime\ExecutionContext;
use FancyFlow\Runtime\Port;
use FancyFlow\Runtime\RunEvent;
use ParticleAcademy\Connectors\ConnectorClient;
use ParticleAcademy\Hubspot\Actions\DealSearch;
use ParticleAcademy\Hubspot\Hubspot;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/deal-search.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/deal-search.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */
/**
 * Search deals, run on a fancy-flow-php host.
 *
 * The PHP twin of `hubspotDealSearchExecutor` in @particle-academy/hubspot-js:
 * the same request, built from the node's config by the same
 * `Actions\DealSearch` a host would call directly, and the same value on `out`
 * — the client's `{data, mode, connection}`.
 *
 * The client resolves the connection and the estate from the config. With
 * nothing configured that is FAKE, so a node dropped on a canvas runs against
 * the faker rather than HubSpot. To reach a real estate, pass a
 * `ConnectorClient` that knows the host's connections — or bind one in the
 * container, which resolves the constructor by type.
 */
#[FlowNode(
    name: '@particle-academy/hubspot_deal_search',
    aliases: [
        'hubspot_deal_search',
    ],
    category: 'io',
    label: 'Search deals',
    description: 'Find deals by property filters, sorts or a text query.',
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
            'path' => 'data.total',
            'type' => 'number',
            'description' => 'How many records match, across every page.',
        ],
        [
            'path' => 'data.results',
            'type' => 'array',
            'description' => 'This page of matching deals.',
        ],
        [
            'path' => 'data.results[].id',
            'type' => 'string',
            'description' => 'HubSpot\'s deal id. A NUMERIC STRING, not a number; pass it back as given.',
        ],
        [
            'path' => 'data.results[].properties',
            'type' => 'object',
            'description' => 'The requested properties, every value a string or null.',
        ],
        [
            'path' => 'data.results[].createdAt',
            'type' => 'string',
            'description' => 'ISO 8601 timestamp.',
        ],
        [
            'path' => 'data.results[].updatedAt',
            'type' => 'string',
            'description' => 'ISO 8601 timestamp.',
        ],
        [
            'path' => 'data.results[].archived',
            'type' => 'boolean',
            'description' => 'FALSE for a live record.',
        ],
        [
            'path' => 'data.paging.next.after',
            'type' => 'string',
            'description' => 'Pass this as "after" for the next page. Absent on the last page.',
        ],
    ],
)]
final class DealSearchExecutor implements NodeExecutor
{
    public function __construct(private readonly ?ConnectorClient $client = null) {}

    public function execute(ExecutionContext $ctx): mixed
    {
        $config = $ctx->config();

        $result = ($this->client ?? new ConnectorClient)->call(
            Hubspot::descriptor(),
            DealSearch::OPERATION,
            $config,
            [
                'method' => DealSearch::METHOD,
                'path' => DealSearch::PATH,
                'json' => DealSearch::body($config),
            ],
            $ctx->input('in'),
        );

        $id = is_array($result->data) ? ($result->data['id'] ?? null) : null;
        $ctx->emit(RunEvent::log(
            'info',
            'hubspot deal_search'.(is_scalar($id) ? ' '.$id : '').' ('.$result->mode->value.')',
            $ctx->node->id,
        ));

        return Port::only('out', $result->toArray());
    }
}
