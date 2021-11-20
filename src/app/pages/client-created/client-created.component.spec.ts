import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCreatedComponent } from './client-created.component';

describe('ClientCreatedComponent', () => {
  let component: ClientCreatedComponent;
  let fixture: ComponentFixture<ClientCreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientCreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
