import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MenuDetailsPage } from '../menu-details/menu-details';
import localizationData from '../../assets/data/localization';
import { Subscription } from 'rxjs/Subscription';
import { ServiceProvider }from '../../providers/service/service';

@Component({
  selector: 'page-menu-layout',
  templateUrl: 'menu-layout.html',
})
export class MenuLayoutPage {
  category: string;
  localization: any = localizationData;
  subs: Subscription[] = [];
  currentLang: string = "";
  viewStyle: string = "list-style";
  isRecommend: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _service : ServiceProvider) {
    this.subs.push(
      this._service.currentLang$.subscribe(
        res => {
          this.currentLang = res;
        }
      )
    )
    console.log('LAYOUT LANG:' + this.currentLang);
    this.category = navParams.get('category');
  }

  ionViewWillLeave(){
    this.subs.forEach(sub => {
      sub.unsubscribe();
    })
  }

  openMenuDetails(menu) { 
    this.navCtrl.push(MenuDetailsPage, {
      category: this.category,
      item: menu
    });
  }

}
