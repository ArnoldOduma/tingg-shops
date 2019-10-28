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
    private http: HttpClient
  ) { }


  getCompiledMapData() {
    const url = this.compiledMapData;
    return new Promise<any>((resolve, reject) => {
      this.http.get(url).pipe(
        retry(1)
      ).toPromise().then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    });
  }
  getTotalValue() {
    const url = this.totalValue;
    return new Promise<any>((resolve, reject) => {
      this.http.get(url).pipe(
        retry(1)
      ).toPromise().then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    });
  }
  getTotalValueLast30days() {
    const url = this.totalValueLast30days;
    return new Promise<any>((resolve, reject) => {
      this.http.get(url).pipe(
        retry(1)
      ).toPromise().then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    });
  }
  getTotalOrders() {
    const url = this.totalOrders;
    return new Promise<any>((resolve, reject) => {
      this.http.get(url).pipe(
        retry(1)
      ).toPromise().then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    });
  }
  getTotalOrdersLast30days() {
    const url = this.totalOrdersLast30days;
    return new Promise<any>((resolve, reject) => {
      this.http.get(url).pipe(
        retry(1)
      ).toPromise().then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    });
  }

}
