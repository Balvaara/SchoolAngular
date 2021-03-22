import { RolesService } from './../../services/roles.service';
import { first } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lister-user',
  templateUrl: './lister-user.component.html',
  styleUrls: ['./lister-user.component.scss']
})
export class ListerUserComponent implements OnInit {
alluser:any
loginForm: FormGroup;
loading = false;                                                                                                                                                                                                                                                                                  
submitted = false;
username ='';
password ='';
nomComplet ='';
idmod:any
profil=''
profilid;
usechange;
passwordchange;
nomchange;
proChange
Allroles:any
variable : any = false;
  constructor(private userservice:UsersService,
    private formBuilder: FormBuilder,
    private roles:RolesService) { }

  ngOnInit() {
    this.roles.getRoles().subscribe(
      data=>{this.Allroles=data;
      // console.log(data);
    }                                                                       
       ),
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      nomComplet: new FormControl(''),
      profil: new FormControl(''),
      id: new FormControl(''),


    });
    this.userservice.getAllUsers().subscribe(
      data=>{
        this.alluser=data;
          // console.log(data);  

      }
    ),
    this.onChanges();
  }
  onChanges(): void {
    this.loginForm.get('id').valueChanges.subscribe(val => {
      // console.log(val);
     
      this.editUser(val);
    });
  }
  get f() { return this.loginForm.controls; }
  Etat(id:number){
    this.userservice.getEtat(id).subscribe(
      data=>{
        alert(JSON.stringify(data["message"]))
        // console.log(data);
        this.userservice.getAllUsers().subscribe(
          data=>{
            this.alluser=data;
          
          // console.log(data); 
          }
        )
       

      },
      
          error=>{
            alert(JSON.stringify (error["message"]))
          }
    
    )
  }
  Action(id:number){
    this.userservice.suppression(id).subscribe(
      data=>{
        alert(JSON.stringify(data["message"]))
        this.userservice.getAllUsers().subscribe(
          data=>{
            this.alluser=data;
              // console.log(data);  
    
          }
        )
       
      },
      
          error=>{
            
            alert( JSON.stringify (error["message"]))
            
          }
    
    )


  }

  editUser(val){
 
  this.variable = !this.variable;
  this.userservice.edite(val).subscribe(
    data=>{
    
      if (data) {
        // console.log(data.username)
      const user = data ;
      this.idmod =user.id;
      this.username = user.username;
      this.password =user.password;
      this.nomComplet =user.nomComplet;
      this.profil =user.profil.libelleRole
      this.profilid =user.profil.id
      
      this.loginForm.get('idmod').disable();
      this.loginForm.get('username').enable();
      this.loginForm.get('password').enable();
      this.loginForm.get('nomComplet').enable();
       this.loginForm.get('profil').enable();
      }
 
    }
  )
   }



   onSubmit() {

    if (this.loginForm.value.username!=='') 
    {
      this.usechange= this.loginForm.value.username;
    
    }
   else {
     this.usechange=this.username; 
   }
   if(this.loginForm.value.nomComplet!==''){
  
       this.nomchange= this.loginForm.value.nomComplet
   
   }else{
     this.nomchange=this.nomComplet;

   }
   if(this.loginForm.value.password!==''){
  
     this.passwordchange= this.loginForm.value.password
   
 }else{
   this.passwordchange=this.password;

 }
 if(this.loginForm.value.profil!==''){
  
  this.proChange= this.loginForm.value.profil

}else{
this.proChange=this.profilid;

}

    const user={
      username:this.usechange,
      password:this.passwordchange,
      nomComplet:this.nomchange,
      isActive:true,
      profil:`api/roles/${this.proChange}`,
  }
  console.log(user);
    // this.submitted = true;



    // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //     return;
    // }

    // this.loading = true;
    
   this.userservice.modifier(this.idmod,user)
        .pipe(first())
        .subscribe(
            data => {
              alert(JSON.stringify (data["message"]));
              this.userservice.getAllUsers().subscribe(
                data=>{
                  this.alluser=data;
                    // console.log(data);  
          
                }
              )
            },
            
            error => {
              alert('Username or password is incorrect')                                                                               
                this.loading = false;
            });
}



}
