import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  currentLang = new BehaviorSubject<string>('EN');

  currentLang$ = this.currentLang.asObservable();

  updateLang(lang: string){
    this.currentLang.next(lang);
    console.log(lang);
  }
}
