import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuCategoryPage } from '../pages/menu-category/menu-category';
import { MenuLayoutPage } from '../pages/menu-layout/menu-layout';
import { MenuDetailsPage } from '../pages/menu-details/menu-details';
import { RecommendListPage } from '../pages/recommend-list/recommend-list';
import { RecommendGridPage } from '../pages/recommend-grid/recommend-grid';

import { HeaderComponent } from '../components/header/header';
import { ServiceProvider } from '../providers/service/service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuCategoryPage,
    MenuLayoutPage, 
    MenuDetailsPage, 
    RecommendListPage, 
    RecommendGridPage, 
    HeaderComponent, 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuCategoryPage, 
    MenuLayoutPage, 
    MenuDetailsPage, 
    RecommendListPage, 
    RecommendGridPage,  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider
  ]
})
export class AppModule {}
