import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output('onChange') activeTabChange = new EventEmitter<string>();

  onSelect(tab: string) {
    this.activeTabChange.emit(tab);
  }
}
