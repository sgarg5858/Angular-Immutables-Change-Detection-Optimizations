import { Injectable } from '@angular/core';

export interface Engineer{
  id:number;
  name:string;
  skillLevel:number;
  domain:'Frontend'|'Backend';
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getEngineers(domain:'Frontend'|'Backend'):Engineer[]
  {
    let engineers:Engineer[]=[];
    for(let i=0;i<200;i++)
    {
      engineers.push({
        id:i+1,
        name: `${domain} Engineer - ${i+1}`,
        skillLevel : (i%30) + 80,
        domain
      })
    }
    return engineers;
  }
}
