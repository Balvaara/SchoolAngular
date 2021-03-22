import { StaticComponent } from './static/static/static.component';
import { ListerUserComponent } from './users/lister-user/lister-user.component';
import { AjouUserComponent } from './users/ajou-user/ajou-user.component';
import { DefaultComponent } from './default/default.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { AuthGuard } from './helpers/auth.guard';


const routes: Routes = [
  { path: '', component:ConnexionComponent},
  { path: 'default', component:DefaultComponent,canActivate:[AuthGuard],
  children:
  [
    { path: 'ajout_user', component:AjouUserComponent},
    { path: 'lister_user', component:ListerUserComponent},
    { path: 'static', component: StaticComponent }
  ]
},
{ path: '**', component: NotfoundComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
