import { DoCheck, EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  constructor(private loggingService: LoggingService) {}

  accountUpdated: EventEmitter<string> = new EventEmitter<string>();

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    this.loggingService.logToConsole(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logToConsole(status);
  }
}
