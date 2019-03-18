import { Injectable } from '@angular/core';
import { TimelineItem } from './TimelineItem';
import { TLITEMS } from './mock-timelineitems';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimelineItemListService {
  private heroesUrl = 'http://localhost:3000/heroes';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getTimelineItems(): Observable<TimelineItem[]> {
    return this.http.get<TimelineItem[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched TimelineItems')),
        catchError(this.handleError<TimelineItem[]>('getHeroes', []))
      );
  }

  getTimelineItemsNew(): Observable<TimelineItem[]> {
    return this.http.get<TimelineItem[]>("http://localhost:3000/timelineItems/list")
      .pipe(
        tap(_ => this.log('fetched TimelineItems')),
        catchError(this.handleError<TimelineItem[]>('getHeroes', []))
      );
  }

  getTimelineItem(id: number): Observable<TimelineItem> {
    // TODO: send the message _after_ fetching the heroes
    this.log(`HeroService: fetched hero id=${id}`);
    return of({id:0,name:"test"});
    //return of(TLITEMS.find(item => item.id === id));
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
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