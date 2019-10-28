import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { map } from 'rxjs/operators';
import { marker } from '../../../../shared/models/marker.interface';
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
  errorMessage = '';
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
    this.apiService.getCompiledMapData().subscribe(
      (res) => {
        this.compiledMapData = res;
        // console.log(res);
        this.markers = this.compiledMapData;

        this.lat = this.markers[0].latitude;
        this.lng = this.markers[0].longitude;
        console.log(this.markers);
      },
      (err) => {
        this.errorMessage = err.message
        console.log(err);
      }
    )
  }

  getTotalValue() {
    this.apiService.getTotalValue().subscribe(
      (res) => {
        this.totalValue = res;
        console.log(res);
      },
      (err) => {
        this.errorMessage = err.message
        console.log(err);
      }
    )
  }
  getTotalValueLast30() {
    this.apiService.getTotalValueLast30days().subscribe(
      (res) => {
        this.totalValueLast30 = res;
        console.log(res);
      },
      (err) => {
        this.errorMessage = err.message
        console.log(err);
      }
    )
  }

  getTotalOrders() {
    this.apiService.getTotalOrders().subscribe(
      (res) => {
        this.totalOrders = res;
        console.log(res);
      },
      (err) => {
        this.errorMessage = err.message
        console.log(err);
      }
    )
  }
  getOrdersLast30days(){
    this.apiService.getTotalOrdersLast30days().subscribe(
      (res) => {
        this.totalOrdersLast30 = res;
        console.log(res);
      },
      (err) => {
        this.errorMessage = err.message
        console.log(err);
      }
    )
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

}
