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
  allsession
  allsems
  notes:any
  constructor(private formBuilder: FormBuilder,
    private router: Router,
     private note:NoteService,
     private pay:PayementService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      matriculeEleve: ['', Validators.required],
      sems: ['', Validators.required],
      session: ['', Validators.required]

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
  Recherche(){
    this.note.getNoteByMatSesAnn(this.loginForm.value.matriculeEleve,this.loginForm.value.sems,
      this.loginForm.value.session,).subscribe(
          data=>{
            if (data) {
              this.variable1=true
              this.notes= data ;
              // console.log(inscription)
            
            }
  })
}
}
