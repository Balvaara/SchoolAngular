import { EmpService } from './../../services/emp.service';
import { ClasseService } from './../../services/classe.service';
import { PayementService } from './../../services/payement.service';
import { AlertService } from './../../services/alert.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-emp',
  templateUrl: './liste-emp.component.html',
  styleUrls: ['./liste-emp.component.scss']
})
export class ListeEmpComponent implements OnInit {
  loginForm: FormGroup
  matriculeEleve=''
  loading = false;
  submitted = false;
  variable1=false
  allsession
  allcl
  allemp
  constructor(private formBuilder: FormBuilder,
    private alertService: AlertService,
    private pay:PayementService,
    private classe:ClasseService,
    private emp:EmpService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      classes: ['', Validators.required],
      session: ['', Validators.required]
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
       )
  }

  
  onSubmit() {
    this.submitted = true;
      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
  
          this.loading = true;
          this.variable1=true
              
      this.emp.getEmp(this.loginForm.value.classes,this.loginForm.value.session).subscribe(
        data=>{this.allemp=data;
      // console.log(data);
      }                                                                       
     )
    

}


}
