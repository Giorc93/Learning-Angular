import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidGameComponent } from './vid-game.component';

describe('VidGameComponent', () => {
  let component: VidGameComponent;
  let fixture: ComponentFixture<VidGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
