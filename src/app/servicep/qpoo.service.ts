import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QpooService {

  constructor(private http : HttpClient) { }

  getQpooJson(){
    return this.http.get<any>("assets/qpoo.json")
  }
}
