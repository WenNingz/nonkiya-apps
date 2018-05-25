import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MenuCategoryPage } from '../menu-category/menu-category';
import { RecommendListPage } from '../recommend-list/recommend-list';

import { Subscription } from 'rxjs/Subscription';
import { ServiceProvider }from '../../providers/service/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  subs: Subscription[] = [];
  currentLang: string = "";

  constructor(public navCtrl: NavController, private _service : ServiceProvider) {
    this.subs.push(
      this._service.currentLang$.subscribe(
        res => {
          this.currentLang = res;
        }
      )
    )
    console.log('HOME LANG:' + this.currentLang);
  }
  openMenuCategory() { 
    this.navCtrl.setRoot(MenuCategoryPage);
  }

  openRecommendMenu() { 
    this.navCtrl.setRoot(RecommendListPage);
  }

  ionViewWillLeave(){
    this.subs.forEach(sub => {
      sub.unsubscribe();
    })
  }

}
