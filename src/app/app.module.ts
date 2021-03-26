import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { APP_BASE_HREF } from '@angular/common';
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
   ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {provide: APP_BASE_HREF, useValue : '/'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
