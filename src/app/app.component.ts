import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [
    `
      h3 {
        color: lightblue;
      }
    `,
  ],
})
export class AppComponent {
  activeTab: string = 'shopping-list';
  onTabChange(tabName: string) {
    console.log('onTabChange', tabName);
    this.activeTab = tabName;
  }
}
