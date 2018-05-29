import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MenuDetailsPage } from '../../pages/menu-details/menu-details';

@Component({
  selector: 'list-view',
  templateUrl: 'list-view.html'
})
export class ListViewComponent {

  @Input('name') name: string;
  @Input('description') description: string;
  @Input('price') price: string;
  @Input('image') image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
