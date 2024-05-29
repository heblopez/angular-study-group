import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <ul>
      @for (item of optionsMenu; track $index) {
        <li><a [href]="item.linkTo">{{item.option}}</a></li>
      }
    </ul>
  `,
  styleUrl: "./navbar.component.css"
})
export class NavbarComponent {
  @Input() optionsMenu!: {option: string, linkTo: string}[]
}
