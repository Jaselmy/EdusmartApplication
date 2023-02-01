import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ResService {

  constructor(private http : HttpClient) { }

  getResJson(){
    return this.http.get<any>("assets/res.json")
  }
}
