import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Incident } from 'app/model/incident';
import { environment } from 'environments/environment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  public incident: Incident;
  public userIncidents: Incident[]
  
  private incidentsUrl = environment.baseUrl + '/incidents'
  private userIncidentsUrl = environment.baseUrl + '/user_incidents'
  private transferUrl = environment.baseUrl+'/user_incidents/approve'

  constructor(private http: HttpClient) {
    this.incident = new Incident();
   }

  getIncident(): Incident {
    return this.incident;
  }

  async getIncidents(): Promise<Incident[]> {
    return this.http.get<Incident[]>(this.incidentsUrl).pipe(
      catchError(this.handleError<Incident[]>('getIncidents', []))
    ).toPromise(); 
  }

  async getUserIncidents(): Promise<Incident[]>{
    this.userIncidents = await this.http.get<Incident[]>(this.userIncidentsUrl).pipe(
      catchError(this.handleError<Incident[]>('getUserIncidents', []))
    ).toPromise(); 
    return this.userIncidents;
  }

  async deleteIncident(id:any): Promise<{}> {
    return this.http.delete(this.incidentsUrl +'/' + id).pipe(
      catchError(this.handleError('deleteIncident'))
    ).toPromise();
  }

  async deleteUserIncident(id:any): Promise<{}> {
    return this.http.delete(this.userIncidentsUrl +'/' + id).pipe(
      catchError(this.handleError('deleteIncident'))
    ).toPromise();
  }

  async approveIncident(incident: Incident): Promise<Incident> {
    let options = { headers: new HttpHeaders().set('Content-Type', 'application/json')};
    let returnIncident = await this.http.post<Incident>(this.transferUrl, incident, options)
    .pipe(
      catchError(this.handleError('transferUserIncident', incident))
    ).toPromise();
    this.removeUserIncident(incident.myId);
    return returnIncident;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private removeUserIncident(myId: number){
    console.log(this.userIncidents);
    this.userIncidents.forEach((incident, index) => {
      if(incident.myId == myId){
        this.userIncidents.splice(index, 1);
      }
    });
    console.log("removed" + myId);
    console.log(this.userIncidents);
  }
}
