import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CardButtonComponent } from "../card-button/card-button.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    CardButtonComponent,
    
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent {
  plano = {
    infos: {
      tipo: 'Simples',
      preco: 100,
    }
  };
}