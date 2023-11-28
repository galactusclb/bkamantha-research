import { Component, OnInit } from '@angular/core';
import { ISeed } from '@core/models/seed';
import { BehaviorSubject, map, tap } from 'rxjs';
import { SeedService } from 'src/app/services/seed.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  dates: number[] | undefined = Array.from(Array(12).keys());

  selectedDate?: number = 12;

  rows: ISeed[] | undefined = [];

  isLoading: boolean = false;

  constructor(private seedsService: SeedService) {}

  fetchData() {
    this.isLoading = true;

    this.seedsService.getSeeds().subscribe(
      (res) => {
        this.rows = res?.result;
        this.isLoading = false;
      },
      (err) => {
        console.error(err);
        this.isLoading = false;
      }
    );
  }

  onSelectDate(date: number) {
    this.selectedDate = date;
  }
}
