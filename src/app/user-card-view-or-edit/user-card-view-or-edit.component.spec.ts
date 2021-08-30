import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardViewOrEditComponent } from './user-card-view-or-edit.component';

describe('UserCardViewOrEditComponent', () => {
  let component: UserCardViewOrEditComponent;
  let fixture: ComponentFixture<UserCardViewOrEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardViewOrEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardViewOrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
