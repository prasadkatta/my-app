
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './data.service';
import { error } from 'util';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  data: any = [];
  constructor(public dataservice: DataService) {
    this.getProducts();
  }
  ngOnInit() {
   
  }

  getProducts() {
    this.dataservice.getProducts()
      .subscribe(
        (data) => this.data=data,
        (error) => {
          return console.log(error);
        }
      );
   

  }

}
