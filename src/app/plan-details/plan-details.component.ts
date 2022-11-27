import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';

interface dataProduct {
  ooredoo_minutes: string;
  local_minutes: string;
  internet_data: string;
  social_media_minutes: string;
  price: string;
  product_id: string;
  line_type: string;
}
@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.scss']
})

export class PlanDetailsComponent implements OnInit, OnChanges {
  @Input() initialWidth: any;
  @Input() cardId: any;
  @Input() products: any;
  @Output() initialWidthP = new EventEmitter<number>();
  selectedProduct: any;
  dataProduct:dataProduct =  {
    ooredoo_minutes: '',
    local_minutes: '',
    internet_data: '',
    social_media_minutes: '',
    price: '',
    product_id: '',
    line_type: ''
  }

  constructor(private _DataService:DataService) { }

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    try {
      this.getProductsById(this.cardId);
      this.dataProduct.ooredoo_minutes = this.selectedProduct.ooredoo_minutes;
      this.dataProduct.local_minutes = this.selectedProduct.local_minutes;
      this.dataProduct.internet_data = this.selectedProduct.internet_data;
      this.dataProduct.social_media_minutes = this.selectedProduct.social_media_minutes;
      this.dataProduct.price = this.selectedProduct.price;
      this.dataProduct.product_id = this.selectedProduct.product_id;
      this.dataProduct.line_type = this.selectedProduct.line_type;
    } catch (error) {

    }
  }

  resetWidth(){
    this.initialWidthP.emit(0);
  }

  getProductsById(id:string) {
    for (let i = 0; i < this.products.length; i++) {
      if(this.products[i]["product_id"] === id){
        this.selectedProduct = this.products[i];
      }
    }
  }

  selectPlan(id: any, lineType: any) {
    this._DataService.selectedPlan = id;
    this._DataService.selectedLineType = lineType;
  }

}
