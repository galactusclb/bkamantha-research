import { Component, OnInit } from '@angular/core';
import { ISeeding } from '@core/models/seeding';
import { SeedingService } from 'src/app/services/seeding.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  dates: number[] | undefined = Array.from(Array(12).keys())

  selectedDate?: number = 12

  isLoading: boolean = false;
  rows: ISeeding[] | undefined = [];


  constructor(private seedingService: SeedingService) { }

  onSelectDate(date: number) {
    this.selectedDate = date
  }



  fetchData() {
    this.isLoading = true;

    this.seedingService.getSeedingList().subscribe(
      (res) => {
        console.log(res);

        this.rows = res;
        this.isLoading = false;
      },
      (err) => {
        console.error(err);
        this.isLoading = false;
      }
    );
  }


}
