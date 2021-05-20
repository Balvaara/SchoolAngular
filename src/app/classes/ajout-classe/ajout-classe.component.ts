import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-classe',
  templateUrl: './ajout-classe.component.html',
  styleUrls: ['./ajout-classe.component.scss']
})
export class AjoutClasseComponent implements OnInit {
  loginForm: FormGroup
  submitted = false;
  loading = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router,) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      codeclasse: ['', Validators.required],
      libelleclasse: ['', Validators.required],

  });
  }

}
