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
  
  allsession
  nom='';prenom='';classes='';
  constructor(private formBuilder: FormBuilder,
    private pay:PayementService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      matriculeEleve: ['', Validators.required],
      session: ['', Validators.required],
      mois: ['', Validators.required]
  });
  this.pay.getSession().subscribe(
    data=>{this.allsession=data['hydra:member'];
    //  console.log(data);
  }                                                                       
     )
    
  this.onChanges();
  // this.onChanges1();

  this.pay.getMois().subscribe(
    data=>{this.allmois=data['hydra:member'];
      // console.log(data);
  }                                                                       
     )
  }
  //auto remplissage
  onChanges(): void {
    this.loginForm.get('matriculeEleve').valueChanges.subscribe(val => {
      // console.log(val);  
     
      this.getEleveByMat(val);
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    const pay={
      matriculeEleve:this.loginForm.value.matriculeEleve,
      session:this.loginForm.value.session,
      mois:`api/mois/${this.loginForm.value.mois}`,
  }
  console.log(this.loginForm.value);
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
getEleveByMat(val) {
  this.pay.MyMatricule(val).subscribe
  (data => {
    if (data) {
      const eleve = data ;
     console.log(eleve);
 
      // console.log(data["hydra:member"][0]);
      
      this.nom =eleve.nom;
      this.prenom = eleve.prenom;
      this.classes = eleve.classes.libelleclasse;
      
      this.loginForm.get('nom');
      this.loginForm.get('prenom');
      // this.loginForm.get('classes');
     

    } else {
      this.nom = '!!!!Nada';
      this.prenom = '!!!!Nada';
      this.classes = '!!!!Nada';
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
