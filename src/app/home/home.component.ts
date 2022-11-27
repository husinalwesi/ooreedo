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



    // WARNING: For GET requests, body is set to null by browsers.

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("GET", "https://shopqa.ooredoo.com.kw/ooredooapi/api/planslist");
    xhr.setRequestHeader("Authorization", "" + sessionStorage.getItem("authorization"));
    // WARNING: Cookies will be stripped away by the browser before sending the request.
    // xhr.setRequestHeader("Cookie", "PHPSESSID=p9u9lgii7kghu6thvhr94nk5mh; X-Magento-Vary=390b04208302491908e37d8d6481f4fdc708c282; mage-messages=%5B%7B%22type%22%3A%22error%22%2C%22text%22%3A%22Invalid%20Form%20Key.%20Please%20refresh%20the%20page.%22%7D%5D; private_content_version=7dbe5c3d7df31002dcf7d82140180d41");

    xhr.send();



    // setTimeout(async () => {
    //   //let params = new HttpParams().set("plan_type",this._DataService.planType).set("lang", this._TranslationService.apiLang());
    //   let planlist: any = await this._DataService.getPlanslist(this._TranslationService.apiLang());
    //   // console.log(planlist.data)
    //   this.planslist = planlist.data;
    //   this.planslistCount = this.planslist['product_data'].product_count;
    //   this.products = this.planslist['product_data'].products;
    //   this.cdk.detectChanges();
    // }, 1000)
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
