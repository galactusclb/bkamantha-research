import { Component } from '@angular/core';
import { GrowthService } from '@core/services/growth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  dates: number[] | undefined = Array.from(Array(24).keys())

  selectedDate?: number = 10

  connectDeviceData = {
    isConnected: false,
    isLoading: false
  }

  captureData = {
    isCaptured: false,
    isLoading: false
  }

  constructor(private growthService: GrowthService) { }

  onSelectDate(date: number) {
    this.selectedDate = date
  }

  onConnectToDevice() {
    this.connectDeviceData.isLoading = true

    this.growthService.connectToDevice().subscribe(
      res => {
        this.connectDeviceData = { isConnected: res, isLoading: false }
      },
      err => {
        console.error(err);

        this.connectDeviceData.isLoading = false
      }
    )
  }

  onCapture() {
    this.captureData.isLoading = true

    this.growthService.capture().subscribe(
      res => {
        this.captureData = { isCaptured: res, isLoading: false }
      },
      err => {
        console.error(err);

        this.captureData.isLoading = false
      }
    )
  }
}
