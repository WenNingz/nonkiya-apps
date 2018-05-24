import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MenuGridPage } from '../menu-grid/menu-grid';
import { MenuDetailsPage } from '../menu-details/menu-details';
import { dataValue } from '../../../src/assets/js/data';

import localizationData from '../../assets/data/localization';
import { Subscription } from 'rxjs/Subscription';
import { ServiceProvider }from '../../providers/service/service';
import localization from '../../assets/data/localization';

@Component({
  selector: 'page-menu-list',
  templateUrl: 'menu-list.html',
})
export class MenuListPage {
  category: string;
  localization: any = localizationData;
  menus: string[];
  subs: Subscription[] = [];
  currentLang: string = "";

  artists;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _service : ServiceProvider) {
    console.log(this.currentLang);
    this.artists = dataValue.artists; 
    this.category = navParams.get('category');

    this.subs.push(
      this._service.currentLang$.subscribe(
        res => {
          this.currentLang = res;
        }
      )
    )
  }
  
  ionViewWillLeave(){
    this.subs.forEach(sub => {
      sub.unsubscribe();
    })
  }

  openMenuGrid(cat) { 
    this.navCtrl.push(MenuGridPage, {
      category: cat
    });
  }
  openMenuDetails() { 
    this.navCtrl.setRoot(MenuDetailsPage);
  }
}
