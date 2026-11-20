<?php

declare(strict_types=1);

namespace ParticleAcademy\Hubspot\Flow;

use FancyFlow\Attributes\FlowNode;
use FancyFlow\Contracts\NodeExecutor;
use FancyFlow\Runtime\ExecutionContext;
use FancyFlow\Runtime\Port;
use FancyFlow\Runtime\RunEvent;
use ParticleAcademy\Connectors\ConnectorClient;
use ParticleAcademy\Hubspot\Actions\OauthIntrospect;
use ParticleAcademy\Hubspot\Hubspot;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/oauth-introspect.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/oauth-introspect.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */
/**
 * Introspect OAuth token, run on a fancy-flow-php host.
 *
 * The PHP twin of `hubspotOauthIntrospectExecutor` in
 * @particle-academy/hubspot-js: the same request, built from the node's config
 * by the same `Actions\OauthIntrospect` a host would call directly, and the
 * same value on `out` — the client's `{data, mode, connection}`.
 *
 * The client resolves the connection and the estate from the config. With
 * nothing configured that is FAKE, so a node dropped on a canvas runs against
 * the faker rather than HubSpot. To reach a real estate, pass a
 * `ConnectorClient` that knows the host's connections — or bind one in the
 * container, which resolves the constructor by type.
 */
#[FlowNode(
    name: '@particle-academy/hubspot_oauth_introspect',
    aliases: [
        'hubspot_oauth_introspect',
    ],
    category: 'io',
    label: 'Introspect OAuth token',
    description: 'Ask HubSpot whether a token is still active, and what it is for. Replaces both v1 token-info calls.',
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
            'path' => 'data.active',
            'type' => 'boolean',
            'description' => 'Whether the token is active (RFC 7662). Every other field HubSpot returns is passed through as it arrived.',
        ],
    ],
)]
final class OauthIntrospectExecutor implements NodeExecutor
{
    public function __construct(private readonly ?ConnectorClient $client = null) {}

    public function execute(ExecutionContext $ctx): mixed
    {
        $config = $ctx->config();

        $result = ($this->client ?? new ConnectorClient)->call(
            Hubspot::descriptorFor(OauthIntrospect::OPERATION),
            OauthIntrospect::OPERATION,
            $config,
            [
                'method' => OauthIntrospect::METHOD,
                'path' => OauthIntrospect::PATH,
                'form' => OauthIntrospect::body($config),
            ],
            $ctx->input('in'),
        );

        $id = is_array($result->data) ? ($result->data['id'] ?? null) : null;
        $ctx->emit(RunEvent::log(
            'info',
            'hubspot oauth_introspect'.(is_scalar($id) ? ' '.$id : '').' ('.$result->mode->value.')',
            $ctx->node->id,
        ));

        return Port::only('out', $result->toArray());
    }
}
