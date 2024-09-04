import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProseComponent } from './prose.component';

describe('ProseComponent', () => {
  let component: ProseComponent;
  let fixture: ComponentFixture<ProseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
