import { UsersService } from './../services/users.service';
import { Router } from '@angular/router';
import { ConnexionService } from './../services/connexion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.scss']
})
export class SiderbarComponent implements OnInit {
  popoverMessage='Voulez-vous vraiment decnnecter'
  alluser;
  constructor(private connexion:ConnexionService,
    private user:UsersService,
    private router:Router) { }

  ngOnInit() {
    this.user.UserCon().subscribe(
      data=>{ 
        this.alluser=data;
        console.log(data)
      }
    )
  }
  logout(){
    this.connexion.logout();
    this.router.navigate(['/']);
    
  }

}
