import { NiveauService } from './../../services/niveau.service';
import { SerieService } from './../../services/serie.service';
import { first } from 'rxjs/operators';
import { ClasseService } from './../../services/classe.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-classe',
  templateUrl: './list-classe.component.html',
  styleUrls: ['./list-classe.component.scss']
})
export class ListClasseComponent implements OnInit {
  allclasse:any
  loginForm: FormGroup;
  loading = false;                                                                                                                                                                                                                                                                                  
  submitted = false;
  
  codeclasse='';
  libelleclasse='';
  niveaux='';
  series= '';
  montantIns= '';
  montantMens= '';

  idmod:any
  codeclasseChange;
  libelleclasseChange;
  niveauChange;
  serieChange;
  montantInsChange;
  montantMensChange;
  Allserie:any
  Allniveau:any
  serieid;
  niveauid;
  variable : any = false;
  constructor(private classervice:ClasseService,
    private serieservice:SerieService,
    private niveauservice:NiveauService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.serieservice.getAllSerie().subscribe(
      data=>{this.Allserie=data;
      // console.log(data);
    } ),
    this.niveauservice.getAllNiv().subscribe(
      data=>{this.Allniveau=data;
      // console.log(data);
    } ),

    this.loginForm = new FormGroup({
      codeclasse: new FormControl(''),
      libelleclasse: new FormControl(''),
      niveaux: new FormControl(''),
      series: new FormControl(''),
      montantIns: new FormControl(''),
      montantMens: new FormControl(''),
      id: new FormControl(''),

    });
    this.classervice.getAllClasse().subscribe(
      data=>{
        this.allclasse=data;
          // console.log(data);  

      }
    ),
    this.onChanges();
    
    
  }
  onChanges(): void {
    this.loginForm.get('id').valueChanges.subscribe(val => {
      // console.log(val);
     
      this.editclasse(val);
    });
  }
  get f() { return this.loginForm.controls; }
  
  Action(id:number){
    this.classervice.suppression(id).subscribe(
      data=>{
        alert(JSON.stringify(data["message"]))
        this.classervice.getAllClasse().subscribe(
          data=>{
            this.allclasse=data;
              // console.log(data);  
    
          }
        )
       
      },
      
          error=>{
            
            alert( JSON.stringify (error["message"]))
            
          }
    
    )


  }
  editclasse(val){
 
    this.variable = !this.variable;
    this.classervice.edite(val).subscribe(
      data=>{
      
        if (data){
          
        const classe = data ;
        this.idmod =classe.id;
        this.codeclasse =classe.codeclasse;
        this.libelleclasse =classe.libelleclasse;
        this.niveaux =classe.niveaux.libelleniveau;
        this.niveauid =classe.niveaux.id;
        this.series =classe.series.libelleserie;
        this.serieid =classe.series.id;
        this.montantIns =classe.montantIns;
        this.montantMens =classe.montantMens;

        this.loginForm.get('idmod').disable();
        this.loginForm.get('codeclasse').enable();
        this.loginForm.get('libelleclasse').enable();
        this.loginForm.get('niveaux').enable();
        this.loginForm.get('series').enable();
        this.loginForm.get('montantIns').enable();
        this.loginForm.get('montantMens').enable();
        }
   
      }
    )
     }
     onSubmit() {

      if (this.loginForm.value.codeclasse!=='') 
      {
        this.codeclasseChange= this.loginForm.value.codeclasse;
      
      }
     else {
       this.codeclasseChange=this.codeclasse; 
     }
     if (this.loginForm.value.libelleclasse!=='') 
     {
       this.libelleclasseChange= this.loginForm.value.libelleclasse;
     
     }
    else {
      this.libelleclasseChange=this.libelleclasse; 
    }
    if (this.loginForm.value.niveaux!=='') 
     {
       this.niveauChange= this.loginForm.value.niveaux;
     
     }
    else {
      this.niveauChange=this.niveauid; 
    }
    if (this.loginForm.value.series!=='') 
    {
      this.serieChange= this.loginForm.value.series;
    
    }
   else {
     this.serieChange=this.serieid; 
   }
   if (this.loginForm.value.montantIns!=='') 
    {
      this.montantInsChange= this.loginForm.value.montantIns;
    
    }
   else {
     this.montantInsChange=this.montantIns; 
   }
   if (this.loginForm.value.montantMens!=='') 
    {
      this.montantMensChange= this.loginForm.value.montantMens;
    
    }
   else {
     this.montantMensChange=this.montantMens; 
   }
      const classe={
        codeclasse:this.codeclasseChange,
        libelleclasse:this.libelleclasseChange,
        niveaux:`api/niveaux/${this.niveauChange}`,
        series:`api/series/${this.serieChange}`,
        montantIns:this.montantInsChange,
        montantMens:this.montantMensChange,
        

    }
    console.log(classe);
     
    this.classervice.modifier(this.idmod,classe)
          .pipe(first())
          .subscribe(
            data=>{
              alert(JSON.stringify(data["message"]))
              this.classervice.getAllClasse().subscribe(
                data=>{
                  this.allclasse=data;
                      
          
                }
              )
             
            },
              
              error => {
                alert('incorrect')                                                                              
                  this.loading = false;
              });
      
     
  }
}
