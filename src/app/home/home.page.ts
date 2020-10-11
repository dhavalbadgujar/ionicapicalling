import { Component } from '@angular/core';
import { UserService } from '../api/user.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userDetails: any = [];

  constructor(public userService: UserService) { }


  GetUserDetails() {
    this.userService.GetUsers().subscribe((data) => {
      const anyData = data;
      this.userDetails = anyData;

      console.log(this.userDetails);



    });
  }

}
