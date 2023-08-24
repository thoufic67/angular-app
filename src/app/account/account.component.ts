import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../shared/logging.service';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.accountsService.accountUpdated.emit(status);
    // this.statusChanged.emit({ id: this.id, newStatus: status });
    // this.loggingService.logToConsole(status);
    // console.log('A server status changed, new status: ' + status);
  }
}
