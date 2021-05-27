import { first } from 'rxjs/operators';
import { NiveauService } from './../../services/niveau.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-niv',
  templateUrl: './list-niv.component.html',
  styleUrls: ['./list-niv.component.scss']
})
export class ListNivComponent implements OnInit {
  allniv:any
  loginForm: FormGroup;
  loading = false;                                                                                                                                                                                                                                                                                  
  submitted = false;
  libelleniveau ='';
 
  idmod:any
  libelleniveauchange;
  variable : any = false;
  constructor(private nivservice:NiveauService,
    private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.loginForm = new FormGroup({
      libelleniveau: new FormControl(''),
      id: new FormControl(''),


    });
    this.nivservice.getAllNiv().subscribe(
      data=>{
        this.allniv=data;
          // console.log(data);  

      }
    ),
    this.onChanges();

  }
  onChanges(): void {
    this.loginForm.get('id').valueChanges.subscribe(val => {
      // console.log(val);
     
      this.editniv(val);
    });
  }
  get f() { return this.loginForm.controls; }
  
  Action(id:number){
    this.nivservice.suppression(id).subscribe(
      data=>{
        alert(JSON.stringify(data["message"]))
        this.nivservice.getAllNiv().subscribe(
          data=>{
            this.allniv=data;
              // console.log(data);  
    
          }
        )
       
      },
      
          error=>{
            
            alert( JSON.stringify (error["message"]))
            
          }
    
    )


  }
  editniv(val){
 
    this.variable = !this.variable;
    this.nivservice.edite(val).subscribe(
      data=>{
      
        if (data) {
          // console.log(data.username)
        const niveau = data ;
        this.idmod =niveau.id;
        this.libelleniveau =niveau.libelleniveau;

        this.loginForm.get('idmod').disable();
        this.loginForm.get('libelleniveau').enable();
        }
   
      }
    )
     }
     onSubmit() {

      if (this.loginForm.value.libelleniveau!=='') 
      {
        this.libelleniveauchange= this.loginForm.value.libelleniveau;
      
      }
     else {
       this.libelleniveauchange=this.libelleniveau; 
     }
    
  
      const nive={
        libelleniveau:this.libelleniveauchange,
        

    }
    console.log(nive);
     
    this.nivservice.modifier(this.idmod,nive)
          .pipe(first())
          .subscribe(
            data=>{
              alert(JSON.stringify(data["message"]))
              this.nivservice.getAllNiv().subscribe(
                data=>{
                  this.allniv=data;
                    // console.log(data);  
          
                }
              )
             
            },
              
              error => {
                alert('code niveau or libelle niveau is incorrect')                                                                               
                  this.loading = false;
              });
      
     
  }
}
