import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCreateComponent } from './detail-create.component';

describe('DetailCreateComponent', () => {
  let component: DetailCreateComponent;
  let fixture: ComponentFixture<DetailCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
