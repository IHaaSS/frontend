import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Incident } from 'app/model/incident';
import { BackendIncident } from 'app/model/backend-incident';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private answerUrl = environment.baseUrl + '/answer';

  constructor(private http: HttpClient) { }

  async postIncident(incident: Incident): Promise<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    const serverIncident: any = incident;
    BackendIncident.parseIncidentElements(serverIncident);
    console.log(serverIncident);

    let question: any;
    await this.http.post(environment.baseUrl + '/user_incidents', JSON.stringify(serverIncident), { headers: headers }).toPromise().then(
      response => {
        question = response;
      },
      response => {
        console.log('POST call in error', response);
      }
    );
    console.log(question);
    return question;
  }

  async postAnswer(answer: Answer): Promise<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let serverAnswer: any;
    await this.http.post(environment.baseUrl + '/answer', JSON.stringify(answer), { headers: headers})
      .toPromise().then(
        (response) => {
          serverAnswer = response;
        },
        response => {
          console.log('POST call in error', response);
        }
      );
    console.log(serverAnswer);
    return serverAnswer;
  }

}

export class Answer {
  id: number;
  phase: number;
  answers: Question[];
}

export class Question {
  attributeId: number;
  value: number;
  topicId: number;
}
