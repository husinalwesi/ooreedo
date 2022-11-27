import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  lang: any = ''+this.setLang();
  dir: any = ''+this.setDir();
  constructor() { }
  setLang() {
    if(sessionStorage.getItem("lang") !== null) {
      return sessionStorage.getItem("lang");
    } else {
      return 'en';
    }
  }
  setDir() {
    if(sessionStorage.getItem("lang") !== null) {
      if(sessionStorage.getItem("lang") == 'ar') {
        return 'rtl';
      } else {
        return 'ltr';
      }
    } else {
      return 'ltr';
    }
  }
  getLang() {
    return this.lang;
  }
  isEn(): any {
    if(this.lang === 'en') {
      return true;
    }
  }
  isAr(): any {
    if(this.lang === 'ar') {
      return true;
    }
  }
  apiLang() {
    if(this.lang === 'en') {
      return 'english';
    } else {
      return 'arabic';
    }
  }
}
