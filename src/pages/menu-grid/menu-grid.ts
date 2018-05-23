import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MenuListPage } from '../menu-list/menu-list';
import { MenuDetailsPage } from '../menu-details/menu-details';
import localizationData from '../../assets/data/localization';
import { Subscription } from 'rxjs/Subscription';
import { ServiceProvider }from '../../providers/service/service';

@Component({
  selector: 'page-menu-grid',
  templateUrl: 'menu-grid.html',
})
export class MenuGridPage {
  category: string
  localization: any = localizationData;
  subs: Subscription[] = [];
  currentLang: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.category = navParams.get('category');
    console.log('HEHREE');
    console.log(this.category);
  }

  openMenuList() { 
    this.navCtrl.setRoot(MenuListPage);
  }
  openMenuDetails() { 
    this.navCtrl.setRoot(MenuDetailsPage);
  }

}
