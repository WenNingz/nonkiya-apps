import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MenuLayoutPage } from '../menu-layout/menu-layout';

import localizationData from '../../assets/data/localization';
import { Subscription } from 'rxjs/Subscription';
import { ServiceProvider }from '../../providers/service/service';

@Component({
  selector: 'page-menu-category',
  templateUrl: 'menu-category.html',
})
export class MenuCategoryPage {

  categories: string[];
  localization: any = localizationData;
  subs: Subscription[] = [];
  currentLang: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private _service : ServiceProvider) {
    this.subs.push(
      this._service.currentLang$.subscribe(
        res => {
          this.currentLang = res;
        }
      )
    )
    console.log('CATEGORY LANG:' + this.currentLang);
    this.categories = Object.keys(this.localization);
  }

  ionViewWillLeave(){
    this.subs.forEach(sub => {
      sub.unsubscribe();
    })
  }
  
  openMenuList(cat) {
    this.navCtrl.push(MenuLayoutPage, {
      category: cat
    });
  }

}
