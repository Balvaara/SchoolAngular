import { StaticService } from './../../services/static.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss']
})
export class StaticComponent implements OnInit {
allMat;
allEl;
allCl;
allPr;
allS;
allUs;
allRole;
Bud;
  constructor(private stc:StaticService) { }

  ngOnInit() {
        this.stc.getNbClasse().subscribe(
          data=>
          {
            this.allCl=data;
          // console.log(data);
          }),
          this.stc.getNbEleve().subscribe(
          data=>
          {
            this.allEl=data;
          // console.log(data);
          }),
          this.stc.getNbMat().subscribe(
            data=>
            {
              this.allMat=data;
            // console.log(data);
            }),
            this.stc.getNbSerie().subscribe(
              data=>
              {
                this.allS=data;
              // console.log(data);
              }),
              this.stc.getBud().subscribe(
                data=>
                {
                  this.Bud=data;
                // console.log(data);
                }),
                this.stc.getNbProf().subscribe(
                  data=>
                  {
                    this.allPr=data;
                  // console.log(data);
                  }),
                  this.stc.getNbRole().subscribe(
                    data=>
                    {
                      this.allRole=data;
                    // console.log(data);
                    }),
                    this.stc.getNbUser().subscribe(
                      data=>
                      {
                        this.allUs=data;
                      // console.log(data);
                      })
    

}
}
