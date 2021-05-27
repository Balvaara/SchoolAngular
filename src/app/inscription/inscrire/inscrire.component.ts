import { Router } from '@angular/router';
import { IscriptionService } from './../../services/iscription.service';
import { ParentService } from './../../services/parent.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PayementService } from './../../services/payement.service';
import { ClasseService } from './../../services/classe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.scss']
})
export class InscrireComponent implements OnInit {
  allsession
  allcl
  loginForm: FormGroup
  submitted = false;
  loading = false;
  prenom=''
  nom=''
  datenaissance=''
  lieunaiss=''
  sexe=''
  classes=''
  telp=''
  prenomp=''
  nomp=''
  adressep=''
  numIns=''
  classe=''
  matriculeEleve=''
  constructor(private cl:ClasseService,
    private pay:PayementService,
    private inscrire:IscriptionService,
    private formBuilder: FormBuilder,
    private titeur:ParentService,
    private route:Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      classes:  new FormControl(''),
      session:  new FormControl(''),
      numIns:  new FormControl(''),
      prenom:  new FormControl(''),
      nom:  new FormControl(''),
      datenaissance:  new FormControl(''),
      lieunaiss:  new FormControl(''),
      sexe:  new FormControl(''),
      telp:  new FormControl(''),
      prenomp:  new FormControl(''),
      nomp:  new FormControl(''),
      adressep:  new FormControl(''),
      matriculeEleve:  new FormControl(''),
      

  });
    this.cl.getClasse().subscribe(
      data=>{this.allcl=data["hydra:member"];
        // console.log(data);
    }                                                                       
       ),
    this.pay.getSession().subscribe(
      data=>{this.allsession=data["hydra:member"];
    // console.log(data);
    }                                                                       
       ),
       this.onChanges(),
       this.onChanges1();
  }
  get f() { return this.loginForm.controls; }
   //auto remplissage
   onChanges(): void {
    this.loginForm.get('numIns').valueChanges.subscribe(val => {
      // console.log(val);  
     
      this.getEleveByMat(val);
    });
  }
  onChanges1(): void {
    this.loginForm.get('telp').valueChanges.subscribe(val => {
      // console.log(val);  
     
      this.getTiteur(val);
    });
  }
  // get f() { return this.loginForm.controls; }
  //reccuperer l'eleve par matricule fourni 
getEleveByMat(val) {
  this.inscrire.MyInscription(val).subscribe
  (data => {
    if (data["hydra:member"][0]) {
      const ins = data["hydra:member"][0] ;
       console.log(ins);
 
      // console.log(data["hydra:member"][0]);
      
      this.nom =ins.eleves.nom;
      this.prenom = ins.eleves.prenom;
      this.sexe = ins.eleves.sexe;
      this.datenaissance = ins.eleves.datenaissance;
      this.lieunaiss = ins.eleves.lieunaiss;
     this.classe = ins.classes.libelleclasse;
     this.matriculeEleve=ins.eleves.matriculeEleve

     this.nomp =ins.eleves.parrents.nomp;
     this.prenomp = ins.eleves.parrents.prenomp;
     this.adressep = ins.eleves.parrents.adressep;
     this.telp = ins.eleves.parrents.telp;
      // this.classes = eleve.classes.libelleclasse;

      this.loginForm.get('nom').disable();
      this.loginForm.get('prenom').disable();
      this.loginForm.get('datenaissance').disable();
      this.loginForm.get('lieunaiss').disable();
      this.loginForm.get('sexe').disable();
       this.loginForm.get('classe').disable();

       this.loginForm.get('nomp').disable();
       this.loginForm.get('prenomp').disable();
        this.loginForm.get('adressep').disable();
        this.loginForm.get('telp').disable();
     

    } else {
      this.nom = '';
      this.prenom = '';
      this.nom = '';
      this.datenaissance = '';
      this.lieunaiss = '';
      this.sexe = '';
      this.classe = '';


      // this.classes = '!!!!Nada';
      this.loginForm.get('nom').enable();
      this.loginForm.get('prenom').enable();
      this.loginForm.get('datenaissance').enable();
      this.loginForm.get('lieunaiss').enable();
      this.loginForm.get('sexe').enable();
       this.loginForm.get('classe').disable();

       

    }
  },
  error => {
    console.log(error);
    console.log();
  });
  
}
getTiteur(val) {
  this.titeur.Titeur(val).subscribe
  (data => {
    if (data["hydra:member"][0]) {
      const parent = data["hydra:member"][0] ;
      // console.log(partner);
 
      // console.log(data["hydra:member"][0]);
      
      this.nomp =parent.nomp;
      this.prenomp = parent.prenomp;
      this.adressep = parent.adressep;
     
      // this.classes = eleve.classes.libelleclasse;
      
      this.loginForm.get('nomp').disable();
      this.loginForm.get('prenomp').disable();
      this.loginForm.get('adressep').disable();
      // this.loginForm.get('classes').disable;
     

    }
    else{ 
      this.nomp =''  
      this.prenomp = ''
      this.adressep = '';

      this.loginForm.get('nomp').enable();
      this.loginForm.get('prenomp').enable();
      this.loginForm.get('adressep').enable();
    }
  },
  error => {
    console.log(error);
    // console.log();
  });
  
}
 

onSubmit(){
  
const nom = this.loginForm.value.nom;
const prenom = this.loginForm.value.prenom;
const datenaissance = this.loginForm.value.datenaissance;
const lieu =this.loginForm.value.lieunaiss;
const sexe =this.loginForm.value.sexe;
// const classes =this.loginForm.value.classes;
const nomp =this.loginForm.value.nomp;
const prenomparrent =this.loginForm.value.prenomp;
const adresse =this.loginForm.value.adressep;
const telephone =this.loginForm.value.telp;
// const session =this.loginForm.value.session;

const nouveau_eleve = {

  nom: nom,
  prenom: prenom,
  datenaissance: datenaissance,
  lieu:lieu,
  sexe:sexe,
  classe:this.loginForm.value.classes,
  adresse:adresse,
  nomp:nomp,
  prenomparrent:prenomparrent,
  telephone:telephone,
  session:this.loginForm.value.session,
}
  console.log(this.matriculeEleve)
const encien_eleve = {
  matriculeEleve: this.matriculeEleve,
  classe:this.loginForm.value.classes,
  session:this.loginForm.value.session,

};

if (this.loginForm.value.numIns=='') {
// this.loading = true;

this.inscrire.IsersionNovEl(nouveau_eleve).subscribe(
    data => {
      alert(JSON.stringify(data["message"]))
    //  console.log(data);
     this.route.navigate(['/default/lister_eleve']);
    },
    error => {
      console.log(error)
    }
  );
} else {
  // this.loading = true;
  this.inscrire.IsersionEncEl(encien_eleve).subscribe(
    data => {
      
      alert(JSON.stringify(data["message"]))
    this.route.navigate(['/default/lister_eleve']);
      // console.log(data);
      this.loading = false;
    });

 }


}


}
