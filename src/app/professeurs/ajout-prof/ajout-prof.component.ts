import { ProfService } from './../../serives/prof.service';
import { AlertService } from './../../services/alert.service';
import { first } from 'rxjs/operators';
import { MatiereService } from './../../services/matiere.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-prof',
  templateUrl: './ajout-prof.component.html',
  styleUrls: ['./ajout-prof.component.scss']
})
export class AjoutProfComponent implements OnInit {
  loginForm: FormGroup
  allmat
  submitted = false;
  loading = false;
  matieres:any=[]
  Mymat:any=[]
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private mat:MatiereService,
    private alertService: AlertService,
    private profs:ProfService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      prenompr: ['', Validators.required],
      nompr: ['', Validators.required],
      adressepr: ['', Validators.required],
      telpr: ['', Validators.required],
      datenaisspr: ['', Validators.required],
      lieunaisspr: ['', Validators.required],
      mats: ['', Validators.required],
  });
  this.mat.getMatiere().subscribe(
    data=>{this.allmat=data['hydra:member'];
      // console.log(data);
  }                                                                       
     )
  }
  get f() { return this.loginForm.controls; }


  onSubmit() {
    this.matieres=this.loginForm.value.mats
    for (let $i = 0; $i < this.matieres.length; $i++) {
      //  const tab = this.matieres[$i];
      this.Mymat[$i]=`api/matieres/`+this.matieres[$i];
    
   
    }
    const prof={
      prenompr:this.loginForm.value.prenompr,
      nompr:this.loginForm.value.nompr,
      adressepr:this.loginForm.value.adressepr,
      telpr:this.loginForm.value.telpr,
      datenaisspr:this.loginForm.value.datenaisspr,
      lieunaisspr:this.loginForm.value.lieunaisspr,
      mats:this.Mymat,

     
  }
  // console.log(prof);
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.profs.Isersion(prof)
    .pipe(first())
    .subscribe(
        data => {
          alert(JSON.stringify (data["message"]));
            this.router.navigate(['default/lister_prof']);
        },
        
        error => {
          this.alertService.error                                                                             
            this.loading = false;
        });
   
}

}
