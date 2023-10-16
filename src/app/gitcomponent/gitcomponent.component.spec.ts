import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitcomponentComponent } from './gitcomponent.component';

describe('GitcomponentComponent', () => {
  let component: GitcomponentComponent;
  let fixture: ComponentFixture<GitcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GitcomponentComponent]
    });
    fixture = TestBed.createComponent(GitcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
