import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RecommendListPage } from '../recommend-list/recommend-list';
import { MenuDetailsPage } from '../menu-details/menu-details';

@Component({
  selector: 'page-recommend-grid',
  templateUrl: 'recommend-grid.html',
})
export class RecommendGridPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openMenuList() { 
    this.navCtrl.setRoot(RecommendListPage);
  }
  openMenuDetails() { 
    this.navCtrl.setRoot(MenuDetailsPage);
  }

}
