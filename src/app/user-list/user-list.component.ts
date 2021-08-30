import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  /**Varibale declaration starts */
  public userList:any = [];
  /**Varibale declaration ends */

  /**Constructor starts */
  constructor(private userService:UserServiceService) { }
  /**Constructor ends */

  /**
   * ngOnInIt
  */
  ngOnInit(): void {
    let url:any = "https://jsonplaceholder.typicode.com/users";
    this.userService.getAllUsers(url).subscribe((responce)=>{
      console.log("responce",responce);
      this.userList = responce ? responce : [];
    })
  }
}
