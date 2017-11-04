import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {ListaradministradorPage} from '../pages/listaradministrador/listaradministrador';
import {CrearadministradorPage} from '../pages/crearadministrador/crearadministrador';
import {AdministradorProvider} from '../providers/administrador/administrador';
import {ModificaradministradorPage} from '../pages/modificaradministrador/modificaradministrador';
import {LoginProvider} from '../providers/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ListaradministradorPage,
    CrearadministradorPage,
    ModificaradministradorPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ListaradministradorPage,
    CrearadministradorPage,
    ModificaradministradorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AdministradorProvider,
    LoginProvider
  ]
})
export class AppModule {
}
