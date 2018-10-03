import { Component } from '@angular/core';
import {NgbCalendar, NgbDatepickerI18n, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {I18n, CustomDatepickerI18n} from './i18n/datepicker-i18n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }],
  
})
export class AppComponent {

  constructor(private calendar: NgbCalendar){

  }
  title = 'app';

  model: NgbDateStruct;
  date: {year: number, month: number};
  now:Date= new Date();

  ngOnInit(){
     this.selectToday()
   }

  selectToday() {
    this.model = {year: this.now.getFullYear(), month: this.now.getMonth() , day: this.now.getDate()};
  }
}
