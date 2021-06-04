import { AlertService } from './../../services/alert.service';
import { PayementService } from './../../services/payement.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-bultin',
  templateUrl: './bultin.component.html',
  styleUrls: ['./bultin.component.scss']
})
export class BultinComponent implements OnInit {
  loginForm: FormGroup
  allsession
  allsems
  variable : any = false;
  loading = false;
  notes:any
  submitted = false;
  moy:any
totalcoef=0
totalsome=0
totalNS=0
ell:any
  constructor( private  formBuilder: FormBuilder,
    private pay:PayementService,
    private  note:NoteService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      matriculeEleve: ['', Validators.required],
      sems: ['', Validators.required],
      session: ['', Validators.required],
      // valeur: ['', Validators.required]

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
       )

  }
  get f() { return this.loginForm.controls; }

  Recherche()
  {
   this.submitted = true;


    // stop here if form is invalid
    this.alertService.clear();
    if (this.loginForm.invalid) {
        return;
    }

    // this.loading = true;

  

    this.variable = !this.variable;
    this.note.getNoteByMatSesAnn(this.loginForm.value.matriculeEleve,this.loginForm.value.sems,
      this.loginForm.value.session).subscribe(
          data=>{
            if (data) {
              this.notes= data ;
              // console.log(this.notes)
              for (let i = 0; i < this.notes.length; i++) {
                this.totalsome =this.totalsome + this.notes[i].valeur;
                this.totalcoef=this.totalcoef+this.notes[i].mats.classeMatieres[0].coef
                this.totalNS=this.totalNS + 
                (this.notes[i].valeur*this.notes[i].mats.classeMatieres[0].coef)
                //  console.log(this.totalNS)
                
              }
         
            // this.totalsome=this.totalsome + this.notes.valeur  
            // console.log(this.totalsome)
            }
            error => {
              alert('Invalide')                                                                               
                // this.loading = false;
            }
            this.pay.MyMatricule(this.loginForm.value.matriculeEleve).subscribe(
              data=>{
                if (data) {
                  this.ell=data ;
              console.log(this.ell)
                
                }
              }),
            this.note.getMoyAnnuelle(this.loginForm.value.matriculeEleve,this.loginForm.value.sems,
              this.loginForm.value.session).subscribe(
                  data=>{
                    if (data) {
                      this.moy= data ;
                  //  console.log(this.moy)
                    
                    }
                  })
  })
     
  

  }


}
