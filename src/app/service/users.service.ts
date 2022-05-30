import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserDetailResponse} from "../type/UserDetailResponse";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) {
  }

  getUsers(min: number, max: number, offset: number, limit: number, sort: string): Observable<UserDetailResponse> {
    let params = new HttpParams();
    params = params.append('min', min);
    params = params.append('max', max);
    params = params.append('offset', offset);
    params = params.append('limit', limit);
    params = params.append('sort', sort);
    return this.http.get<UserDetailResponse>(`${this.baseUrl}/users`, {params: params});
  }
}
