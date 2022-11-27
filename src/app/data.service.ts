import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  //planType = "Postpaid";
  planType = "";
  selectedPlan = "";
  selectedLineType = "";

  constructor(private _HttpClient:HttpClient) { }

  postCredentials() {
    return this._HttpClient.post<any>(`${environment.baseUrl}/ooredooapi/api/apicredentials`,{}).toPromise();
  }

  async getData() {
    let info:any = await this.postCredentials();
    let authorization = `Basic ${btoa(`${info.data.username}:${info.data.password}`)}`;
    sessionStorage.setItem("authorization", authorization);
  }


  async getPlanslist(lang: any) {
      return this._HttpClient.get<any>(`${environment.baseUrl}/ooredooapi/api/planslist`, {}).toPromise();

      // return this._HttpClient.get(`${environment.baseUrl}/ooredooapi/api/planslist`, {params: {
      //   lang: lang,
      //   plan_type: this.planType
      // }}).toPromise();

  }

  getPlandetail(params: any): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/ooredooapi/api/plandetail`, {params: params})
  }

}
