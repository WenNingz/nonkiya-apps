import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MenuCategoryPage } from '../menu-category/menu-category';
import { MenuLayoutPage } from '../menu-layout/menu-layout';

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
    this.navCtrl.push(MenuCategoryPage);
  }

  openRecommendMenu() { 
    this.navCtrl.push(MenuLayoutPage, {
      category: 'Osusume', 
    });
  }

  ionViewWillLeave(){
    this.subs.forEach(sub => {
      sub.unsubscribe();
    })
  }

}
