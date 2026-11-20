<?php

declare(strict_types=1);

namespace ParticleAcademy\Hubspot\Flow;

use FancyFlow\Attributes\FlowNode;
use FancyFlow\Contracts\NodeExecutor;
use FancyFlow\Runtime\ExecutionContext;
use FancyFlow\Runtime\Port;
use FancyFlow\Runtime\RunEvent;
use ParticleAcademy\Connectors\ConnectorClient;
use ParticleAcademy\Hubspot\Actions\OauthRefresh;
use ParticleAcademy\Hubspot\Hubspot;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/oauth-refresh.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/oauth-refresh.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */
/**
 * Refresh OAuth token, run on a fancy-flow-php host.
 *
 * The PHP twin of `hubspotOauthRefreshExecutor` in
 * @particle-academy/hubspot-js: the same request, built from the node's config
 * by the same `Actions\OauthRefresh` a host would call directly, and the same
 * value on `out` — the client's `{data, mode, connection}`.
 *
 * The client resolves the connection and the estate from the config. With
 * nothing configured that is FAKE, so a node dropped on a canvas runs against
 * the faker rather than HubSpot. To reach a real estate, pass a
 * `ConnectorClient` that knows the host's connections — or bind one in the
 * container, which resolves the constructor by type.
 */
#[FlowNode(
    name: '@particle-academy/hubspot_oauth_refresh',
    aliases: [
        'hubspot_oauth_refresh',
    ],
    category: 'io',
    label: 'Refresh OAuth token',
    description: 'Use the connection\'s refresh token to get a new access token. HubSpot access tokens last 30 minutes.',
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
    sideEffects: 'idempotent',
    outputShape: [
        [
            'path' => 'data.access_token',
            'type' => 'string',
            'description' => 'The new access token. Replace the connection\'s accessToken with it.',
        ],
        [
            'path' => 'data.refresh_token',
            'type' => 'string',
            'description' => 'The same refresh token, returned again. HubSpot\'s does not rotate.',
        ],
        [
            'path' => 'data.expires_in',
            'type' => 'number',
            'description' => 'Seconds until the new access token expires (1800 for HubSpot).',
        ],
        [
            'path' => 'data.token_type',
            'type' => 'string',
            'description' => 'The token type, `bearer`.',
        ],
    ],
)]
final class OauthRefreshExecutor implements NodeExecutor
{
    public function __construct(private readonly ?ConnectorClient $client = null) {}

    public function execute(ExecutionContext $ctx): mixed
    {
        $config = $ctx->config();

        $result = ($this->client ?? new ConnectorClient)->call(
            Hubspot::descriptorFor(OauthRefresh::OPERATION),
            OauthRefresh::OPERATION,
            $config,
            [
                'method' => OauthRefresh::METHOD,
                'path' => OauthRefresh::PATH,
                'form' => OauthRefresh::body($config),
            ],
            $ctx->input('in'),
        );

        $id = is_array($result->data) ? ($result->data['id'] ?? null) : null;
        $ctx->emit(RunEvent::log(
            'info',
            'hubspot oauth_refresh'.(is_scalar($id) ? ' '.$id : '').' ('.$result->mode->value.')',
            $ctx->node->id,
        ));

        return Port::only('out', $result->toArray());
    }
}
