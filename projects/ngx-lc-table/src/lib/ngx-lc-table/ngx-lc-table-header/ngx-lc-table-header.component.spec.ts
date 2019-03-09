import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLcTableHeaderComponent } from './ngx-lc-table-header.component';

describe('NgxLcTableHeaderComponent', () => {
  let component: NgxLcTableHeaderComponent;
  let fixture: ComponentFixture<NgxLcTableHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLcTableHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLcTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
