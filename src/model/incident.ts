export class Incident{
  sources: IncidentElement[] = [];
  events: IncidentEvent[] = [];
  entities: IncidentElement[] = [];
  impacts: IncidentElement[] = [];

  time: Date;
  email: string;
  description: string;
  technicalData: string;
  title: string;

  idCount: number = 0;

  constructor(){
    this.addSource({elements: [], description: "", elementId: ""});
    this.addEvent({elements: [], description: "", elementId: ""});
    this.addEntity({elements: [], description: "", elementId: ""});
    this.addImpact({elements: [], description: "", elementId: ""});
  }

  addSource(element: IncidentElement): void{
    element.id = this.idCount++;
    this.sources.push(element);
  }
  addEvent(element: IncidentElement): void{
    element.id = this.idCount++;
    this.events.push(element);
  }
  addEntity(element: IncidentElement): void{
    element.id = this.idCount++;
    this.entities.push(element);
  }
  addImpact(element: IncidentElement): void{
    element.id = this.idCount++;
    this.impacts.push(element);
  }

  isOneEventSet(): boolean{
    for(let event of this.events){
      if(event.elements.length > 0)
        return true;
    }
    return false;
  }

  isOneSourceSet(): boolean{
    for(let source of this.sources){
      if(source.elements.length > 0)
        return true;
    }
    return false;
  }

  isOneEntitySet(): boolean{
    for(let entity of this.entities){
      if(entity.elements.length > 0)
        return true;
    }
    return false;
  }

  isOneImpactSet(): boolean{
    for(let impact of this.impacts){
      if(impact.elements.length > 0)
        return true;
    }
    return false;
  }

  getElementById(id: number): string[]{
    for(let source of this.sources)
      if(source.id === id)
        return source.elements;

    for(let event of this.events)
      if(event.id === id)
        return event.elements;

    for(let entity of this.entities)
      if(entity.id === id)
        return entity.elements;

    return undefined;
  }

  checkTitle(): boolean{
    if(this.title && this.title.trim())
      return true;
    return false;
  }
}

export class IncidentElement{
    elements: string[];
    description: string;
    id?: number;
    elementId: string;
}

export class IncidentEvent extends IncidentElement{
  triggeredBy?: number;
}