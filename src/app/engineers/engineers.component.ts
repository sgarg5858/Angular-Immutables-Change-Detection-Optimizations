import { Component, OnInit } from '@angular/core';
import { DataService, Engineer } from '../data.service';

@Component({
  selector: 'app-engineers',
  templateUrl: './engineers.component.html',
  styleUrls: ['./engineers.component.scss']
})
export class EngineersComponent implements OnInit {

  constructor(private dataService:DataService) { }
  frontendEngineers:Engineer[]=[];
  backendEngineers:Engineer[]=[];

  ngOnInit(): void {
    this.frontendEngineers = this.dataService.getEngineers('Frontend');
    this.backendEngineers = this.dataService.getEngineers('Backend');
  }
  addEngineer(name:string,domain:'Frontend'|'Backend'){
    if(domain=='Frontend')
    {
      this.frontendEngineers=[{id:this.frontendEngineers.length,name,skillLevel:55,domain},...this.frontendEngineers,]
    }
    else
    {
      this.backendEngineers=[{id:this.backendEngineers.length,name,skillLevel:55,domain},...this.backendEngineers]
    }
  }

}
