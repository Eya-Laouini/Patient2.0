import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbynameComponent } from './searchbyname.component';

describe('SearchbynameComponent', () => {
  let component: SearchbynameComponent;
  let fixture: ComponentFixture<SearchbynameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbynameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
