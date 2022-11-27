import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Output("slideleft") slideleft: EventEmitter<any> = new EventEmitter();
  @Output() cardIdchanged = new EventEmitter<number>();
  @Input() product: any;
  cardId: any;
  dir: any;
  constructor(private _DataService:DataService, private _TranslationService:TranslationService) {
    this.dir = this._TranslationService.dir;
  }

  ngOnInit(): void {
    this.cardId = this.product.product_id;
  }

  slideleftchild(){
    this.cardIdchanged.emit(this.cardId);
    this.slideleft.emit();
  }

  selectPlan(id: any, lineType: any) {
    this._DataService.selectedPlan = id;
    this._DataService.selectedLineType = lineType;
  }

}
