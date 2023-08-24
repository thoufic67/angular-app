import { Component } from '@angular/core';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  constructor(private accountsService: AccountsService) {
    this.accountsService.accountUpdated.subscribe((status: string) => {
      alert('Status updated ' + status);
    });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logToConsole(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
