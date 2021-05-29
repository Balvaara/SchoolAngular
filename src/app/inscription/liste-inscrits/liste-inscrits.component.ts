import { first } from 'rxjs/operators';
import { ClasseService } from './../../services/classe.service';
import { IscriptionService } from './../../services/iscription.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-inscrits',
  templateUrl: './liste-inscrits.component.html',
  styleUrls: ['./liste-inscrits.component.scss']
})
export class ListeInscritsComponent implements OnInit {
  loginForm: FormGroup
  allins
  cl=''
  cl1=''

  alcl
  idmod:any
  variable : any = false;
  constructor( private ins:IscriptionService,
    private clss:ClasseService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      cl: new FormControl(''),
      id: new FormControl(''),

    });
    this.ins.getAllIns().subscribe(
      data=>{this.allins=data;
        // console.log(data);
    }                                                                       
       ),
       this.clss.getClasse().subscribe(
        data=>{this.alcl=data["hydra:member"];
          // console.log(data);
      }                                                                       
         ),
       this.onChanges();
    
    
      }
      onChanges(): void {
        this.loginForm.get('id').valueChanges.subscribe(val => {
          // console.log(val);
         
          this.editIns(val);
        });
      }
      get f() { return this.loginForm.controls; }
      
      editIns(val){
 
        this.variable = !this.variable;
        this.ins.editeIn(val).subscribe(
          data=>{
          
            if (data){
              // console.log(data);
            const ins = data ;
            this.idmod =ins.id;
            this.cl=ins.classes.libelleclasse;
          
           
    
            this.loginForm.get('idmod').disable();
            
            this.loginForm.get('cl').enable();
            }
       
          }
        )
         }

         onSubmit() {

          if (this.loginForm.value.cl!=='') 
          {
            this.cl1= this.loginForm.value.cl;
          
          }
         else {
           this.cl1=this.cl; 
         }
        
          const inscrption={
            classe:this.cl1,
    
        }
        // console.log(inscrption);
         
        this.ins.modifierIns(this.idmod,inscrption)
              .pipe(first())
              .subscribe(
                data=>{
                  alert(JSON.stringify(data["message"]))
                  this.ins.getAllIns().subscribe(
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
         
}
