import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MenuListPage } from '../menu-list/menu-list';
import { MenuGridPage } from '../menu-grid/menu-grid';

@Component({
  selector: 'page-menu-category',
  templateUrl: 'menu-category.html',
})
export class MenuCategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openMenuList() { 
    this.navCtrl.setRoot(MenuListPage);
  }
}
