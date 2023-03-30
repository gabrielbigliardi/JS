import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],

})
export class PickupCallCardComponent  implements OnInit {

  @Input() hasHeader?: boolean ;
  @Input() hasFooter?: boolean ;

  @Input() status?: string;
  @Input() updatedAt?: string;
  @Input() createdAt?: string;
  @Input() notes?: string;
  @Input() value?: string;

  constructor() { }

  ngOnInit() {}

}
