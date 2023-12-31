import { Inject, Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient : HttpClient, @Inject("baseUrl") private baseUrl : string) { }

  private url(requestParameter : Partial<RequestParameters>): string{
  return `${requestParameter.baseUrl ? requestParameter.baseUrl : this.baseUrl} /${requestParameter.controller}${requestParameter.action ? `/${requestParameter.action}` : ""}`
  }

    get<T>(requestParameter : Partial<RequestParameters>, id? : string): Observable<T>{
     let url : string = "";

     if(requestParameter.fullEndpoint){
      url = requestParameter.fullEndpoint;
     }
     else{
      url = `${this.url(requestParameter)}${id ? `/${id}` : ""}`
     }

     url = `${this.url(requestParameter)}`;

     return this.httpClient.get<T>(url, {headers: requestParameter.headers})
    }

    post(){

    }

    put(){

    }

    delete(){

    }
  
}

export class RequestParameters{
controller?: string;
action?:string;
headers?: HttpHeaders;
baseUrl?: string;
fullEndpoint?:string;
}
