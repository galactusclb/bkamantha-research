import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.backendUrl

@Injectable({
  providedIn: 'root'
})
export class GrowthService {

  constructor(private http: HttpClient) { }

  connectToDevice(): Observable<boolean> {
    return this.http.get<boolean>(BACKEND_URL + '/connect')
  }

  capture(): Observable<boolean> {
    return this.http.get<boolean>(BACKEND_URL + '/capture')
  }

  cancelCapture(): Observable<boolean> {
    return this.http.get<boolean>(BACKEND_URL + '/cancel')
  }

}
