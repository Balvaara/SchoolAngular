import { first } from 'rxjs/operators';
import { PayementService } from './../../services/payement.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-verifinote',
  templateUrl: './verifinote.component.html',
  styleUrls: ['./verifinote.component.scss']
})
export class VerifinoteComponent implements OnInit {
  loginForm: FormGroup
  variable1=false
  variable=false
  allsession
  allsems
  valeur=''
  Val
  loading = false;
  notes:any
  submitted = false;
  idmod:any
  constructor(private formBuilder: FormBuilder,
    private router: Router,
     private note:NoteService,
     private pay:PayementService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      matriculeEleve: ['', Validators.required],
      sems: ['', Validators.required],
      session: ['', Validators.required],
      valeur: ['', Validators.required]

  });

  this.pay.getSession().subscribe(
    data=>{this.allsession=data['hydra:member'];
    //  console.log(data);
  }                                                                       
     ),
     this.pay.getSems().subscribe(
      data=>{this.allsems=data['hydra:member'];
      //  console.log(data);
    }                                                                       
       ),

  
  this.onChanges();

}
get f() { return this.loginForm.controls; }
onChanges(): void {
  this.loginForm.get('id').valueChanges.subscribe(val => {
    // console.log(val);
   
    this.editNote(val);
  });
}
editNote(val){
 
  this.variable = !this.variable;
  this.note.editeNote(val).subscribe(
    data=>{
    
      if (data) {
        console.log(data)
      const note = data ;
      this.idmod =note.id;
      this.valeur = note.valeur;
     
      }
 
    }
  )
   }

  Recherche(){
    // this.submitted = true;


    // // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //     return;
    // }
    this.note.getNoteByMatSesAnn(this.loginForm.value.matriculeEleve,this.loginForm.value.sems,
      this.loginForm.value.session).subscribe(
          data=>{
            if (data) {
              this.variable1=true
              this.notes= data ;
              // console.log(inscription)
            
            }
            error => {
              alert('Invalide')                                                                               
                // this.loading = false;
            }
  })
}
retour(){
  this.variable1=false
}
Enregistrer(){
        if (this.loginForm.value.valeur!=='') 
        {
          this.Val= this.loginForm.value.valeur;
        
        }
      else {
        this.Val=this.valeur; 
      }

      const Notes={
        valeur:this.Val

        }
        this.note.modifier(this.idmod,Notes)
        .pipe(first())
        .subscribe(
            data => {
              alert(JSON.stringify (data["message"]));
              
            },
            
            error => {
              alert('code serie or libelle serie is incorrect')                                                                               
                this.loading = false;
            });






      }
}
