import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HuongdanthuexePage } from './huongdanthuexe.page';

describe('HuongdanthuexePage', () => {
  let component: HuongdanthuexePage;
  let fixture: ComponentFixture<HuongdanthuexePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HuongdanthuexePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HuongdanthuexePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
