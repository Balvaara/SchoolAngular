import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { PayementService } from './../../services/payement.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-ajout-pyement',
  templateUrl: './ajout-pyement.component.html',
  styleUrls: ['./ajout-pyement.component.scss']
})
export class AjoutPyementComponent implements OnInit {
  loginForm: FormGroup  ;
  allmois
  loading = false;
  submitted = false;
  matriculeEleve='';
  session=''
  variable=false
  allsession
  nom='';prenom='';classe='';montant='';
  constructor(private formBuilder: FormBuilder,
    private pay:PayementService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      matriculeEleve: ['', Validators.required],
      session: ['', Validators.required],
      mois: ['', Validators.required],
      prenom: ['', ],
      nom: ['', ],
      classe: ['', ],
      montant: ['', ]
  });
  this.pay.getSession().subscribe(
    data=>{this.allsession=data['hydra:member'];
    //  console.log(data);
  }                                                                       
     )
    
  // this.onChanges1();
  this.Recherche();

  this.pay.getMois().subscribe(
    data=>{this.allmois=data['hydra:member'];
      // console.log(data);
  }                                                                       
     )
  }


  get f() { return this.loginForm.controls; }

  onSubmit() {
    const pay={
      matriculeEleve:this.loginForm.value.matriculeEleve,
      session:this.loginForm.value.session,
      mois:`api/mois/${this.loginForm.value.mois}`,
  }
  // console.log(this.loginForm.value);
    this.submitted = true;


    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    
    this.pay.Isersion(pay)
        .pipe(first())
        .subscribe(
            data => {
              alert(JSON.stringify (data["message"]));
                this.router.navigate(['default/liste_payement']);
            });
}

//reccuperer l'eleve par matricule fourni 
Recherche() {
  this.pay.MyIns(this.loginForm.value.matriculeEleve,this.loginForm.value.session).subscribe
  (data => {
    if (data) {
      this.variable=true
      const eleve = data ;
     console.log(eleve);
 
      // console.log(data["hydra:member"][0]);
      
      this.nom =eleve.eleves.nom;
      this.prenom = eleve.eleves.prenom;
      this.classe = eleve.classes.libelleclasse;
      this.montant=eleve.classes.montantMens
      
      // this.loginForm.get('nom');
      // this.loginForm.get('prenom');
      // this.loginForm.get('classes');
     

    } else {
      this.nom = '!!!!Nada';
      this.prenom = '!!!!Nada';
      this.classe = '!!!!Nada';
      this.loginForm.get('nom').enable();
      this.loginForm.get('prenom').enable();
      // this.loginForm.get('classes').enable();

    }
  },
  error => {
    console.log(error);
    console.log();
  });
  
}


}
