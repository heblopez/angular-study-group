import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <ul>
      @for (item of optionsMenu; track $index) {
        <li>{{item}}</li>
      }
    </ul>
  `,
  styleUrl: "./navbar.component.css"
})
export class NavbarComponent {
  @Input() optionsMenu!: string[]
  constructor() {
    console.log(this.optionsMenu);
  }
}
