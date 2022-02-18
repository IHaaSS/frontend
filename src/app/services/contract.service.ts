import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Status } from 'app/model/incident';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) {
  }

  async getIncidents(): Promise<ContractIncident[]> {
    let contractIncidents: ContractIncident[];
    const url = environment.baseUrl + '/contract/incidents';
    console.log('GET ' + url);
    // await new Promise(f => setTimeout(f, 2000));
    await this.http.get(url).toPromise().then(
      response => {
        contractIncidents = response as ContractIncident[];
      },
      response => {
        console.log('GET call in error', response);
      }
    );
    return contractIncidents;
  }

  async getIpfsContent(ref: string): Promise<any> {
    let content: any;
    const url = environment.baseUrl + '/ipfs/' + ref;
    console.log('GET ' + url);
    // await new Promise(f => setTimeout(f, 2000));
    await this.http.get(url).toPromise().then(
      response => {
        content = response;
      },
      response => {
        console.log('GET call in error', response);
      }
    );
    return content;
  }

  async postIpfsContent(ref: string, content: string){

  }

  async postComment(parentRef: string, incidentRef: string, content: CommentContent, statusUpdate?: Status): Promise<string> {
    const url = environment.baseUrl + '/contract/incidents/comments';
    console.log('POST ' + url);
    const headers = new HttpHeaders()
      // .set('Content-Type', 'multipart/form-data');

    let body = new FormData();
    body.append('parent', parentRef);
    body.append('incident', incidentRef);
    body.append('comment', content.text);
    if(statusUpdate){
      body.append('status_update', statusUpdate.toString());
    }

    // const body = {
    //   parent: parentRef,
    //   comment: content.text,
    //   incident: incidentRef
    // };
    console.log(body)

    let ref: string;
    await this.http.post(url, body, {headers: headers, responseType: 'text'}).toPromise().then(
      response => {
        console.log('POST comment successful');
        console.log(response);
        ref = response;
      },
      response => {
        console.log('POST call in error', response);
      }
    );

    return ref;
  }

  async postVote(incidentRef: string, vote: number, isComment: boolean = false, commentRef?: string){
    let url: string = environment.baseUrl + '/contract/incidents/vote';

    if(isComment){
      url = environment.baseUrl + '/contract/incidents/comments/vote';
    }
    console.log('POST ' + url);
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    let body = {
      vote: vote,
      incident: incidentRef,
      ref: commentRef ? commentRef : incidentRef
    }

    await this.http.post(url, JSON.stringify(body), {headers: headers}).toPromise().then(
      response => {
        console.log('POST vote successful');
      },
      response => {
        console.log('POST call in error', response);
      }
    );
  }
}

export class ContractIncident {
  ref: string;
  content: string;
  created: number;
  author: string;
  comments: ContractComment[];
  votes: [];
  attachments: [];
}

export class ContractComment {
  ref: string;
  parent: string;
  created: number;
  author: string;
  content: string;
  votes: [];
  attachmentList: [];
  status_update: number;
}

export class CommentContent {
  author: string;
  text: string;
}

export class Comment {

}
