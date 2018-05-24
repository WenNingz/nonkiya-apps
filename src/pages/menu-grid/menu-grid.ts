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
  category: string;
  localization: any = localizationData;
  subs: Subscription[] = [];
  currentLang: string = "";

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

  openMenuList(cat) { 
    this.navCtrl.push(MenuListPage, {
      category: cat
    });
  }
  openMenuDetails() { 
    this.navCtrl.setRoot(MenuDetailsPage);
  }

}
