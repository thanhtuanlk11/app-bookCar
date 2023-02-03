import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaccauhoithuonggapPage } from './caccauhoithuonggap.page';

describe('CaccauhoithuonggapPage', () => {
  let component: CaccauhoithuonggapPage;
  let fixture: ComponentFixture<CaccauhoithuonggapPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CaccauhoithuonggapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaccauhoithuonggapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
