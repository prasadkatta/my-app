
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
  data: any = [
    { "MenuID": 1, "MenuName": "Home", "MenuURL": "/Memo Mainatainence" },
    { "MenuID": 2, "MenuName": "Shop", "MenuURL": "/Accrual_Estimation" },
    { "MenuID": 3, "MenuName": "Promotion", "MenuURL": "/Credit_Note_Generation" },
    { "MenuID": 4, "MenuName": "Pages", "MenuURL": "/Pages" },
    { "MenuID": 5, "MenuName": "Blog", "MenuURL": "/Blog" },
    { "MenuID": 6, "MenuName": "Contact", "MenuURL": "/Contact" }]
  public loading = false;
  constructor(public dataservice: DataService) {
    this.getProducts();
  }
  ngOnInit() {

  }

  getProducts() {
    this.loading = true;
    this.dataservice.getProducts()
      .subscribe(
        (data) => this.data = data,

        (error) => {
          return console.log(error);
        }
      );
    this.loading = false;

  }

}
