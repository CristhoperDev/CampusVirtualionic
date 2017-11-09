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
import {ModificaradministradorPage} from '../pages/modificaradministrador/modificaradministrador';
import {ListarestudiantePage} from '../pages/listarestudiante/listarestudiante';
import {CrearestudiantePage} from '../pages/crearestudiante/crearestudiante';
import {ModificarestudiantePage} from '../pages/modificarestudiante/modificarestudiante';
import {ListaractividadPage} from '../pages/listaractividad/listaractividad';
import {CrearactividadPage} from '../pages/crearactividad/crearactividad';
import {ModificaractividadPage} from '../pages/modificaractividad/modificaractividad';
import {AdministradorProvider} from '../providers/administrador/administrador';
import {LoginProvider} from '../providers/login/login';
import {EstudianteProvider} from '../providers/estudiante/estudiante';
import {ActividadProvider} from '../providers/actividad/actividad';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ListaradministradorPage,
    ListarestudiantePage,
    CrearadministradorPage,
    CrearestudiantePage,
    ModificaradministradorPage,
    ModificarestudiantePage,
    ListaractividadPage,
    CrearactividadPage,
    ModificaractividadPage
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
    ListarestudiantePage,
    CrearadministradorPage,
    CrearestudiantePage,
    ModificaradministradorPage,
    ModificarestudiantePage,
    ListaractividadPage,
    CrearactividadPage,
    ModificaractividadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AdministradorProvider,
    LoginProvider,
    EstudianteProvider,
    ActividadProvider
  ]
})
export class AppModule {
}
