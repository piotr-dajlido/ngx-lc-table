import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLcTableColumnComponent } from './ngx-lc-table-column.component';

describe('NgxLcTableColumnComponent', () => {
  let component: NgxLcTableColumnComponent;
  let fixture: ComponentFixture<NgxLcTableColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLcTableColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLcTableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
