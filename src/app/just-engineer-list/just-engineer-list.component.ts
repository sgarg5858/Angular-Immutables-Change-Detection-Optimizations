import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { List } from 'immutable';
import { Engineer } from '../data.service';
import { EngineerListComponent } from '../engineer-list/engineer-list.component';

@Component({
  selector: 'app-just-engineer-list',
  templateUrl: './just-engineer-list.component.html',
  styleUrls: ['./just-engineer-list.component.scss'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class JustEngineerListComponent implements OnInit, AfterViewInit {

  constructor(private engineerList:EngineerListComponent) { }
  @Input() engineers:List<Engineer> = List.of();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      this.engineerList.engineers=List.of({name:"Sanjay",id:1,skillLevel:50,domain:'Frontend'});
  }

}
