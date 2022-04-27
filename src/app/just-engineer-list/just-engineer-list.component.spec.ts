import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustEngineerListComponent } from './just-engineer-list.component';

describe('JustEngineerListComponent', () => {
  let component: JustEngineerListComponent;
  let fixture: ComponentFixture<JustEngineerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustEngineerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JustEngineerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
