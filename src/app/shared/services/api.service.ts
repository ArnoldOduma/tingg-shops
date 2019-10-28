import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { CompiledMapData } from '../models/compiled-map-data.model';
import { resolve, reject } from 'q';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL = environment.BASE_API;
  compiledMapData = `${this.BASE_URL}/dataCompiledMapData.php`;

  totalValue = `${this.BASE_URL}/dataTotalValue.php`;
  totalOrders = `${this.BASE_URL}/dataTotalOrders.php`;
  totalValueLast30days = `${this.BASE_URL}/dataTotalValueLast30Days.php`;
  totalOrdersLast30days = `${this.BASE_URL}/dataTotalOrdersLast30Days.php`;


  constructor(
    // private http: HttpClient,
    private http: HttpClient
  ) { }


  getCompiledMapData() {
    const url = this.compiledMapData;
    return this.http.get(url).pipe(
      retry(1)

    )
  }
  getTotalValue(){
    const url = this.totalValue;
    return this.http.get(url).pipe(
      retry(1)
    )
  }
  getTotalValueLast30days(){
    const url = this.totalValueLast30days;
    return this.http.get(url).pipe(
      retry(1)
    )
  }
  getTotalOrders(){
    const url = this.totalOrders;
    return this.http.get(url).pipe(
      retry(1)
    )
  }
  getTotalOrdersLast30days(){
    const url = this.totalOrdersLast30days;
    return this.http.get(url).pipe(
      retry(1)
    )
  }

}
