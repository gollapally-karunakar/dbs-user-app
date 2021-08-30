import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlertPopupComponent } from '../alert-popup/alert-popup.component';
import { navigationDetails } from '../app.constant';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  /**Varibale declaration starts */
  public userFormGroup:any;
  /**Varibale declaration ends */

  /**Constructor starts */
  constructor(private userService:UserServiceService,public dialog: MatDialog) { 
    this.userFormGroup = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      website: new FormControl('')
    });
  }
  /**Constructor ends */

  /**
   * ngOnInIt
  */
  ngOnInit(): void {
  }

  /**
   * Create User function
   * date : 29-08-2021
   * @param formValues 
  */
  createUser(formValues:any){
    console.log('formValues',formValues);
    if(formValues.name && formValues.email && formValues.phone){
      let user = {
        name:formValues.name,
        email:formValues.email,
        phone:formValues.phone,
        website:formValues.website
      }
      let url:any = "https://jsonplaceholder.typicode.com/users";
      this.userService.createUser(url,JSON.stringify(user)).subscribe((resp)=>{
        console.log("============>",resp);
        if(resp){
          const dialogRef = this.dialog.open(AlertPopupComponent, {
            width: '60%',
            height:'170px',
            disableClose:true,
            data: {message:"User added successfully...!"}
          });

          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed',result);
            this.resetForm();
          });
        }
      });  
    }
  }

  /**
   * On reset form function
   * date : 30-08-2021
   */
  resetForm(){
    this.userFormGroup.reset();
  }
}
