import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from '../api.service';
import { of } from 'rxjs';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    apiService = TestBed.inject(ApiService); // Lấy instance của ApiService từ TestBed
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should call getMokingData() on ngOnInit()', () => {
    // Giả lập spy cho phương thức getData() của ApiService
    spyOn(apiService, 'getData').and.returnValue(of({ id: 1, foo: 'bar' }));;

    // Gọi phương thức ngOnInit() của component
    component.ngOnInit();

    // Kiểm tra xem phương thức getData() đã được gọi hay chưa
    expect(apiService.getData).toHaveBeenCalled();
  });

});
