import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLcTableFooterComponent } from './ngx-lc-table-footer.component';

describe('NgxLcTableFooterComponent', () => {
  let component: NgxLcTableFooterComponent;
  let fixture: ComponentFixture<NgxLcTableFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLcTableFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLcTableFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
