import { StaticService } from './../../services/static.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss']
})
export class StaticComponent implements OnInit {

  constructor(private st:StaticService) { }
allclasse
allserie
alleleve;
allmat
allniv
  ngOnInit() {
    this.st.getNbClasse().subscribe(
      data=>{
        this.allclasse=data;
          // console.log(data);  

      }
    ),
    this.st.getNbEleve().subscribe(
      data=>{
        this.alleleve=data;
          // console.log(data);  

      }
    ),
    this.st.getNbMat().subscribe(
      data=>{
        this.allmat=data;
          // console.log(data);  

      }
    ),
    this.st.getNbSerie().subscribe(
      data=>{
        this.allserie=data;
          // console.log(data);  

      }
    ),
    this.st.getNbNiv().subscribe(
      data=>{
        this.allniv=data;
          // console.log(data);  

      }
    )
    
  }

}
