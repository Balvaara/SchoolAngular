import { first } from 'rxjs/operators';
import { MatiereService } from './../../services/matiere.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProfService } from './../../serives/prof.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-prof',
  templateUrl: './list-prof.component.html',
  styleUrls: ['./list-prof.component.scss']
})
export class ListProfComponent implements OnInit {
allpro
variable : any = false;
loginForm: FormGroup
allmat
prenompr=''
nompr=''
adressepr=''
telpr=''
datenaisspr=''
lieunaisspr=''

matieres:any=[]
  Mymat:any=[]
prenompr1
nompr1
adressepr1
telpr1
datenaisspr1
lieunaisspr1
idmod:any
matss
  constructor(private prof:ProfService,
    private mat:MatiereService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm =  new FormGroup({
      prenompr:new FormControl(''),
      nompr:new FormControl(''),
      adressepr:new FormControl(''),
      telpr:new FormControl(''),
      datenaisspr:new FormControl(''),
      lieunaisspr:new FormControl(''),
      mats:new FormControl(''),
  });
    this.prof.getProf().subscribe(
      data=>{this.allpro=data;
      //  console.log(data);
    }),
    this.mat.getMatiere().subscribe(
      data=>{this.allmat=data['hydra:member'];
        // console.log(data);
    }                                                                       
       )
    this.onChanges();

  }
  onChanges(): void {
    this.loginForm.get('id').valueChanges.subscribe(val => {
      // console.log(val);
     
      this.editProf(val);
    });
  }


  editProf(val){
 
    this.variable = !this.variable;
    this.prof.edite(val).subscribe(
      data=>{
      
        if (data) {
          console.log(data)
        const user = data ;
        this.idmod =user.id;
        this.prenompr = user.prenompr;
        this.nompr =user.nompr;
        this.adressepr =user.adressepr;
        this.datenaisspr =user.datenaisspr
        this.lieunaisspr =user.lieunaisspr
        this.telpr =user.telpr
        // this.matss=user.mats
        
        // this.loginForm.get('idmod').disable();
        // this.loginForm.get('username').enable();
        // this.loginForm.get('password').enable();
        // this.loginForm.get('nomComplet').enable();
        //  this.loginForm.get('profil').enable();
        }
   
      }
    )
     }
  Action(id:number){
    this.prof.suppression(id).subscribe(
      data=>{
        alert(JSON.stringify(data["message"]))
        this.prof.getProf().subscribe(
          data=>{this.allpro=data;
          //  console.log(data);
        })
       
      },
      
          error=>{
            
            alert( JSON.stringify (error["message"]))
            
          }
    
    )


  }


Enregistrer() {

    if (this.loginForm.value.prenompr!=='') 
    {
      this.prenompr1= this.loginForm.value.prenompr;
    
    }
   else {
     this.prenompr1=this.prenompr; 
   }
   if(this.loginForm.value.nompr!==''){
  
       this.nompr1= this.loginForm.value.nompr
   
   }else{
     this.nompr1=this.nompr;

   }
   if(this.loginForm.value.adressepr!==''){
  
     this.adressepr1= this.loginForm.value.adressepr
   
 }else{
   this.adressepr1=this.adressepr;

 }
 if(this.loginForm.value.datenaisspr!==''){
  
  this.datenaisspr1= this.loginForm.value.datenaisspr

}else{
this.datenaisspr1=this.datenaisspr;

}
if(this.loginForm.value.lieunaisspr!==''){
  
  this.lieunaisspr1= this.loginForm.value.lieunaisspr

}else{
this.lieunaisspr1=this.lieunaisspr;

}
if(this.loginForm.value.telpr!==''){
  
  this.telpr1= this.loginForm.value.telpr

}else{
this.telpr1=this.telpr;

}
if (this.loginForm.value.mats=='') {
  this.Mymat=this.matss;
}else{
  this.matieres=this.loginForm.value.mats             
  
  for (let $i = 0; $i < this.matieres.length; $i++) {
    //  const tab = this.matieres[$i];
    this.Mymat[$i]=`api/matieres/`+this.matieres[$i];
  }
}
    const user={
      prenompr:this.prenompr1,
      nompr:this.nompr1,
      adressepr:this.adressepr1,
      datenaisspr:this.datenaisspr1,
      lieunaisspr:this.lieunaisspr1,
      telpr:this.telpr1,
    
      // mats:this.Mymat,
  }
  console.log(user);
    // this.submitted = true;



    // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //     return;
    // }

    // this.loading = true;
    
   this.prof.modifier(this.idmod,user)
        .pipe(first())
        .subscribe(
            data => {
              alert(JSON.stringify (data["message"])) 
              this.prof.getProf().subscribe(
                data=>{this.allpro=data;
          
                }
              )
            },
            
            error => {
              alert('Username or password is incorrect')                                                                               
            });
}
}





