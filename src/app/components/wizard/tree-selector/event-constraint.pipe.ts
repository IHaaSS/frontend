import { Pipe, PipeTransform } from '@angular/core';
import { Incident } from 'app/model/incident';
import constraintsJson from 'app/model/constraints.json';

@Pipe({
  name: 'eventConstraint'
})
export class EventConstraintPipe implements PipeTransform {


  constructor() {
  }

  transform(selectibleEvents: string[], triggeredBy: number, incident: Incident): string[] {
    if (triggeredBy === undefined) {
      return selectibleEvents;
    }
    const triggeredByEvent: string[] = incident.getElementById(triggeredBy).elements;
    if (triggeredByEvent === undefined) {
      return selectibleEvents;
    }
    const newSelectibleEvents: string[] = [];
    for (const event of selectibleEvents) {
      if (this.isEventAllowed(event, triggeredByEvent)) {
        newSelectibleEvents.push(event);
      }
    }
    return newSelectibleEvents;
  }

  isEventAllowed(event: string, triggeredBy: string[]): boolean {
    for (const triggeredByEvent of triggeredBy) {
      if (!constraintsJson[event]) {
        continue;
      }
      for (const prohibited of constraintsJson[event].prohibits) {
        if (prohibited === triggeredByEvent) {
          console.log('prohibited: ' + event);
          return false;
        }
      }
    }
    return true;
  }

}
