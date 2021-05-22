import { ProfService } from './../../serives/prof.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-prof',
  templateUrl: './list-prof.component.html',
  styleUrls: ['./list-prof.component.scss']
})
export class ListProfComponent implements OnInit {
allpro
  constructor(private prof:ProfService) { }

  ngOnInit() {
    this.prof.getProf().subscribe(
      data=>{this.allpro=data;
      //  console.log(data);
    })
  }

}
