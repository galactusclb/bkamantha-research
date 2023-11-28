import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISeedsResponseData } from '@core/models/seed';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment"

const BACKEND_URL = environment.backendUrl

@Injectable({
  providedIn: 'root'
})
export class SeedService {

  constructor(private http: HttpClient) { }

  getSeeds(): Observable<ISeedsResponseData> {
    return this.http.get<ISeedsResponseData>(BACKEND_URL + '/seed/')
  }
}
