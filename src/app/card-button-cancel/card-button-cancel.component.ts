import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-button-cancel',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './card-button-cancel.component.html',
  styleUrls: ['./card-button-cancel.component.css']
})
export class CardButtonCancelComponent {}