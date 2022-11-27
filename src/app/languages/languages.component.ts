import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  selectedlang: string = '';
  supportLanguages = ['en', 'ar'];
  constructor(private _TranslateService:TranslateService,
    private _TranslationService:TranslationService) {
      this.selectedlang =  this._TranslationService.getLang();
      this._TranslateService.addLangs(this.supportLanguages);
      this._TranslateService.setDefaultLang(this.selectedlang);
      this._TranslateService.use(this._TranslationService.lang);

    //const browserlang:any = this._TranslateService.getBrowserLang();
    //this._TranslateService.use(browserlang);
    }

  ngOnInit(): void {
  }

  selectedLanguage() {
    let lang = this.selectedlang;
    if(lang === 'en') {
      lang = 'ar';
      sessionStorage.setItem("lang", lang);
      window.location.href = '/home';
    } else {
      lang = 'en';
      sessionStorage.setItem("lang", lang);
      window.location.href = '/home';
    }

  }

}
