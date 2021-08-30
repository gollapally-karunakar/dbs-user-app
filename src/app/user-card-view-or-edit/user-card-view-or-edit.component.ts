import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditPopupComponent } from '../edit-popup/edit-popup.component';

@Component({
  selector: 'app-user-card-view-or-edit',
  templateUrl: './user-card-view-or-edit.component.html',
  styleUrls: ['./user-card-view-or-edit.component.css']
})
export class UserCardViewOrEditComponent implements OnInit {
  
  /**Data sharing declaration starts */
  @Input() set getData(data:any){
    this.getDataFromUserList(data);
  }
  /**Data sharing declaration ends */

  /**Varibale declaration starts */
   public userListToShow:any = [];
  /**Varibale declaration ends */

  /**Constructor starts */
  constructor(public dialog: MatDialog) { }
  /**Constructor ends */

  /**
   * ngOnInIt
  */
  ngOnInit(): void {
  }

  /**
   * Get all users function
   * date : 29-08-2021
   * @param dataFromUserList 
   */
  getDataFromUserList(dataFromUserList:any){
    console.log("==========>from UserCardViewOrEditComponent",dataFromUserList);
    this.userListToShow = dataFromUserList ? dataFromUserList : [];
  }

  /**
   * On Edit user click function
   * date : 29-08-2021
   * @param dataItem 
   */
  onEditUser(dataItem:any){
    const dialogRef = this.dialog.open(EditPopupComponent, {
      width: '70%',
      height:'340px',
      disableClose:true,
      data: dataItem
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      if(result){
        let ind = this.userListToShow.findIndex((val:any)=>{return val.id === result.id});
        if(ind !== -1){
          this.userListToShow[ind] = result;
        }
      }
    });
  }

}
