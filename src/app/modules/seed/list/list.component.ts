import { Component } from '@angular/core';
import { map, tap } from 'rxjs';
import { SeedService } from 'src/app/services/seed.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  dates: number[] | undefined = Array.from(Array(12).keys())

  selectedDate?: number = 12

  rows$ = this.seedsService.getSeeds().pipe(
    map((items) => items?.results),
  )

  constructor(private seedsService: SeedService) { }

  onSelectDate(date: number) {
    this.selectedDate = date
  }
}
