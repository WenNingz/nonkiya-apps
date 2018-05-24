import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MenuCategoryPage } from '../pages/menu-category/menu-category';
import { MenuLayoutPage } from '../pages/menu-layout/menu-layout'; 
import { RecommendListPage } from '../pages/recommend-list/recommend-list';

export interface PageInterface {
  title: string;
  component: any;
  icon: string;
  image: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;
  activePage: any;
  
  appPages: PageInterface[] = [
    { title: 'Home', component: HomePage, icon: '' , image: 'link.jpg'},
    { title: 'Recommend', component: RecommendListPage, icon: '' , image: 'link.jpg'},
    { title: 'Menu', component: MenuCategoryPage, icon: '' , image: 'link.jpg'},
  ];

  menuPages: PageInterface[] = [
    { title: 'Menu Category', component: MenuLayoutPage, icon: '', image: '../assets/imgs/cat01.png' },
    { title: 'Menu Category', component: MenuLayoutPage, icon: '', image: '../assets/imgs/cat02.png'},
    { title: 'Menu Category', component: MenuLayoutPage, icon: '', image: '../assets/imgs/cat03.png'}
  ];

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
   ) {
    this.initializeApp();
    this.activePage = this.activePage;
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
    this.activePage = page;
  }

  checkActive(page){
    return page == this.activePage;
  }
}

