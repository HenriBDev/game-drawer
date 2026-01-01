import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/core/header/header.component';
import { MainComponent } from "./components/core/main/main.component";

@Component({
  selector: '[app-root]',
  imports: [RouterOutlet, HeaderComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'game-drawer';

  ngOnInit(): void {
    console.log("hey");
  }
}
