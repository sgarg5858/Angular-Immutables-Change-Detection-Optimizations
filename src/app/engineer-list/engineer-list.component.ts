import { Component, Input, OnInit, Output,EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Engineer } from '../data.service';

@Component({
  selector: 'app-engineer-list',
  templateUrl: './engineer-list.component.html',
  styleUrls: ['./engineer-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class EngineerListComponent implements OnInit {

  @Input() label:string="";
  @Input() engineers:Engineer[] = [];
  @Output() addThisEngineer = new EventEmitter<string>();

  engineer = new FormControl('',[Validators.required]);

  addEngineer()
  {
    if(this.engineer.valid)
    {
      this.addThisEngineer.emit(this.engineer.value);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  getSalary(skillLevel:number,salary:number=1):number
  {
    if(skillLevel<2) {
      console.log(this.label);
      return salary;
    }
    return this.getSalary(skillLevel-1,salary*skillLevel);
  }

}
