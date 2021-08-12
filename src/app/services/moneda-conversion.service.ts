import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Convertidor} from '../models/Convertidor';
@Injectable({
  providedIn: 'root'
})
export class MonedaConversionService {

  constructor(private http:HttpClient) { }

  getLatest(){
  	return this.http.get('http://api.exchangeratesapi.io/v1/latest?access_key=7664d949e0c60d0305745346a1a988a9&format=1');
  }
  getConvertir(convertidor:Convertidor){
  // 	https://api.exchangeratesapi.io/2013-03-10?access_key=7664d949e0c60d0305745346a1a988a9&base=EUR&symbols=MXN
  
  	return this.http.get("http://api.exchangeratesapi.io/"+convertidor.fecha+"?access_key=7664d949e0c60d0305745346a1a988a9&&base=EUR&symbols="+convertidor.symbol);
  }
}
