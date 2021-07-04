import { first } from 'rxjs/operators';
import { PayementService } from './../../services/payement.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-ajoutnote',
  templateUrl: './ajoutnote.component.html',
  styleUrls: ['./ajoutnote.component.scss']
})
export class AjoutnoteComponent implements OnInit {
  loading = false;
  allsems;
  allele
  allmat
  allType
  data:any
  allsession;
  submitted = false;
  matriculeEleve='';
  loginForm: FormGroup
  variable1=false
  nom='';prenom='';classe='';numIns='';sexe='';
  annee=''; 
  id=''
  constructor(private formBuilder: FormBuilder,
    private router: Router,
     private pay:PayementService,
     private note:NoteService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      matriculeEleve: ['', Validators.required],
      sems: ['', Validators.required],
      mats: ['', Validators.required],
      typeNote: ['', Validators.required],
      session: ['', Validators.required],
      valeur: ['', Validators.required],
      sexe: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      classe: ['', Validators.required],
      numIns: ['', Validators.required],

  });
this.Recherche();
  // this.onChanges();


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
       this.pay.getType().subscribe(
        data=>{this.allType=data['hydra:member'];
        //  console.log(data);
      }                                                                       
         )
  }
  get f() { return this.loginForm.controls; }

  Recherche(){
    this.allmat;
    this.pay.getClasse(this.loginForm.value.session,this.loginForm.value.matriculeEleve).subscribe(
          data=>{
            if (data) {
              this.variable1=true
              const inscription = data ;
            
              this.nom =inscription.eleves.nom;
              this.prenom = inscription.eleves.prenom;
              this.sexe = inscription.eleves.sexe;
              this.classe = inscription.classes.libelleclasse;
              this.id = inscription.classes.id;
              this.numIns = inscription.numIns;
              // this.sexe = inscription.sexe;
              // console.log(this.id);
              
              this.loginForm.get('nom');
              this.loginForm.get('prenom');
              this.loginForm.get('sexe');
              this.loginForm.get('numIns');
              this.loginForm.get('classe');
              // console.log(this.classe);
              this.pay.getMatCl(this.id).subscribe(
                    data=>{
                      this.allmat=data;
                      console.log(this.allmat)
                    })
                  }
          })
        
         

  }
 
  Enregistrer() {
      const note={
        matriculeEleve:this.loginForm.value.matriculeEleve,
        annee:`api/annee_acads/${this.loginForm.value.session}`,
        valeur:parseInt (this.loginForm.value.valeur),
        sems:`api/semestres/${this.loginForm.value.sems}`,
        mats:`api/matieres/${this.loginForm.value.mats}`,
        typeNote:`api/type_notes/${this.loginForm.value.typeNote}`,
    }
    // console.log(note);

    // this.submitted = true;


    // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //     return;
    // }

    // this.loading = true;
    
    this.note.Isersion(note)
        .pipe(first())
        .subscribe(
            data => {
              alert(JSON.stringify (data["message"]));
                this.router.navigate(['default/lister_note']);
            });

}
  


}
