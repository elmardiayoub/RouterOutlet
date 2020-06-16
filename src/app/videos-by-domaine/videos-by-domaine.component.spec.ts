import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosByDomaineComponent } from './videos-by-domaine.component';

describe('VideosByDomaineComponent', () => {
  let component: VideosByDomaineComponent;
  let fixture: ComponentFixture<VideosByDomaineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosByDomaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosByDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
