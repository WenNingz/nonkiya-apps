import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MenuCategoryPage } from '../pages/menu-category/menu-category';
import { MenuLayoutPage } from '../pages/menu-layout/menu-layout'; 

import data from '../assets/data/categoryCode';
import localizationData from '../assets/data/localization';
import { Subscription } from 'rxjs/Subscription';
import { ServiceProvider }from '../providers/service/service';

export interface PageInterface {
  enTitle: string;
  jpTitle: string;
  component: any;
  category: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  categories: string[] = data;
  localization: any = localizationData;
  subs: Subscription[] = [];
  currentLang: string = "";


  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;
  activePage: any;
  
  appPages: PageInterface[] = [
    { enTitle: 'Home', jpTitle: 'ホーム', component: HomePage, category: '' },
    { enTitle: 'Recommend', jpTitle: 'おすすめ', component: MenuLayoutPage, category: 'Osusume' },
    { enTitle: 'Menu', jpTitle: 'メニュー', component: MenuCategoryPage, category: '' },
  ];

  constructor(
    public platform: Platform,
    public menu: MenuController,  
    public statusBar: StatusBar,
    public splashScreen: SplashScreen, 
    private _service : ServiceProvider
   ) {
    this.initializeApp();
    this.activePage = this.activePage;

    this.subs.push(
      this._service.currentLang$.subscribe(
        res => {
          this.currentLang = res;
        }
      )
    )
  }

    initializeApp() {
      this.platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }

  openPage(page: PageInterface) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.push(page.component, {
      category: page.category
    });
    this.activePage = page;
  }

  openMenuList(cat) {
    this.nav.push(MenuLayoutPage, {
      category: cat
    });
  }

  checkActive(page){
    return page == this.activePage;
  }

  ionViewWillLeave(){
    this.subs.forEach(sub => {
      sub.unsubscribe();
    })
  }
}

