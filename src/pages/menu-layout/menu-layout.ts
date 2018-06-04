import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  menus: any[] = [];
S
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
    if(this.category === 'osusume') {
      Object.keys(this.localization).forEach(cat => {
        this.localization[cat].menus.forEach(menu => {
          if(menu.recommend) {
            this.menus.push(menu)
          }
        });
      });
    } else {
      this.menus = this.localization[this.category].menus;
    }
  }

  ionViewWillLeave(){
    this.subs.forEach(sub => {
      sub.unsubscribe();
    })
  }
}
