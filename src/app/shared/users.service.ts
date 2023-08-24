import { Injectable } from '@angular/core';
import { StatusCountService } from '../status-count.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  constructor(private statusCount: StatusCountService) {}

  inActivate(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.statusCount.statusUpdated();
  }

  activate(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.statusCount.statusUpdated();
  }
}
