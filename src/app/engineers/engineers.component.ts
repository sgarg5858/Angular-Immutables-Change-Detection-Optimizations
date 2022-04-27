import { Component, OnInit } from '@angular/core';
import { DataService, Engineer } from '../data.service';
import {List} from 'immutable';
@Component({
  selector: 'app-engineers',
  templateUrl: './engineers.component.html',
  styleUrls: ['./engineers.component.scss']
})
export class EngineersComponent implements OnInit {

  constructor(private dataService:DataService) { }
  frontendEngineers:List<Engineer> = List.of();
  backendEngineers:List<Engineer>= List.of()

  ngOnInit(): void {
    this.frontendEngineers = List.of(...this.dataService.getEngineers('Frontend'));
    this.backendEngineers = List.of(...this.dataService.getEngineers('Backend'));
  }
  addEngineer(name:string,domain:'Frontend'|'Backend'){
    if(domain=='Frontend')
    {
      this.frontendEngineers= this.frontendEngineers.unshift({id:this.frontendEngineers.size,name,skillLevel:55,domain})
    }
    else
    {
      this.backendEngineers=this.backendEngineers.unshift({id:this.frontendEngineers.size,name,skillLevel:55,domain})
    }
  }

}
