import { SerieService } from './../../services/serie.service';
import { first } from 'rxjs/operators';
import { AlertService } from './../../services/alert.service';
import { NiveauService } from './../../services/niveau.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-serie',
  templateUrl: './ajout-serie.component.html',
  styleUrls: ['./ajout-serie.component.scss']
})
export class AjoutSerieComponent implements OnInit {
  loginForm: FormGroup
  submitted = false;
  loading = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private serie:SerieService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      codeserie: ['', Validators.required],
      libelleserie: ['', Validators.required],

  });
  }


  get f() { return this.loginForm.controls; }

  Enregistrer() {
    const series={
      codeserie:this.loginForm.value.codeserie,
      libelleserie:this.loginForm.value.libelleserie,
     
  }
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.serie.Isersion(series)
    .pipe(first())
    .subscribe(
        data => {
          alert(JSON.stringify (data["message"]));
            this.router.navigate(['default/lister_serie']);
        },
        
        error => {
          this.alertService.error                                                                             
            this.loading = false;
        });
   
}

}
