import { Component, Inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './data.service';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from './translation.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ooredoo';
  constructor(@Inject(DOCUMENT) private document: Document,
  private _DataService:DataService,
  private _TranslateService:TranslateService,
  private _TranslationService: TranslationService) {
    this.document.documentElement.lang = this._TranslationService.lang;
    this.document.documentElement.dir = this._TranslationService.dir;
  }

  ngOnInit(): void {
    //this.getData();
  }

  // async getData() {
  //   let info:any = await this._DataService.postCredentials();
  //   let authorization = `Basic ${btoa(`${info.data.username}:${info.data.password}`)}`;
  //   sessionStorage.setItem("authorization", authorization);
  // }

}
