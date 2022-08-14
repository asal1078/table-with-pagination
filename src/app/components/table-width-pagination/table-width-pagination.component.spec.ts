import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWidthPaginationComponent } from './table-width-pagination.component';

describe('TableWidthPaginationComponent', () => {
  let component: TableWidthPaginationComponent;
  let fixture: ComponentFixture<TableWidthPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWidthPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWidthPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
