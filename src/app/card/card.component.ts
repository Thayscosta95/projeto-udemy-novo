import { Component } from '@angular/core';
import { CardButtonComponent } from "../card-button/card-button.component";

@Component({
  selector: 'app-card',
  imports: [CardButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
