import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class NameInputComponent implements OnInit {

  constructor() { }
  @Output() addThisEngineer = new EventEmitter<string>();

  engineer = new FormControl('',[Validators.required]);

  addEngineer()
  {
    if(this.engineer.valid)
    {
      this.addThisEngineer.emit(this.engineer.value);
    }
  }

  ngOnInit(): void {
  }

}
