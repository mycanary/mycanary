import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, of } from 'rxjs';
import { tap, concatMap, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$: Observable<boolean> = this.loadingSubject.asObservable();
  constructor() { }
  showLoaderUntilCompleted<T>(observable$: Observable<T>): Observable<T> {
    return of(null).pipe(tap(() => this.turnLoadingOn()), concatMap(() => observable$),
      finalize(() => this.turnLoadingOff())
    );
  }
  turnLoadingOn(): void {
    this.loadingSubject.next(true);
  }
  turnLoadingOff(): void {
    this.loadingSubject.next(false);
  }
}