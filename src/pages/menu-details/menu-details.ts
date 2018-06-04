import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import localizationData from '../../assets/data/localization';
import { Subscription } from 'rxjs/Subscription';
import { ServiceProvider }from '../../providers/service/service';

@Component({
  selector: 'page-menu-details',
  templateUrl: 'menu-details.html',
})
export class MenuDetailsPage {
  localization: any = localizationData;
  subs: Subscription[] = [];
  currentLang: string = "";
  item;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _service : ServiceProvider) {
    this.subs.push(
      this._service.currentLang$.subscribe(
        res => {
          this.currentLang = res;
        }
      )
    )
    console.log('DETAIL LANG:' + this.currentLang);
    this.item = navParams.get('item');

  }

  ionViewWillLeave(){
    this.subs.forEach(sub => {
      sub.unsubscribe();
    })
  }
}
