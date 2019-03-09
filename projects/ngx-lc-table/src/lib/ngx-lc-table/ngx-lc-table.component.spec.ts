import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLcTableComponent } from './ngx-lc-table.component';

describe('NgxLcTableComponent', () => {
  let component: NgxLcTableComponent;
  let fixture: ComponentFixture<NgxLcTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLcTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLcTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
