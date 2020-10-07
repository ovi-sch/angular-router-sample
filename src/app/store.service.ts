import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private readonly totalClicks = new BehaviorSubject<number>(0);
  readonly totalClicks$ = this.totalClicks.asObservable();

  add() {
    this.totalClicks.next(this.totalClicks.getValue() + 1);
  }

  constructor() {}
}
