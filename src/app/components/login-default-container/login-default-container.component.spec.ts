import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDefaultContainerComponent } from './login-default-container.component';

describe('LoginDefaultContainerComponent', () => {
  let component: LoginDefaultContainerComponent;
  let fixture: ComponentFixture<LoginDefaultContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginDefaultContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginDefaultContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
