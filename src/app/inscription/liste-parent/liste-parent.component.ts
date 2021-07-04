import { first } from 'rxjs/operators';
import { ParentService } from './../../services/parent.service';
import { FormControl, FormGroup } from '@angular/forms';
import { IscriptionService } from './../../services/iscription.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-parent',
  templateUrl: './liste-parent.component.html',
  styleUrls: ['./liste-parent.component.scss']
})
export class ListeParentComponent implements OnInit {

  constructor( private ins:IscriptionService,
    private pr:ParentService) { }
allpr
prenomp=''
nomp=''
adressep=''
prenomp1
nomp1
adressep1
telp1
variable : any = false;
telp=''
loginForm: FormGroup;
idmod:any
  ngOnInit() {
    this.loginForm = new FormGroup({
      prenomp: new FormControl(''),
      nomp: new FormControl(''),
      adressep: new FormControl(''),
      telp: new FormControl(''),
      id: new FormControl(''),
    }),
    this.ins.getTuteur().subscribe(
      data=>{this.allpr=data['hydra:member'];
        // console.log(data);
    }                                                                       
       )
       this.onChanges();

      }
      onChanges(): void {
        this.loginForm.get('id').valueChanges.subscribe(val => {
          // console.log(val);
         
          this.editPr(val);
        });
      }
      get f() { return this.loginForm.controls; }
editPr(val){
 
        this.variable = !this.variable;
        this.ins.edite(val).subscribe(
          data=>{
          
            if (data) {
              // console.log(data.username)
            const niveau = data ;
            this.idmod =niveau.id;
            this.prenomp =niveau.prenomp;
            this.nomp =niveau.nomp;
            this.adressep =niveau.adressep;
            this.telp =niveau.telp;
            }
       
          }
        )
}

onSubmit(){
  if (this.loginForm.value.prenomp!=='') 
      {
        this.prenomp1= this.loginForm.value.prenomp;
      
      }
     else {
       this.prenomp1=this.prenomp; 
     }
     if (this.loginForm.value.nomp!=='') 
      {
        this.nomp1= this.loginForm.value.nomp;
      
      }
     else {
       this.nomp1=this.nomp; 
     }
     if (this.loginForm.value.adressep!=='') 
      {
        this.adressep1= this.loginForm.value.adressep;
      
      }
     else {
       this.adressep1=this.adressep; 
     }
     if (this.loginForm.value.telp!=='') 
      {
        this.telp1= this.loginForm.value.telp;
      
      }
     else {
       this.telp1=this.telp; 
     }
     const parent={
       prenom:this.prenomp1,
       nom:this.nomp1,
       adresse:this.adressep1,
       telephone:this.telp1
     }
    //  console.log(parent)
    this.pr.modifier(this.idmod,parent)
    .pipe(first())
    .subscribe(
      data=>{
        alert(JSON.stringify(data["message"]))
        this.ins.getTuteur().subscribe(
          data=>{this.allpr=data['hydra:member'];
            // console.log(data);
        }                                                                       
           )
       
      },
        
        error => {
          alert('code niveau or libelle niveau is incorrect')                                                                               
            // this.loading = false;
        });



}

}
