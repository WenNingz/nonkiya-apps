import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MenuCategoryPage } from '../pages/menu-category/menu-category';
import { MenuListPage } from '../pages/menu-list/menu-list';
import { RecommendListPage } from '../pages/recommend-list/recommend-list';

export interface PageInterface {
  title: string;
  component: any;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;
  
  appPages: PageInterface[] = [
    { title: 'Recommend', component: RecommendListPage, icon: '' },
    { title: 'Menu',  component: MenuCategoryPage, icon: '' },
  ];

  menuPages: PageInterface[] = [
    { title: 'Menu Category',component: MenuListPage, icon: 'person' },
    { title: 'Menu Category',component: MenuListPage, icon: 'help' },
    { title: 'Menu Category', component: MenuListPage, icon: 'log-out' }
  ];

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
   ) {
    this.initializeApp();
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
    this.nav.setRoot(page.component);
  }
}

