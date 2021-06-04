import { RolesService } from './../../services/roles.service';
import { UsersService } from './../../services/users.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/user';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-ajou-user',
  templateUrl: './ajou-user.component.html',
  styleUrls: ['./ajou-user.component.scss']
})
export class AjouUserComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  user:User;
  Allroles:any
  constructor(private formBuilder: FormBuilder,
    private alertService: AlertService,
    private router: Router,
    private userservice:UsersService,
    private roles:RolesService
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['',[ Validators.required,Validators.minLength(6)]],
      nomComplet: ['', Validators.required],
      profil: ['', Validators.required]
  });
  this.roles.getRoles().subscribe(
    data=>{this.Allroles=data;
    // console.log(data);
  }                                                                       
     )
  }                                                                                                                                                                           
  get f() { return this.loginForm.controls; }

  onSubmit() {
    const user={
      username:this.loginForm.value.username,
      password:this.loginForm.value.password,
      nomComplet:this.loginForm.value.nomComplet,
      isActive:true,
      profil:`api/roles/${this.loginForm.value.profil}`,
  }
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.userservice.Isersion(user)
        .pipe(first())
        .subscribe(
            data => {
              alert(JSON.stringify (data["message"]));
                this.router.navigate(['default/lister_user']);
            },
            
            error => {
              alert('Invalide')                                                                               
                this.loading = false;
            });
}


}
