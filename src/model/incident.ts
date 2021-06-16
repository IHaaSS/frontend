export class Incident {
  sources: IncidentElement[] = [];
  events: IncidentEvent[] = [];
  entities: IncidentElement[] = [];
  impacts: IncidentElement[] = [];

  time: Date;
  email: string;
  description: string;
  technicalData: string;
  title: string;

  idCount = 0;

  constructor() {
    this.addSource(new IncidentElement());
    this.addEvent(new IncidentElement());
    this.addEntity(new IncidentElement());
    this.addImpact(new IncidentElement());
  }

  addSource(element: IncidentElement): void {
    element.id = this.idCount++;
    this.sources.push(element);
  }
  addEvent(element: IncidentElement): void {
    element.id = this.idCount++;
    this.events.push(element);
  }
  addEntity(element: IncidentElement): void {
    element.id = this.idCount++;
    this.entities.push(element);
  }
  addImpact(element: IncidentElement): void {
    element.id = this.idCount++;
    this.impacts.push(element);
  }

  isOneEventSet(): boolean {
    for (const event of this.events) {
      if (event.elements.length > 0) {
        return true;
      }
    }
    return false;
  }

  isOneSourceSet(): boolean {
    for (const source of this.sources) {
      if (source.elements.length > 0) {
        return true;
      }
    }
    return false;
  }

  isOneEntitySet(): boolean {
    for (const entity of this.entities) {
      if (entity.elements.length > 0) {
        return true;
      }
    }
    return false;
  }

  isOneImpactSet(): boolean {
    for (const impact of this.impacts) {
      if (impact.elements.length > 0) {
        return true;
      }
    }
    return false;
  }

  getElementById(id: number): IncidentElement {
    for (const source of this.sources) {
      if (source.id === id) {
        return source;
    }
      }

    for (const event of this.events) {
      if (event.id === id) {
        return event;
    }
      }

    for (const entity of this.entities) {
      if (entity.id === id) {
        return entity;
    }
      }

    return undefined;
  }

  checkTitle(): boolean {
    if (this.title && this.title.trim()) {
      return true;
    }
    return false;
  }
}

export class IncidentElement {
    elements: string[];
    description: string;
    id?: number;
    elementId: string;

    constructor() {
      this.elements = [];
      this.description = '';
      this.elementId = '';
    }

    get name(): string {
      return this.elements[this.elements.length - 1];
    }
}

export class IncidentEvent extends IncidentElement {
  triggeredBy?: number;
}
