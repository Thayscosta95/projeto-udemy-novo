import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';
import { MatSliderModule } from '@angular/material/slider';


@Component({
  selector: 'app-card-roxo',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    CardRoxoButtonComponent,
    MatSliderModule
  ],
  templateUrl: './card-roxo.component.html',
  styleUrls: ['./card-roxo.component.css']
})
export class CardRoxoComponent {
  plano = {
    infos: {
      tipo: 'Completo',
      preco: 250
    }
  };
}
