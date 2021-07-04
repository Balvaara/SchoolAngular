import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { APP_BASE_HREF, DatePipe } from '@angular/common';
import { AlertComponent } from './components/connexion/alert.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './helpers/jwt-interceptor.service';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { NotfoundComponent } from './notfound/notfound.component';
import { DefaultComponent } from './default/default.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { AjouUserComponent } from './users/ajou-user/ajou-user.component';
import { ListerUserComponent } from './users/lister-user/lister-user.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { StaticComponent } from './static/static/static.component';
import { AjoutPyementComponent } from './payements/ajout-pyement/ajout-pyement.component';
import { ListePayementComponent } from './payements/liste-payement/liste-payement.component';
import { ExamenComponent } from './examen/examen.component';
import { AjoutnoteComponent } from './notes/ajoutnote/ajoutnote.component';
import { VerifinoteComponent } from './notes/verifinote/verifinote.component';

import { AjoutProfComponent } from './professeurs/ajout-prof/ajout-prof.component';
import { ListProfComponent } from './professeurs/list-prof/list-prof.component';
import { ListMatComponent } from './matieres/list-mat/list-mat.component';
import { AjoutMatComponent } from './matieres/ajout-mat/ajout-mat.component';
import { ListSerieComponent } from './series/list-serie/list-serie.component';
import { AjoutSerieComponent } from './series/ajout-serie/ajout-serie.component';
import { ListNivComponent } from './niveaux/list-niv/list-niv.component';
import { AjoutNivComponent } from './niveaux/ajout-niv/ajout-niv.component';
import { ListClasseComponent } from './classes/list-classe/list-classe.component';
import { AjoutClasseComponent } from './classes/ajout-classe/ajout-classe.component';
import { AjoutClasseMatComponent } from './classesMat/ajout-classe-mat/ajout-classe-mat.component';
import { InscrireComponent } from './inscription/inscrire/inscrire.component';
import { ListeEleveComponent } from './inscription/liste-eleve/liste-eleve.component';
import { ListeParentComponent } from './inscription/liste-parent/liste-parent.component';
import { ListeInscritsComponent } from './inscription/liste-inscrits/liste-inscrits.component';
import { BultinComponent } from './notes/bultin/bultin.component';
import { NgxPrintModule } from 'ngx-print';
import { EmploiDuTempsComponent } from './cours/emploi-du-temps/emploi-du-temps.component';
import { MenuCoursComponent } from './cours/menu-cours/menu-cours.component';
import { ListeEmpComponent } from './cours/liste-emp/liste-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    AlertComponent,
    NotfoundComponent,
    DefaultComponent,
    NavbarComponent,
    SiderbarComponent,
    AjouUserComponent,
    ListerUserComponent,
    JwPaginationComponent,
    StaticComponent,
    AjoutPyementComponent,
    ListePayementComponent,
    ExamenComponent,
    AjoutnoteComponent,
    VerifinoteComponent,  
    AjoutProfComponent,
    ListProfComponent,
    ListMatComponent,
    AjoutMatComponent,
    ListSerieComponent,
    AjoutSerieComponent,
    ListNivComponent,
    AjoutNivComponent,
    ListClasseComponent,
    AjoutClasseComponent,
    AjoutClasseMatComponent,
    InscrireComponent,
    ListeEleveComponent,
    ListeParentComponent,
    ListeInscritsComponent,
    BultinComponent,
    EmploiDuTempsComponent,
    MenuCoursComponent,
    ListeEmpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule, 
    FormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
    NgxPrintModule,
   ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {provide: APP_BASE_HREF, useValue : '/'},
    DatePipe,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
