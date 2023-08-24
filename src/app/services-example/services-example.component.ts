import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-services-example',
  templateUrl: './services-example.component.html',
  styleUrls: ['./services-example.component.css'],
  providers: [],
})
export class ServicesExampleComponent implements OnInit {
  accounts = [];
  constructor(private accountsService: AccountsService) {}
  onAccountAdded(newAccount: { name: string; status: string }) {
    this.accounts.push(newAccount);
  }

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }

  onStatusChanged(updateInfo: { id: number; newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
