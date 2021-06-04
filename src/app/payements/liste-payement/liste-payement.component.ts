import { AlertService } from './../../services/alert.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PayementService } from './../../services/payement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-payement',
  templateUrl: './liste-payement.component.html',
  styleUrls: ['./liste-payement.component.scss']
})
export class ListePayementComponent implements OnInit {
  allmois
  loginForm: FormGroup
  matriculeEleve=''
  loading = false;
  submitted = false;
  moi='' 
  variable=true
  variable1=false
  allpay
  allpayeleve
  allsession
  constructor( private pay:PayementService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private router: Router) { }

  ngOnInit() {
    this.pay.getMois().subscribe(
      data=>{this.allmois=data['hydra:member'];
       console.log(data);
    }                                                                       
       ),
       this.loginForm = this.formBuilder.group({
        matriculeEleve: ['', Validators.required],
        mois: ['', Validators.required],
        ses: ['', Validators.required]
    });
    this.pay.getSession().subscribe(
      data=>{this.allsession=data['hydra:member'];
       console.log(data);
    }                                                                       
       )
       
    this.onChanges();
    //  this.onChanges1();
  

  }
  get f() { return this.loginForm.controls; }
 
  onChanges(): void {
 
      this.loginForm.get('matriculeEleve').valueChanges.subscribe(val => {
    
        this.Desactive(val);
 
     });
  }
  Desactive(val) {
    if (val) {
      this.loginForm.get('mois').disable()
    }else{
      this.loginForm.get('mois').enable()
    }
    
   
   
    
  }
  
  // onChanges1(): void {
 
  //   this.loginForm.get('mois').valueChanges.subscribe(val => {
  
  //  if (this.loginForm.value.mois) {
  //   // console.log(this.loginForm.value.mois)
  //   this.loginForm.get('matriculeEleve').disable();
  //  }else{
  //  this.loginForm.get('matriculeEleve').enable();
  //  }
       

        
 
  //    });
  // }
 
  onSubmit() {
    this.submitted = true;
      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
  
      this.loading = true;
    this.variable=false
    this.variable1=true
    

  
    if (this.loginForm.value.mois) {
     
  this.pay.getPayMois(this.loginForm.value.mois,this.loginForm.value.ses).subscribe(
    data=>{this.allpay=data;
  //  console.log(data);
  }                                                                       
     )
    }if(this.loginForm.value.matriculeEleve){
      this.pay.getPayEl(this.loginForm.value.matriculeEleve,this.loginForm.value.ses).subscribe(
        data=>{this.allpay=data;
      // console.log(data);
      }                                                                       
         )
    }
    

}

retour(){
  this.variable=true
  this.variable1=false
  this.loading = false;
  this.router.navigate(['default/liste_payement']);
}
}
