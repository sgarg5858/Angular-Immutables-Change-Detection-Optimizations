import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Engineer } from '../data.service';

@Component({
  selector: 'app-just-engineer-list',
  templateUrl: './just-engineer-list.component.html',
  styleUrls: ['./just-engineer-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class JustEngineerListComponent implements OnInit {

  constructor() { }
  @Input() engineers:Engineer[] = [];

  ngOnInit(): void {
  }

  getSalary(skillLevel:number,salary:number=1):number
  {
    if(skillLevel<2) {
      console.log("Calculating")
      return salary;
    }
    return this.getSalary(skillLevel-1,salary*skillLevel);
  }

}
