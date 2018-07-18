import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { AccessPage } from '../pages/access/access';
import { TabsPage } from '../pages/tabs/tabs';
import { AccueilPage } from '../pages/accueil/accueil';
import { PasswordPage } from '../pages/password/password';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { PlayPage } from '../pages/play/play';
import { SetPage } from '../pages/set/set';
import { SettingsPage } from '../pages/settings/settings';
import { InvitePage } from '../pages/invite/invite';
import { SandboxPage } from '../pages/sandbox/sandbox';
import { GamePage } from '../pages/game/game';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { GameDataProvider } from '../providers/game-data/game-data';

@NgModule({
  declarations: [
    MyApp,
    AccessPage,
    TabsPage,
    AccueilPage,
    PasswordPage,
    SignupPage,
    HomePage,
    PlayPage,
    SetPage,
    SettingsPage,
    InvitePage,
    SandboxPage,
    GamePage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccessPage,
    TabsPage,
    AccueilPage,
    PasswordPage,
    SignupPage,
    HomePage,
    PlayPage,
    SetPage,
    SettingsPage,
    InvitePage,
    SandboxPage,
    GamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    GameDataProvider
  ]
})
export class AppModule {}
