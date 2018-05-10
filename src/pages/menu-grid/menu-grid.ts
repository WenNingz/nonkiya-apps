import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MenuListPage } from '../menu-list/menu-list';
import { MenuDetailsPage } from '../menu-details/menu-details';

@Component({
  selector: 'page-menu-grid',
  templateUrl: 'menu-grid.html',
})
export class MenuGridPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openMenuList() { 
    this.navCtrl.setRoot(MenuListPage);
  }
  openMenuDetails() { 
    this.navCtrl.setRoot(MenuDetailsPage);
  }

}
