<?php

declare(strict_types=1);

namespace ParticleAcademy\Hubspot\Flow;

use FancyFlow\Attributes\FlowNode;
use FancyFlow\Contracts\NodeExecutor;
use FancyFlow\Runtime\ExecutionContext;
use FancyFlow\Runtime\Port;
use ParticleAcademy\Connectors\ConnectionHost;
use ParticleAcademy\Connectors\TriggerEvent;
use ParticleAcademy\Hubspot\Hubspot;
use ParticleAcademy\Hubspot\Triggers\CrmEvent;

/*
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/triggers/crm-event.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/triggers/crm-event.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- hubspot
 */
/**
 * HubSpot CRM event, run on a fancy-flow-php host.
 *
 * The PHP twin of `hubspotCrmEventTriggerExecutor` in
 * @particle-academy/hubspot-js. A webhook trigger never calls HubSpot: it
 * republishes, on `out`, the delivery the HOST received and verified at its
 * own route. With nothing delivered, fake mode publishes the faker's sample
 * event, so a flow can be designed before the endpoint exists; any other mode
 * refuses, and says how to deliver one.
 */
#[FlowNode(
    name: '@particle-academy/hubspot_crm_event_trigger',
    aliases: [
        'hubspot_crm_event_trigger',
    ],
    category: 'trigger',
    label: 'HubSpot CRM event',
    description: 'Start when HubSpot reports deals, contacts or companies created, changed, deleted, merged, restored or re-associated.',
    inputs: [],
    outputs: [
        [
            'id' => 'out',
        ],
    ],
    sideEffects: 'none',
    outputShape: [
        [
            'path' => '[].eventId',
            'type' => 'number',
            'description' => 'HubSpot\'s id for this event. HubSpot retries on failure: dedupe on it.',
        ],
        [
            'path' => '[].subscriptionId',
            'type' => 'number',
            'description' => 'Which of the app\'s subscriptions fired.',
        ],
        [
            'path' => '[].portalId',
            'type' => 'number',
            'description' => 'The portal (HubSpot account) the event happened in. The ONLY routing key, and only after verification.',
        ],
        [
            'path' => '[].appId',
            'type' => 'number',
            'description' => 'The app the subscription belongs to.',
        ],
        [
            'path' => '[].occurredAt',
            'type' => 'number',
            'description' => 'When it happened, in epoch MILLISECONDS.',
        ],
        [
            'path' => '[].subscriptionType',
            'type' => 'string',
            'description' => 'What happened: deal.creation, contact.propertyChange, company.deletion, … (object.* names on HubSpot\'s newer developer platform).',
        ],
        [
            'path' => '[].attemptNumber',
            'type' => 'number',
            'description' => '0 on the first delivery, counting up on retries.',
        ],
        [
            'path' => '[].objectId',
            'type' => 'number',
            'description' => 'The record the event is about. Pass it to deal_get / contact_get / company_get as a string.',
        ],
        [
            'path' => '[].changeFlag',
            'type' => 'string',
            'description' => 'CREATED, DELETED, MERGED, RESTORED, … where the event type carries one.',
        ],
        [
            'path' => '[].changeSource',
            'type' => 'string',
            'description' => 'What made the change: CRM_UI, API, IMPORT, …',
        ],
        [
            'path' => '[].propertyName',
            'type' => 'string',
            'description' => 'For a property change: which property. Absent otherwise.',
        ],
        [
            'path' => '[].propertyValue',
            'type' => 'string',
            'description' => 'For a property change: its new value, as a string. Absent otherwise.',
        ],
    ],
)]
final class CrmEventTriggerExecutor implements NodeExecutor
{
    public function __construct(private readonly ?ConnectionHost $host = null) {}

    public function execute(ExecutionContext $ctx): mixed
    {
        $config = $ctx->config();
        $service = Hubspot::descriptor();

        $connection = ($this->host ?? new ConnectionHost)->resolve(
            $service->service,
            CrmEvent::OPERATION,
            $config,
            $service->sandbox,
            $service->requires,
            $service->baseUrls,
        );

        $event = TriggerEvent::resolve(
            $service->service,
            CrmEvent::OPERATION,
            CrmEvent::DELIVERY,
            CrmEvent::SETUP,
            $service->faker,
            $connection,
            $ctx->input('in'),
            $config,
        );

        return Port::only('out', $event);
    }
}
