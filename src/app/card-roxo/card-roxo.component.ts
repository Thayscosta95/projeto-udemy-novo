import { Component } from '@angular/core';
import { CardRoxoButtonComponent } from "../card-roxo-button/card-roxo-button.component";
import { CardButtonCancelComponent } from "../card-button-cancel/card-button-cancel.component";

@Component({
  selector: 'app-card-roxo',
  imports: [CardRoxoButtonComponent, CardButtonCancelComponent],
  templateUrl: './card-roxo.component.html',
  styleUrl: './card-roxo.component.css'
})
export class CardRoxoComponent {

  
  plano = {
    infos: {
      tipo: 'Completo',
      preco: 250,

    }
  }
  

}
