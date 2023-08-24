import { Component } from '@angular/core';

@Component({
  selector: 'app-display-odd-even',
  templateUrl: './display-odd-even.component.html',
  styleUrls: ['./display-odd-even.component.css'],
})
export class DisplayOddEvenComponent {
  odd = [1, 3, 5];
  even = [2, 4, 6];
  value = 10;
  onlyOdd = false;
}
