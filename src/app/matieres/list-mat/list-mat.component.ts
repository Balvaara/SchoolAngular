import { first } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import { MatiereService } from './../../services/matiere.service';
import { Component, OnInit } from '@angular/core';
import { ClasseMatService } from 'src/app/services/classe-mat.service';

@Component({
  selector: 'app-list-mat',
  templateUrl: './list-mat.component.html',
  styleUrls: ['./list-mat.component.scss']
})
export class ListMatComponent implements OnInit {
allmat
loading = false;                                                                                                                                                                                                                                                                                  
submitted = false;
loginForm: FormGroup
variable : any = false;
coef=''
idmod:any
coefchange
  constructor(private mat:ClasseMatService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      coef: new FormControl(''),
      id: new FormControl('')
    });
    this.mat.getMatiereClasse().subscribe(
      data=>{this.allmat=data;
        // console.log(data);
    }                                                                       
       ),
       this.onChanges()
  }
  get f() { return this.loginForm.controls; }
  onChanges(): void {
    this.loginForm.get('id').valueChanges.subscribe(val => {
      // console.log(val);
     
      this.editCM(val);
    });
  }
  editCM(val){
 
    this.variable = !this.variable;
    this.mat.edite(val).subscribe(
      data=>{
      
        if (data) {
          // console.log(data.username)
        const clmt = data ;
        this.idmod =clmt.id;
        this.coef = clmt.coef;
        }
   
      }
    )
 }

 onSubmit() {

  if (this.loginForm.value.coef!=='') 
  {
    this.coefchange=parseInt(this.loginForm.value.coef);
  
  }
 else {
   this.coefchange=this.coef; 
 }
 

  const clmt={
    coef:this.coefchange,
}
// console.log(user);
  this.submitted = true;



  // stop here if form is invalid
  if (this.loginForm.invalid) {
      return;
  }

  this.loading = true;
  
 this.mat.modifier(this.idmod,clmt)
      .pipe(first())
      .subscribe(
          data => {
            alert(JSON.stringify (data["message"]));
            this.mat.getMatiereClasse().subscribe(
              data=>{this.allmat=data;
                // console.log(data);
            }                                                                       
               )
          },
          
          error => {
            alert('Username or password is incorrect')                                                                               
              this.loading = false;
          });
}

  
  Action(id:number){
    this.mat.suppression(id).subscribe(
      data=>{
        alert(JSON.stringify(data["message"]))
        this.mat.getMatiereClasse().subscribe(
          data=>{this.allmat=data;
            // console.log(data);
        }                                                                       
           )
       
      },
      
          error=>{
            
            alert( JSON.stringify (error["message"]))
            
          }
    
    )

  }

}
