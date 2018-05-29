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
  category: string;
  localization: any = localizationData;
  subs: Subscription[] = [];
  currentLang: string = "";
  displayData: any[];
  item;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _service : ServiceProvider) {
    this.subs.push(
      this._service.currentLang$.subscribe(
        res => {
          this.currentLang = res;
        }
      )
    )
    // console.log('LAYOUT LANG:' + this.currentLang);
    this.category = navParams.get('category');
    this.item = navParams.get('item');
    // this.displayData= this.localization[this.category][this.currentLang];
    console.log('WHATEV');
    console.log(this.item);
  }

  ionViewWillLeave(){
    this.subs.forEach(sub => {
      sub.unsubscribe();
    })
  }
}
