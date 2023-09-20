import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { CoreModule } from '../../core.module';

@Component({
  selector: 'app-admincalendar',
  templateUrl: './admincalendar.component.html',
  styleUrls: ['./admincalendar.component.scss'],

})
export class AdmincalendarComponent implements OnInit {

  selected: Date | null | undefined;
  dateTime: Date| null | undefined;
  constructor(public router: Router) {
  }
  ngOnInit(): void {
    this.dateTime=new Date();
    timer(0,1000).subscribe(()=>{
      this.dateTime=new Date()
    })
  }
}
