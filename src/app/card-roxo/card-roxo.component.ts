import { Component } from '@angular/core';
import { CardRoxoButtonComponent } from "../card-roxo-button/card-roxo-button.component";

@Component({
  selector: 'app-card-roxo',
  imports: [CardRoxoButtonComponent],
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
