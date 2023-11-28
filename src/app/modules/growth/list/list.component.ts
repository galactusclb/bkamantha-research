import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  dates: number[] | undefined = Array.from(Array(24).keys())

  selectedDate?: number = 10

  onSelectDate(date: number) {
    this.selectedDate = date
  }
}
