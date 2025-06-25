import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { CardRoxoComponent } from './card-roxo/card-roxo.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardComponent,
    CardRoxoComponent, 
    MatIconModule,
    MatSliderModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-udemy';
}
