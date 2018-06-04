import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MenuDetailsPage } from '../../pages/menu-details/menu-details';

@Component({
  selector: 'list-view',
  templateUrl: 'list-view.html'
})
export class ListViewComponent {

  @Input('menu') menu: any;
  @Input('lang') lang: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  openMenuDetails(menu) { 
    this.navCtrl.push(MenuDetailsPage, {
      item: menu
    });
  }

}
