import { BultinComponent } from './notes/bultin/bultin.component';
import { InscrireComponent } from './inscription/inscrire/inscrire.component';
import { AjoutClasseMatComponent } from './classesMat/ajout-classe-mat/ajout-classe-mat.component';
import { ListSerieComponent } from './series/list-serie/list-serie.component';
import { AjoutSerieComponent } from './series/ajout-serie/ajout-serie.component';
import { AjoutProfComponent } from './professeurs/ajout-prof/ajout-prof.component';
import { AjoutClasseComponent } from './classes/ajout-classe/ajout-classe.component';
import { VerifinoteComponent } from './notes/verifinote/verifinote.component';
import { AjoutnoteComponent } from './notes/ajoutnote/ajoutnote.component';
import { ExamenComponent } from './examen/examen.component';
import { ListePayementComponent } from './payements/liste-payement/liste-payement.component';
import { AjoutPyementComponent } from './payements/ajout-pyement/ajout-pyement.component';
import { StaticComponent } from './static/static/static.component';
import { ListerUserComponent } from './users/lister-user/lister-user.component';
import { AjouUserComponent } from './users/ajou-user/ajou-user.component';
import { DefaultComponent } from './default/default.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { AuthGuard } from './helpers/auth.guard';
import { ListClasseComponent } from './classes/list-classe/list-classe.component';
import { AjoutMatComponent } from './matieres/ajout-mat/ajout-mat.component';
import { ListMatComponent } from './matieres/list-mat/list-mat.component';
import { ListProfComponent } from './professeurs/list-prof/list-prof.component';
import { AjoutNivComponent } from './niveaux/ajout-niv/ajout-niv.component';
import { ListNivComponent } from './niveaux/list-niv/list-niv.component';
import { ListeEleveComponent } from './inscription/liste-eleve/liste-eleve.component';
import { ListeParentComponent } from './inscription/liste-parent/liste-parent.component';
import { ListeInscritsComponent } from './inscription/liste-inscrits/liste-inscrits.component';


const routes: Routes = [
  { path: '', component:ConnexionComponent},
  { path: 'default', component:DefaultComponent,canActivate:[AuthGuard],
  children:
  [
  
    { path: 'ajout_user', component:AjouUserComponent},
    { path: 'lister_user', component:ListerUserComponent},
    { path: 'static', component: StaticComponent },
    { path: 'payement', component: AjoutPyementComponent },
    { path: 'liste_payement', component: ListePayementComponent },
    { path: 'menu', component: ExamenComponent },
    { path: 'ajouter_note', component: AjoutnoteComponent },
    { path: 'lister_note', component: VerifinoteComponent },
    { path: 'ajout_classe', component: AjoutClasseComponent },
    { path: 'lister_classe', component: ListClasseComponent },
    { path: 'ajout_matiere', component: AjoutMatComponent },
    { path: 'lister_matiere', component: ListMatComponent },
    { path: 'ajout_prof', component: AjoutProfComponent },
    { path: 'lister_prof', component: ListProfComponent },
    { path: 'ajout_serie', component: AjoutSerieComponent },
    { path: 'lister_serie', component: ListSerieComponent },
    { path: 'ajout_niv', component: AjoutNivComponent },
    { path: 'lister_niv', component: ListNivComponent },
    {path: 'ajout_classe_mat', component: AjoutClasseMatComponent },
    {path: 'inscrire', component: InscrireComponent },
    {path: 'lister_eleve', component: ListeEleveComponent },
    {path: 'lister_parent', component: ListeParentComponent },
    {path: 'lister_inscrits', component: ListeInscritsComponent },
    {path: 'bultin', component: BultinComponent },
    
    

  ]
},
{ path: '**', component: NotfoundComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
