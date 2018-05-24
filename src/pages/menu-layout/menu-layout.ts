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

  constructor(public navCtrl: NavController, public navParams: NavParams, private _service : ServiceProvider) {
    this.category = navParams.get('category');
    console.log(this.currentLang);
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

  openMenuDetails() { 
    this.navCtrl.setRoot(MenuDetailsPage);
  }

}
