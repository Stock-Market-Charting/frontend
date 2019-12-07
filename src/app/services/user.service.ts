import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  getUser(userId: number): Observable<any> {
    return this.apiService.get(`/users/${userId}`);
  }

  updateProfile(userId: number, body: any): Observable<any> {
    return this.apiService.put(`/users/${userId}/profiles`, body);
  }

  updatePassword(userId: number, body: any): Observable<any> {
    delete body.confirmedPassword;
    return this.apiService.put(`/users/${userId}/password`, body);
  }

  register(body: any): Observable<any> {
    delete body.confirmedPassword;
    return this.apiService.post('/registration', body);
  }

  verifyRegistration(token: string): Observable<any> {
    return this.apiService.post(`/registration/confirmation?token=${token}`, null)
  }
}
