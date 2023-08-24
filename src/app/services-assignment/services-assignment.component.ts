import { Component, DoCheck, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { StatusCountService } from '../status-count.service';

@Component({
  selector: 'app-services-assignment',
  templateUrl: './services-assignment.component.html',
  styleUrls: ['./services-assignment.component.css'],
})
export class ServicesAssignmentComponent implements OnInit, DoCheck {
  activeUsers = [];
  inactiveUsers = [];
  statusUpdatesCount: number;
  constructor(
    private usersService: UsersService,
    private statusUpdates: StatusCountService
  ) {}

  ngOnInit(): void {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
    this.statusUpdatesCount = this.statusUpdates.statusUpdateCount;
  }

  ngDoCheck(): void {
    this.statusUpdatesCount = this.statusUpdates.statusUpdateCount;
  }
  onSetToInactive(id: number) {
    this.usersService.activate(id);
  }

  onSetToActive(id: number) {
    this.usersService.inActivate(id);
  }
}
