import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css'],
})
export class DisplayDetailsComponent {
  details = 'Secret Password = tuna';
  showDetails = false;
  detailsRevealLogs = [];

  onToggleDetails = () => {
    this.showDetails = !this.showDetails;
    this.detailsRevealLogs.push(Date.now());
  };
}
