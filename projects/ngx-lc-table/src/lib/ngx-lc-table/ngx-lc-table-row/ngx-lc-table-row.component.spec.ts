import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLcTableRowComponent } from './ngx-lc-table-row.component';

describe('NgxLcTableRowComponent', () => {
  let component: NgxLcTableRowComponent;
  let fixture: ComponentFixture<NgxLcTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLcTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLcTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
