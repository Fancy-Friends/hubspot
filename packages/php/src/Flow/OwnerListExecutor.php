<?php

declare(strict_types=1);

namespace ParticleAcademy\Hubspot\Flow;

use FancyFlow\Attributes\FlowNode;
use FancyFlow\Contracts\NodeExecutor;
use FancyFlow\Runtime\ExecutionContext;
use FancyFlow\Runtime\Port;
use FancyFlow\Runtime\RunEvent;
use ParticleAcademy\Connectors\ConnectorClient;
use ParticleAcademy\Hubspot\Actions\OwnerList;
use ParticleAcademy\Hubspot\Hubspot;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/owner-list.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/owner-list.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */
/**
 * List owners, run on a fancy-flow-php host.
 *
 * The PHP twin of `hubspotOwnerListExecutor` in @particle-academy/hubspot-js:
 * the same request, built from the node's config by the same
 * `Actions\OwnerList` a host would call directly, and the same value on `out`
 * — the client's `{data, mode, connection}`.
 *
 * The client resolves the connection and the estate from the config. With
 * nothing configured that is FAKE, so a node dropped on a canvas runs against
 * the faker rather than HubSpot. To reach a real estate, pass a
 * `ConnectorClient` that knows the host's connections — or bind one in the
 * container, which resolves the constructor by type.
 */
#[FlowNode(
    name: '@particle-academy/hubspot_owner_list',
    aliases: [
        'hubspot_owner_list',
    ],
    category: 'io',
    label: 'List owners',
    description: 'Page through the portal\'s owners: the users records can be assigned to.',
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
            'description' => 'This page of owners.',
        ],
        [
            'path' => 'data.results[].id',
            'type' => 'string',
            'description' => 'The OWNER id, which is what hubspot_owner_id on a record holds. Not the user id.',
        ],
        [
            'path' => 'data.results[].email',
            'type' => 'string',
            'description' => 'The owner\'s email.',
        ],
        [
            'path' => 'data.results[].firstName',
            'type' => 'string',
            'description' => 'First name.',
        ],
        [
            'path' => 'data.results[].lastName',
            'type' => 'string',
            'description' => 'Last name.',
        ],
        [
            'path' => 'data.results[].userId',
            'type' => 'number',
            'description' => 'The HubSpot USER id, a different number from the owner id.',
        ],
        [
            'path' => 'data.paging.next.after',
            'type' => 'string',
            'description' => 'Pass this as "after" for the next page. Absent on the last page.',
        ],
    ],
)]
final class OwnerListExecutor implements NodeExecutor
{
    public function __construct(private readonly ?ConnectorClient $client = null) {}

    public function execute(ExecutionContext $ctx): mixed
    {
        $config = $ctx->config();

        $result = ($this->client ?? new ConnectorClient)->call(
            Hubspot::descriptor(),
            OwnerList::OPERATION,
            $config,
            [
                'method' => OwnerList::METHOD,
                'path' => OwnerList::PATH,
                'query' => OwnerList::body($config),
            ],
            $ctx->input('in'),
        );

        $id = is_array($result->data) ? ($result->data['id'] ?? null) : null;
        $ctx->emit(RunEvent::log(
            'info',
            'hubspot owner_list'.(is_scalar($id) ? ' '.$id : '').' ('.$result->mode->value.')',
            $ctx->node->id,
        ));

        return Port::only('out', $result->toArray());
    }
}
