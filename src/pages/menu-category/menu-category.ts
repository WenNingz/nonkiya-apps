import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MenuListPage } from '../menu-list/menu-list';
import { MenuGridPage } from '../menu-grid/menu-grid';

@Component({
  selector: 'page-menu-category',
  templateUrl: 'menu-category.html',
})
export class MenuCategoryPage {

  categories: string[] = data;
  localization: any = localizationData;
  subs: Subscription[] = [];
  currentLang: string = "";
  cardHeight: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _service : ServiceProvider) {
    console.log(this.localization);
    this.subs.push(
      this._service.currentLang$.subscribe(
        res => {
          this.currentLang = res;
        }
      )
    )
  }

  openMenuList() { 
    this.navCtrl.setRoot(MenuListPage);
  }

}
