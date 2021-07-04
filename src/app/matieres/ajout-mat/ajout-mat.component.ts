import { first } from 'rxjs/operators';
import { AlertService } from './../../services/alert.service';
import { MatiereService } from './../../services/matiere.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-mat',
  templateUrl: './ajout-mat.component.html',
  styleUrls: ['./ajout-mat.component.scss']
})
export class AjoutMatComponent implements OnInit {
  loginForm: FormGroup
  submitted = false;
  loading = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private mat:MatiereService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      libellemat: ['', Validators.required],

  });
  }

  get f() { return this.loginForm.controls; }

  Enregistrer() {
    const classes_matiere={
      libellemat:this.loginForm.value.libellemat,
     
     
  }
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.mat.Isersion(classes_matiere)
    .pipe(first())
    .subscribe(
        data => {
          alert(JSON.stringify (data["message"]));
            this.router.navigate(['default/lister_matiere']);
        },
        
        error => {
          this.alertService.error                                                                             
            this.loading = false;
        });
   
}
}
