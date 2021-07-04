import { first } from 'rxjs/operators';
import { AlertService } from './../../services/alert.service';
import { ClasseService } from './../../services/classe.service';
import { EmpService } from './../../services/emp.service';
import { PayementService } from './../../services/payement.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emploi-du-temps',
  templateUrl: './emploi-du-temps.component.html',
  styleUrls: ['./emploi-du-temps.component.scss']
})
export class EmploiDuTempsComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  allsession
  allcl
  allmat
  allprof
  constructor(private formBuilder: FormBuilder,
    private pay:PayementService,
    private emp:EmpService,
    private classe:ClasseService,
    private alertService: AlertService) { }

  ngOnInit() {


    this.loginForm = this.formBuilder.group({
      jours: ['', Validators.required],
      heurFin: ['', Validators.required],
      heurDebut: ['', Validators.required],
      classes: ['', Validators.required],
      mats: ['', Validators.required],
      professeurs: ['', Validators.required],
      annees: ['', Validators.required],
  }); 
  this.pay.getSession().subscribe(
    data=>{this.allsession=data['hydra:member'];
    //  console.log(data);
  }                                                                       
     ),
     this.classe.getClasse().subscribe(
      data=>{this.allcl=data['hydra:member'];
        // console.log(data);
    }                                                                       
       ),
       this.onChanges();
       this.onChanges1();
  }
  onChanges(): void {
    this.loginForm.get('classes').valueChanges.subscribe(val => {
      // console.log(val);  
     
      this.getMat(val);
    });
  }
  onChanges1(): void {
    this.loginForm.get('mats').valueChanges.subscribe(val => {
      // console.log(val);  
     
      this.getProfByMat(val);
    });
  }


  get f() { return this.loginForm.controls; }
  getMat(val) {
    this.emp.getMat(val).subscribe
    (data => {
      if (data) {
         this.allmat = data ;
        //  console.log(this.allmat);
      }
    error => {
      console.log(error);
   
    
    }
  });
    
  }
  getProfByMat(val) {
    this.emp.getPrfByMat(val).subscribe
    (data => {
      if (data) {
         this.allprof = data ;
        // console.log(this.allprof);
      }
    error => {
      console.log(error);
   
    
    }
  });
    
  }


  onSubmit() {
    const emplois={
      jours:this.loginForm.value.jours,
      heurFin:this.loginForm.value.heurFin,
      heurDebut:this.loginForm.value.heurDebut,
      annees:`api/annee_acads/${this.loginForm.value.annees}`,
      classes:`api/classes/${this.loginForm.value.classes}`,
      mats:`api/matieres/${this.loginForm.value.mats}`,
      professeurs:`api/professeurs/${this.loginForm.value.professeurs}`,
     
  }
  // console.log(emplois)
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.emp.Isersion(emplois)
    .pipe(first())
    .subscribe(
        data => {
          alert(JSON.stringify (data["message"]));
            // this.router.navigate(['default/lister_matiere']);
        },
        
        error => {
          this.alertService.error                                                                             
            // this.loading = false;
        });
   
}
  
}
