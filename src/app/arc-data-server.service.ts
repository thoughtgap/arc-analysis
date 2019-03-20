import { Injectable } from '@angular/core';
import { ArcTimelineItem } from './ArcTimelineItem';
import { TLITEMS } from './mock-timelineitems';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { filterObj } from './ArcTimelineFilter';

@Injectable({
  providedIn: 'root'
})
export class ArcDataServerService {
  //private heroesUrl = 'http://localhost:3000/heroes';  // URL to web api
  public baseUrlStd = 'http://localhost:3000';
  public baseUrl = 'http://localhost:3000';
  public filter: filterObj;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
    
      console.log("Service constructor!");
      this.filter = {};
  }


  public resetBaseUrl() {
    console.log("Base URL reset");
    this.baseUrl = this.baseUrlStd;
  }

  public setBaseUrl(baseUrl: string) {
    console.log("Base URL set " + baseUrl);
    this.baseUrl = baseUrl;
  }

  public getBaseUrl() {
    console.log("Base URL get " + this.baseUrl);
    return this.baseUrl;
  }


  // /** GET heroes from the server */
  // getTimelineItems(): Observable<TimelineItem[]> {
  //   return this.http.get<TimelineItem[]>(this.heroesUrl)
  //     .pipe(
  //       tap(_ => this.log('fetched TimelineItems')),
  //       catchError(this.handleError<TimelineItem[]>('getHeroes', []))
  //     );
  // }

  getTimelineItemsNew(): Observable<ArcTimelineItem[]> {
    // this.filter = {
    //   "weekday": ["Mo"],
    //   "activityType":["cycling"]
    // };

    return this.http.get<ArcTimelineItem[]>(`${this.baseUrl}/timelineItems/list`, { params: this.filter })
      .pipe(
        tap(_ => this.log('fetched TimelineItems')),
        catchError(this.handleError<ArcTimelineItem[]>('getTimelineItemsNew()', []))
      );
  }



  getActivityTypes(): Observable<string[]> {
    // this.filter = {
    //   "weekday": ["Mo"],
    //   "activityType":["cycling"]
    // };
    return this.http.get<ArcTimelineItem[]>(`${this.baseUrl}/activities/types`, { params: this.filter })
      .pipe(
        tap(_ => this.log('getActivityTypes()')),
        catchError(this.handleError<ArcTimelineItem[]>('getActivityTypes()', []))
      );
  }







  // getTimelineItem(id: number): Observable<ArcTimelineItem> {
  //   // TODO: send the message _after_ fetching the heroes
  //   this.log(`ArcDataServerService: fetched hero id=${id}`);
  //   return of({id:0,name:"test"});
  //   //return of(TLITEMS.find(item => item.id === id));
  // }

  /** Log a ArcDataServerService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ArcDataServerService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}