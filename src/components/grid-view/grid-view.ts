import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MenuDetailsPage } from '../../pages/menu-details/menu-details';

@Component({
  selector: 'grid-view',
  templateUrl: 'grid-view.html'
})
export class GridViewComponent {

  @Input('name') name: string;
  @Input('price') price: string;
  @Input('image') image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  openMenuDetails() { 
    this.navCtrl.setRoot(MenuDetailsPage);
    
  }

}
