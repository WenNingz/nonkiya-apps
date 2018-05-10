import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RecommendGridPage } from '../recommend-grid/recommend-grid';
import { MenuDetailsPage } from '../menu-details/menu-details';

@Component({
  selector: 'page-recommend-list',
  templateUrl: 'recommend-list.html',
})
export class RecommendListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openMenuGrid() { 
    this.navCtrl.setRoot(RecommendGridPage);
  }
  openMenuDetails() { 
    this.navCtrl.setRoot(MenuDetailsPage);
  }

}
