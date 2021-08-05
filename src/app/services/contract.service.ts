import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    await new Promise(f => setTimeout(f, 2000));
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
    await new Promise(f => setTimeout(f, 2000));
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
}

export class ContractIncident {
  ref: string;
  content: string;
  created: number;
  author: string;
  comments: [{
    ref: string;
    parent: string;
    created: number;
    author: string;
    content: string;
    votedUp: [];
    votedDown: [];
    attachmentList: [];
  }];
  votedUp: [];
  votedDown: [];
  attachments: [];
}

export class Comment {

}
