import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MenuGridPage } from '../menu-grid/menu-grid';
import { MenuDetailsPage } from '../menu-details/menu-details';

@Component({
  selector: 'page-menu-list',
  templateUrl: 'menu-list.html',
})
export class MenuListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  openMenuGrid() { 
    this.navCtrl.setRoot(MenuGridPage);
  }
  openMenuDetails() { 
    this.navCtrl.setRoot(MenuDetailsPage);
  }
}
