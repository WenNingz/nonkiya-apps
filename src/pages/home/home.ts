import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MenuCategoryPage } from '../menu-category/menu-category';
import { RecommendListPage } from '../recommend-list/recommend-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
    
  }

  openMenuCategory() { 
    this.navCtrl.setRoot(MenuCategoryPage);
  }

  openRecommendMenu() { 
    this.navCtrl.setRoot(RecommendListPage);
  }


}
