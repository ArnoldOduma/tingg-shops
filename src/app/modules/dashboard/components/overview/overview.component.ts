import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { map } from 'rxjs/operators';
import { MouseEvent } from '@agm/core'

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  zoom: number = 12;
  lat: number = -1.255388;
  lng: number = 36.814326;
  markers: any = [];
  compiledMapData: any = [];
  totalValue: any = [];
  errorMessages: any = [];
  totalOrders: any = [];
  totalOrdersLast30: any = [];
  totalValueLast30: any = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getCompiledMapData();
    this.getTotalValue();
    this.getTotalOrders();
    this.getOrdersLast30days();
    this.getTotalValueLast30();
  }

  getCompiledMapData() {
    this.apiService.getCompiledMapData()
      .then(res => {
        this.compiledMapData = res;
        this.markers = this.compiledMapData;
        this.lat = this.markers[0].latitude;
        this.lng = this.markers[0].longitude;
      }).catch(err => {
        this.errorMessages.push(err.statusText)
      })
  }

  getTotalValue() {
    this.apiService.getTotalValue()
      .then(res => {
        this.totalValue = res;
        console.log(res);
      }).catch(err => {
        this.errorMessages.push(err.statusText)
        console.log(err);
      })
  }
  getTotalValueLast30() {
    this.apiService.getTotalValueLast30days()
      .then(res => {
        this.totalValueLast30 = res;
        console.log(res);
      }).catch(err => {
        this.errorMessages.push(err.statusText)
        console.log(err);
      })
  }

  getTotalOrders() {
    this.apiService.getTotalOrders()
      .then(res => {
        this.totalOrders = res;
        console.log(res);
      }).catch(err => {
        this.errorMessages.push(err.statusText)
        console.log(err);
      })
  }
  getOrdersLast30days() {
    this.apiService.getTotalOrdersLast30days()
      .then(res => {
        this.totalOrdersLast30 = res;
        console.log(res);
      })
      .catch(err => {
        this.errorMessages.push(err.statusText)
        console.log(err);
      })
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

}
