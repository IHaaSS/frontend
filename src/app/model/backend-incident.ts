import { Incident, IncidentElement } from './incident';

// only for backend compatibility
export class BackendIncident {
    static parseIncidentElements(incident: Incident) {
        incident.sources.forEach((source, i) => {
            incident.sources[i] = new IncidentElementBackend(source, ElementType.source, source.indicators);
        });
        incident.events.forEach((event, i) => {
            incident.events[i] = new IncidentElementBackend(event, ElementType.event, event.indicators);
        });
        incident.entities.forEach((entity, i) => {
            incident.entities[i] = new IncidentElementBackend(entity, ElementType.entity, entity.indicators);
        });
        incident.impacts.forEach((impact, i) => {
            incident.impacts[i] = new IncidentElementBackend(impact, ElementType.impact, impact.indicators);
        });
    }
}

export class IncidentElementBackend extends IncidentElement {
    source?: string[];
    event?: string[];
    entity?: string[];
    impact?: string[];
    elements = [];
    elementId = '';
    description: string;
    id: number;
    indicators: string[];

    constructor(incidentElement: IncidentElement, type: ElementType, indicators: string[]) {
        super();
        this[type] = incidentElement.elements;
        this[type].push(incidentElement.elementId);
        this.description = incidentElement.description;
        this.id = incidentElement.id;
        this.indicators = indicators;
    }
}

export enum ElementType {
    source = 'source',
    event = 'event',
    entity = 'entity',
    impact = 'impact'
}
