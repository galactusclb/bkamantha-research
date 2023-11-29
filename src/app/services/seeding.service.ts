import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISeeding } from '@core/models/seeding';
import { Observable } from 'rxjs';

import { environment } from "src/environments/environment"

const BACKEND_URL = environment.backendUrl

@Injectable({
  providedIn: 'root'
})
export class SeedingService {

  constructor(private http: HttpClient) { }

  getSeedingList(): Observable<ISeeding[]> {
    return this.http.get<ISeeding[]>(BACKEND_URL + '/seeding/')
  }
}
