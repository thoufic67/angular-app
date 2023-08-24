import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatusCountService {
  statusUpdateCount: number = 0;

  constructor() {}

  statusUpdated() {
    this.statusUpdateCount++;
    console.log('Status updated ' + this.statusUpdateCount + ' times.');
  }
}
