import { NiveauService } from './../../services/niveau.service';
import { first } from 'rxjs/operators';
import { ClasseService } from './../../services/classe.service';
import { Router } from '@angular/router';
import { AlertService } from './../../services/alert.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-niv',
  templateUrl: './ajout-niv.component.html',
  styleUrls: ['./ajout-niv.component.scss']
})
export class AjoutNivComponent implements OnInit {
  loginForm: FormGroup
  submitted = false;
  loading = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private niv:NiveauService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      libelleniveau: ['', Validators.required],

  });
  }

  get f() { return this.loginForm.controls; }

  Enregistrer() {
    const niveaux={
     
      libelleniveau:this.loginForm.value.libelleniveau,
     
  }
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.niv.Isersion(niveaux)
    .pipe(first())
    .subscribe(
        data => {
          alert(JSON.stringify (data["message"]));
            this.router.navigate(['default/lister_niv']);
        },
        
        error => {
          this.alertService.error                                                                             
            this.loading = false;
        });
   
}
}
