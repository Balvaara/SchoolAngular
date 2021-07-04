import { first } from 'rxjs/operators';
import { MatiereService } from './../../services/matiere.service';
import { ClasseService } from './../../services/classe.service';
import { Router } from '@angular/router';
import { AlertService } from './../../services/alert.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ClasseMatService } from 'src/app/services/classe-mat.service';

@Component({
  selector: 'app-ajout-classe-mat',
  templateUrl: './ajout-classe-mat.component.html',
  styleUrls: ['./ajout-classe-mat.component.scss']
})
export class AjoutClasseMatComponent implements OnInit {
  loginForm: FormGroup
  submitted = false;
  loading = false;
  allcl
  allmat
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private classe:ClasseService,
    private mat:MatiereService,
    private clmt:ClasseMatService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      matieres: ['', Validators.required],
      classes: ['', Validators.required],
      coef: ['', Validators.required],
      

  });
  this.classe.getClasse().subscribe(
    data=>{this.allcl=data['hydra:member'];
      // console.log(data);
  }                                                                       
     ),
     this.mat.getMatiere().subscribe(
      data=>{this.allmat=data['hydra:member'];
        // console.log(data);
    }                                                                       
       )

  }
  get f() { return this.loginForm.controls; }

  Enregistrer() {
    const classes_matiere={
      coef:parseInt(this.loginForm.value.coef),
      matieres:`api/matieres/${this.loginForm.value.matieres}`,
      classes:`api/classes/${this.loginForm.value.classes}`,
     
  }
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.clmt.Isersion(classes_matiere)
    .pipe(first())
    .subscribe(
        data => {
          alert(JSON.stringify (data["message"]));
            this.router.navigate(['default/lister_matiere']);
        },
        
        error => {
          this.alertService.error                                                                             
            this.loading = false;
        });
   
}

}
