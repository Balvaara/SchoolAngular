import { DatePipe } from '@angular/common';
import { first } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import { IscriptionService } from './../../services/iscription.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-eleve',
  templateUrl: './liste-eleve.component.html',
  styleUrls: ['./liste-eleve.component.scss']
})
export class ListeEleveComponent implements OnInit {
idmod:any
prenom=''
nom=''
sexe=''
datenaissance=''
lieu=''
prenom1
nom1
sexe1
datenaissance1
lieu1
variable : any = false;
loginForm: FormGroup
  constructor( private ins:IscriptionService,
    private datePipe: DatePipe) { }
allins

  ngOnInit() {
    this.loginForm = new FormGroup({
      prenom: new FormControl(''),
      nom: new FormControl(''),
      sexe: new FormControl(''),
      datenaissance: new FormControl(''),
      lieu: new FormControl(''),
      id: new FormControl(''),

    });
    this.ins.getAllEl().subscribe(
      data=>{this.allins=data;
        // console.log(data);
    }                                                                       
       )
       this.onChanges();
    
    
      }
      onChanges(): void {
        this.loginForm.get('id').valueChanges.subscribe(val => {
          // console.log(val);
         
          this.editEle(val);
        });
      }
      get f() { return this.loginForm.controls; }
      
      editEle(val){
 
        this.variable = !this.variable;
        this.ins.editeEl(val).subscribe(
          data=>{
          
            if (data){
              
            const eleve = data ;
            this.idmod =eleve.id;
            this.prenom =eleve.prenom;
            this.nom =eleve.nom;
            this.datenaissance =eleve.datenais;
            this.lieu =eleve.lieunaiss;
            this.sexe =eleve.sexe
           
    
            this.loginForm.get('idmod').disable();
            this.loginForm.get('prenom').enable();
            this.loginForm.get('nom').enable();
            this.loginForm.get('datenaissance').enable();
            this.loginForm.get('lieu').enable();
            this.loginForm.get('sexe').enable();
            }
       
          }
        )
         }
         onSubmit() {

          if (this.loginForm.value.prenom!=='') 
          {
            this.prenom1= this.loginForm.value.prenom;
          
          }
         else {
           this.prenom1=this.prenom; 
         }
         if (this.loginForm.value.nom!=='') 
         {
           this.nom1= this.loginForm.value.nom;
         
         }
        else {
          this.nom1=this.nom; 
        }
        if (this.loginForm.value.datenaissance!=='') 
         {
           this.datenaissance1= this.loginForm.value.datenaissance;
         
         }
        else {
          this.datenaissance1=(this.datePipe.transform(this.datenaissance,"yyyy-MM-dd"))  ; 
        }
        if (this.loginForm.value.lieu!=='') 
        {
          this.lieu1= this.loginForm.value.lieu;
        
        }
       else {
         this.lieu1=this.lieu; 
       }
       if (this.loginForm.value.sexe!=='') 
        {
          this.sexe1= this.loginForm.value.sexe;
        
        }
       else {
         this.sexe1=this.sexe; 
       }
      
          const eleve={
            nom:this.nom1,
            prenom:this.prenom1,
            datenaissance:this.datenaissance1,
            lieu:this.lieu1,
            sexe:this.sexe1,
    
        }
        console.log(eleve);
         
        this.ins.modifierEl(this.idmod,eleve)
              .pipe(first())
              .subscribe(
                data=>{
                  alert(JSON.stringify(data["message"]))
                  this.ins.getAllEl().subscribe(
                    data=>{this.allins=data;
                      // console.log(data);
                  }                                                                       
                     )
                 
                },
                  
                  error => {
                    alert('incorrect')                                                                              
                      // this.loading = false;
                  });
          
         
      }   
      
      
      Action(id:number){
    this.ins.suppression(id).subscribe(
      data=>{
        alert(JSON.stringify(data["message"]))
        this.ins.getAllEl().subscribe(
          data=>{this.allins=data;
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
