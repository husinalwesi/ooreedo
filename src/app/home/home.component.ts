import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TranslationService } from '../translation.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  cardListSubscribtion = new Subscription();
  planslist: any;
  planslistCount: any;
  products: any;
  initialWidth: any = 0;
  cardId: any = 1;

  constructor(private _DataService: DataService, private _TranslationService: TranslationService, private cdk: ChangeDetectorRef,) { }

  ngOnInit(): void {
    this.callPlanlist();

  }

  ngOnDestroy(): void {
    //this.cardListSubscribtion.unsubscribe();
  }
  async callPlanlist() {
    await this._DataService.getData();
    setTimeout(async () => {
      //let params = new HttpParams().set("plan_type",this._DataService.planType).set("lang", this._TranslationService.apiLang());
      let planlist: any = await this._DataService.getPlanslist(this._TranslationService.apiLang());
      // console.log(planlist.data)
      this.planslist = planlist.data;
      this.planslistCount = this.planslist['product_data'].product_count;
      this.products = this.planslist['product_data'].products;
      this.cdk.detectChanges();
    }, 1000)
  }

  customOptions: OwlOptions = {
    loop: true,
    margin: 25,
    autoplay: true,
    stagePadding: 40,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: true,
    rtl: this._TranslationService.isEn() ? false : true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  slideleft() {
    this.initialWidth = 80;
  }
}
