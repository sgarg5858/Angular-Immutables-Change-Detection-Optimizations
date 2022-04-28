import { Component, Input, OnInit, Output,EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { List } from 'immutable';
import { Engineer } from '../data.service';

@Component({
  selector: 'app-engineer-list',
  templateUrl: './engineer-list.component.html',
  styleUrls: ['./engineer-list.component.scss'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class EngineerListComponent implements OnInit {

  @Input() label:string="";
  @Input() engineers:List<Engineer> = List.of();
  @Output() addThisEngineer= new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  

}
