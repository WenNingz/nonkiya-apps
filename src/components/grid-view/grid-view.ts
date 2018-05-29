import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MenuDetailsPage } from '../../pages/menu-details/menu-details';

@Component({
  selector: 'grid-view',
  templateUrl: 'grid-view.html'
})
export class GridViewComponent {

  @Input('menu') menu: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  openMenuDetails(menu) { 
    this.navCtrl.push(MenuDetailsPage, {
      item: menu
    });
  }

}
