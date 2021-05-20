import { first } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/app/services/connexion.service';
import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  alluser;
  loginForm:FormGroup
  username ='';
  idmod:any
  loading = false;   
password ='';
nomComplet ='';
usechange;
passwordchange;
nomchange;
variable : any = false;

  constructor(private connexion:ConnexionService,
    private user:UsersService,
    private router:Router,
    private authenticationService:ConnexionService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      nomComplet: new FormControl(''),
      profil: new FormControl(''),
      id: new FormControl(''),


    });
    this.user.UserCon().subscribe(
      data=>{ 
        this.alluser=data;
        // console.log(data)
      }
    )
    this.onChanges();
  }
  onChanges(): void {
    this.loginForm.get('id').valueChanges.subscribe(val => {
      // console.log(val);
     
      this.editUser(val);
    });
  }
  get f() { return this.loginForm.controls; }

  editUser(val){
 
    this.variable = !this.variable;
    this.user.edite(val).subscribe(
      data=>{
      
        if (data) {
          // console.log(data.username)
        const user = data ;
        this.idmod =user.id;
        this.username = user.username;
        this.password = user.password;
        this.nomComplet =user.nomComplet;
        
        this.loginForm.get('username').enable();
        this.loginForm.get('password').enable();
        this.loginForm.get('nomComplet').enable();
      
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
  
  
      const user={
        username:this.usechange,
        password:this.passwordchange,
        nomComplet:this.nomchange,
       
    }
    console.log(user);
      // this.submitted = true;
  
  
  
      // stop here if form is invalid
      // if (this.loginForm.invalid) {
      //     return;
      // }
  
      // this.loading = true;
      
     this.user.editeProfil(this.idmod,user)
          .pipe(first())
          .subscribe(
              data => {
                alert(JSON.stringify (data["message"]));
                this.connexion.login(this.usechange ,this.passwordchange)
            .pipe(first())
            .subscribe(
                data => {
                  
                    this.router.navigate(['default/static']);
                    this.user.UserCon().subscribe(
                      data=>{ 
                        this.alluser=data;
                        // console.log(data)
                      }
                    )
                }
                
            );
              },
              
              error => {
                alert('Username or password is incorrect')                                                                               
                  this.loading = false;
              });
  }
  logout(){
    this.connexion.logout();
    this.router.navigate(['/']);
    
  }
}
