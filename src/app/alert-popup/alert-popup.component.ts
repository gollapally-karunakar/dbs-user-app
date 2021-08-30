import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-popup',
  templateUrl: './alert-popup.component.html',
  styleUrls: ['./alert-popup.component.css']
})
export class AlertPopupComponent implements OnInit {

  /**Constructor starts */
  constructor(public dialogRef: MatDialogRef<AlertPopupComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }
  /**Constructor ends */

  /**
   * ngOnInit
   */
  ngOnInit(): void {
  }

  /**
   * On Ok button click function
   * date : 29-08-2021
   */
  onOkClick(){
    this.dialogRef.close();
  }

}
