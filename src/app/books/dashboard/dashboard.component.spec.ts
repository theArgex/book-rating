import { BookRatingService } from './../shared/book-rating.service';
import { BookComponent } from './../book/book.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Book } from '../shared/book';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {

    const bookRatingMock = {
      rateUp: book => book,
      checkDisableRateUp: () => true,
      checkDisableRateDown: () => true
    };

    await TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        BookComponent
      ],
      providers: [
        {
          provide: BookRatingService,
          useValue: bookRatingMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('doRateUp() should forward all calls to BookRatingService', () => {

    const rs = TestBed.inject(BookRatingService);

    spyOn(rs, 'rateUp').and.callThrough();

    const testBook = { isbn: '000' } as Book;
    component.doRateUp(testBook);

    expect(rs.rateUp).toHaveBeenCalledOnceWith(testBook);
  });
});
