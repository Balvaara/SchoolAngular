import { NiveauService } from './../../services/niveau.service';
import { SerieService } from './../../services/serie.service';
import { first } from 'rxjs/operators';
import { AlertService } from './../../services/alert.service';
import { ClasseService } from './../../services/classe.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-classe',
  templateUrl: './ajout-classe.component.html',
  styleUrls: ['./ajout-classe.component.scss']
})
export class AjoutClasseComponent implements OnInit {
  loginForm: FormGroup
  submitted = false;
  loading = false;
  allser
  allniv
  libelleserie=''
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private classe:ClasseService,
    private alertService: AlertService,
    private ser:SerieService,
    private niv:NiveauService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      codeclasse: ['', Validators.required],
      libelleclasse: ['', Validators.required],
      montantMens: ['', Validators.required],
      montantIns: ['', Validators.required],
      series: ['', Validators.required],
      niveaux: ['', Validators.required],

  });

  this.ser.getSerie().subscribe(
    data=>{this.allser=data['hydra:member'];
      // console.log(data);
  }                                                                       
     ),
     this.niv.getNiv().subscribe(
      data=>{this.allniv=data['hydra:member'];
        // console.log(data);
    }                                                                       
       )
      //  this.onChanges();
  }
  get f() { return this.loginForm.controls; }
  //auto remplissage
  // onChanges(): void {
  //   this.loginForm.get('niv').valueChanges.subscribe(val => {
  //   // console.log(val);  
     
  //     this.getEleveByMat(val);
  //   });
  // }
  // getEleveByMat(val) {
    
  //     if (val) {
  //       this.loginForm.get('series').disable;
  //      console.log(val);
   
        
  //     } 
  // }
  
  
 
  Enregistrer() {
    const classes={
      codeclasse:this.loginForm.value.codeclasse,
      libelleclasse:this.loginForm.value.libelleclasse,
      montantMens:parseInt(this.loginForm.value.montantMens),
      montantIns:parseInt(this.loginForm.value.montantIns),
      series:`api/series/${this.loginForm.value.series}`,
      niveaux:`api/niveaux/${this.loginForm.value.niveaux}`,
     
  }
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.classe.Isersion(classes)
    .pipe(first())
    .subscribe(
        data => {
          alert(JSON.stringify (data["message"]));
            this.router.navigate(['default/lister_classe']);
        },
        
        error => {
          this.alertService.error                                                                             
            this.loading = false;
        });
   
}
}