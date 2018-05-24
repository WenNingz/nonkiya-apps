import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MenuGridPage } from '../menu-grid/menu-grid';
import { MenuDetailsPage } from '../menu-details/menu-details';
import { dataValue } from '../../../src/assets/js/data';

@Component({
  selector: 'page-menu-list',
  templateUrl: 'menu-list.html',
})
export class MenuListPage {
  artists;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.artists = dataValue.artists; 
    console.log(this.artists);
  }
  
  openMenuGrid() { 
    this.navCtrl.setRoot(MenuGridPage);
  }
  openMenuDetails() { 
    this.navCtrl.setRoot(MenuDetailsPage);
  }
}
