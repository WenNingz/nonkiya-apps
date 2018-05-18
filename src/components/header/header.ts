import { Component } from '@angular/core';
import { ServiceProvider } from '../../providers/service/service'

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  constructor(public service: ServiceProvider) {
    this.service.updateLang("EN");
  }

  updateLang(val: string){
    this.service.updateLang(val);
  }
}
