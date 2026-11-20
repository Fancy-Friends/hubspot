<?php

declare(strict_types=1);

namespace ParticleAcademy\Hubspot\Flow;

use FancyFlow\Attributes\FlowNode;
use FancyFlow\Contracts\NodeExecutor;
use FancyFlow\Runtime\ExecutionContext;
use FancyFlow\Runtime\Port;
use FancyFlow\Runtime\RunEvent;
use ParticleAcademy\Connectors\ConnectorClient;
use ParticleAcademy\Hubspot\Actions\OauthExchangeCode;
use ParticleAcademy\Hubspot\Hubspot;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/oauth-exchange-code.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/oauth-exchange-code.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */
/**
 * Exchange OAuth code, run on a fancy-flow-php host.
 *
 * The PHP twin of `hubspotOauthExchangeCodeExecutor` in
 * @particle-academy/hubspot-js: the same request, built from the node's config
 * by the same `Actions\OauthExchangeCode` a host would call directly, and the
 * same value on `out` — the client's `{data, mode, connection}`.
 *
 * The client resolves the connection and the estate from the config. With
 * nothing configured that is FAKE, so a node dropped on a canvas runs against
 * the faker rather than HubSpot. To reach a real estate, pass a
 * `ConnectorClient` that knows the host's connections — or bind one in the
 * container, which resolves the constructor by type.
 */
#[FlowNode(
    name: '@particle-academy/hubspot_oauth_exchange_code',
    aliases: [
        'hubspot_oauth_exchange_code',
    ],
    category: 'io',
    label: 'Exchange OAuth code',
    description: 'Exchange the authorization code HubSpot sent to your redirect URL for an access token and a refresh token.',
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
    sideEffects: 'unsafe-to-replay',
    outputShape: [
        [
            'path' => 'data.access_token',
            'type' => 'string',
            'description' => 'The new access token. Store it as the connection\'s accessToken.',
        ],
        [
            'path' => 'data.refresh_token',
            'type' => 'string',
            'description' => 'The installation\'s refresh token. Store it as the connection\'s refreshToken; it does not expire while the app stays installed.',
        ],
        [
            'path' => 'data.expires_in',
            'type' => 'number',
            'description' => 'Seconds until the access token expires (1800 for HubSpot).',
        ],
        [
            'path' => 'data.token_type',
            'type' => 'string',
            'description' => 'The token type, `bearer`.',
        ],
    ],
)]
final class OauthExchangeCodeExecutor implements NodeExecutor
{
    public function __construct(private readonly ?ConnectorClient $client = null) {}

    public function execute(ExecutionContext $ctx): mixed
    {
        $config = $ctx->config();

        $result = ($this->client ?? new ConnectorClient)->call(
            Hubspot::descriptorFor(OauthExchangeCode::OPERATION),
            OauthExchangeCode::OPERATION,
            $config,
            [
                'method' => OauthExchangeCode::METHOD,
                'path' => OauthExchangeCode::PATH,
                'form' => OauthExchangeCode::body($config),
            ],
            $ctx->input('in'),
        );

        $id = is_array($result->data) ? ($result->data['id'] ?? null) : null;
        $ctx->emit(RunEvent::log(
            'info',
            'hubspot oauth_exchange_code'.(is_scalar($id) ? ' '.$id : '').' ('.$result->mode->value.')',
            $ctx->node->id,
        ));

        return Port::only('out', $result->toArray());
    }
}
