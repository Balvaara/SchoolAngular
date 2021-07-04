import { first } from 'rxjs/operators';
import { SerieService } from './../../services/serie.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-serie',
  templateUrl: './list-serie.component.html',
  styleUrls: ['./list-serie.component.scss']
})
export class ListSerieComponent implements OnInit {
  allserie:any
  loginForm: FormGroup;
  loading = false;                                                                                                                                                                                                                                                                                  
  submitted = false;
  codeserie ='';
  libelleserie ='';
  idmod:any
  codeseriechange;
  libelleseriechange;
  variable : any = false;
  constructor(private serieservice:SerieService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      codeserie: new FormControl(''),
      libelleserie: new FormControl(''),
      id: new FormControl(''),


    });
    this.serieservice.getAllSerie().subscribe(
      data=>{
        this.allserie=data;
          // console.log(data);  

      }
    ),
    this.onChanges();
    
  }
  onChanges(): void {
    this.loginForm.get('id').valueChanges.subscribe(val => {
      // console.log(val);
     
      this.editSerie(val);
    });
  }
  get f() { return this.loginForm.controls; }
  
  Action(id:number){
    this.serieservice.suppression(id).subscribe(
      data=>{
        alert(JSON.stringify(data["message"]))
        this.serieservice.getAllSerie().subscribe(
          data=>{
            this.allserie=data;
              // console.log(data);  
    
          }
        )
       
      },
      
          error=>{
            
            alert( JSON.stringify (error["message"]))
            
          }
    
    )


  }
  editSerie(val){
 
    this.variable = !this.variable;
    this.serieservice.edite(val).subscribe(
      data=>{
      
        if (data) {
          // console.log(data.username)
        const user = data ;
        this.idmod =user.id;
        this.codeserie = user.codeserie;
        this.libelleserie =user.libelleserie;

        this.loginForm.get('idmod').disable();
        this.loginForm.get('codeserie').enable();
        this.loginForm.get('libelleserie').enable();
        }
   
      }
    )
     }
     onSubmit() {

      if (this.loginForm.value.codeserie!=='') 
      {
        this.codeseriechange= this.loginForm.value.codeserie;
      
      }
     else {
       this.codeseriechange=this.codeserie; 
     }
     if(this.loginForm.value.libelleserie!==''){
    
         this.libelleseriechange= this.loginForm.value.libelleserie
     
     }else{
       this.libelleseriechange=this.libelleserie;
  
     }
   
  
      const serie={
        codeserie:this.codeseriechange,
        libelleserie:this.libelleseriechange,

    }
    console.log(serie);
      // this.submitted = true;
  
  
  
      // stop here if form is invalid
      // if (this.loginForm.invalid) {
      //     return;
      // }
  
      // this.loading = true;
      
     this.serieservice.modifier(this.idmod,serie)
          .pipe(first())
          .subscribe(
              data => {
                alert(JSON.stringify (data["message"]));
                this.serieservice.getAllSerie().subscribe(
                  data=>{
                    this.allserie=data;
                      // console.log(data);  
            
                  }
                )
              },
              
              error => {
                alert('code serie or libelle serie is incorrect')                                                                               
                  this.loading = false;
              });
  }
  }
  
 

 



  

