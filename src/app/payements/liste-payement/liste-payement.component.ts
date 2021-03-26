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
  moi='' 
  variable=true
  variable1=false
  allpay
  allpayeleve
  constructor( private pay:PayementService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.pay.getMois().subscribe(
      data=>{this.allmois=data['hydra:member'];
       console.log(data);
    }                                                                       
       ),
       this.loginForm = this.formBuilder.group({
        matriculeEleve: ['', Validators.required],
        mois: ['', Validators.required]
    });
    // this.onChanges();
    //  this.onChanges1();
  

  }
 
  // onChanges(): void {
 
  //   this.loginForm.get('moi').valueChanges.subscribe(val => {
  
  //  if (this.loginForm.value.mois) {
  //   console.log(this.loginForm.value.mois)
  //   this.loginForm.get('matriculeEleve').disable();
  //  }
       

  //       // this.loginForm.get('mois').enable();
 
  //    });
  // }
  
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.variable=false
    this.variable1=true
    if (this.loginForm.value.mois) {
     
  this.pay.getPayMois(this.loginForm.value.mois).subscribe(
    data=>{this.allpay=data;
   console.log(data);
  }                                                                       
     )
    }if(this.loginForm.value.matriculeEleve){
      this.pay.getPayEl(this.loginForm.value.matriculeEleve).subscribe(
        data=>{this.allpay=data;
      console.log(data);
      }                                                                       
         )
    }
    

}

retour(){
  this.variable=true
  this.variable1=false
}
}
