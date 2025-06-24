import { Component } from '@angular/core';
import { CardButtonComponent } from "../card-button/card-button.component";
import { CardButtonCancelComponent } from '../card-button-cancel/card-button-cancel.component';

@Component({
  selector: 'app-card',
  imports: [CardButtonComponent, CardButtonCancelComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  

  plano = {
    infos: {
      tipo: 'Simples',
      preco: 100,

    }
  }
  
  
}
