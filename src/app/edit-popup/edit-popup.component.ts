import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.css']
})
export class EditPopupComponent implements OnInit {
  /**Varibale declaration starts */
  public userEditFormGroup:any;
  /**Varibale declaration ends */

  /**Constructor starts */
  constructor(public dialogRef: MatDialogRef<EditPopupComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }
  /**Constructor ends */

  /**
   * ngOnInIt
  */
  ngOnInit(): void {
    console.log("this.data",this.data);
    this.userEditFormGroup = new FormGroup({
      name: new FormControl(this.data.name),
      email: new FormControl(this.data.email),
      phone: new FormControl(this.data.phone),
      website: new FormControl(this.data.website)
    })
  }

  /**
   * On Update button click function
   * date : 29-08-2021
   * @param actionType 
   */
  onUpdate(actionType:any){
    if(actionType && actionType === 'update'){
      if(this.userEditFormGroup.value.name && this.userEditFormGroup.value.email && this.userEditFormGroup.value.phone){
        this.data.name = this.userEditFormGroup.value.name;
        this.data.email = this.userEditFormGroup.value.email;
        this.data.phone = this.userEditFormGroup.value.phone;
        this.data.website = this.userEditFormGroup.value.website;
        this.dialogRef.close(this.data);  
      }
    }
    else{
      this.dialogRef.close();  
    }
  }
}
