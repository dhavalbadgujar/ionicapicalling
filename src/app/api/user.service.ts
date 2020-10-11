import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  GetUsers() {
    return this.http.get('http://localhost/CampusBusManagementSystem/driverDisplay.php');

  }
}
