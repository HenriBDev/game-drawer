import { Component } from '@angular/core';

import { NavbarComponent } from "@ui/adapter/input/app/components/core/navbar/navbar.component";

@Component({
  selector: '[app-header]',
  imports: [NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
