import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private baseUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) { }

   upload(file: File) {
    let formParams = new FormData();
    formParams.append('file', file)
    return this.http.post(`${this.baseUrl}/upload`, formParams)
  }



}
