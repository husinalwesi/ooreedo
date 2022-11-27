import { HttpParams } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { TranslationService } from '../translation.service';
@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit, OnDestroy {
  planDetailsSubscribtion = new Subscription();
  planDetails:any;
  checked: number = 0;
  planTypeSummary: any;
  prepaidSummaryOpen: boolean= false;
  showError: boolean= false;
  constructor(private _DataService:DataService, private _TranslationService:TranslationService) { }

  ngOnInit(): void {
    this.planTypeSummary = this._DataService.selectedLineType;
    let params = new HttpParams().set("plan_id",this._DataService.selectedPlan).set("lang", this._TranslationService.apiLang());
    this.planDetailsSubscribtion = this._DataService.getPlandetail(params).subscribe((response)=> {
      this.planDetails = response.data;
    },
    (error) => {
      console.log(error)
    });
  }

  prepaidSummary() {
    this.prepaidSummaryOpen = !this.prepaidSummaryOpen;
  }

  ngOnDestroy(): void {
    this.planDetailsSubscribtion.unsubscribe();
  }

  changeChecked(val: number) {
    this.checked = val;
  }

  confirm() {
    if(this.checked == 0) {
      this.showError = true;
    } else if(this.checked == 1) {
      this.showError = false;
    }
  }


}
