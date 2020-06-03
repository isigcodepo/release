import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDialog} from '@angular/material';
import { AddDeviceDialogComponent } from 'src/app/dialog/add-device-dialog/add-device-dialog.component';
import { EditDeviceDialogComponent } from 'src/app/dialog/edit-device-dialog/edit-device-dialog.component';
import { DeleteDeviceDialogComponent } from 'src/app/dialog/delete-device-dialog/delete-device-dialog.component';
import { DeviceService } from 'src/app/services/device.service';
import { DOCUMENT } from '@angular/common';
import { SendCommandComponent } from 'src/app/dialog/send-command/send-command.component';

export interface Device {
  id: number;
  externalId: string;
  identity: string;
  designation: string;
  command:number;
  value: string;
}

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  ELEMENT_DATA: Device[];

  displayedColumns: string[] = ['id', 'externalId', 'identity', 'designation', 'actions'];
  dataSource = new MatTableDataSource<Device>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  index: number;
  id: number;

  constructor(public dialog: MatDialog,public deviceService: DeviceService,@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.getAllDevices();
    this.dataSource.paginator = this.paginator;
  }

  getAllDevices(){
    this.deviceService.getDevicesList().subscribe(resp=>this.dataSource.data=resp as Device[]);
  }

  applyFliter(filterValue: string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }

  addNew(){
    const dialogRef = this.dialog.open(AddDeviceDialogComponent, {
      data: {issue: {} }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        this.document.location.reload();
      }
    });
  }
  startEdit(i: number, id: number, identity: string, externalId: string, designation: string){
    this.id = id;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(EditDeviceDialogComponent, {
      data: {id: id, identity: identity, externalId: externalId, designation: designation}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.document.location.reload();
      }
    });
  }
  deleteItem(i: number, id: number, identity: string, externalId: string, designation: string){
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(DeleteDeviceDialogComponent, {
      data: {id: id, identity: identity, externalId: externalId, designation: designation}
    });

     dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
       // this.document.location.reload();
      }
    });
  }
  sendCommand(i: number, id: number, identity: string, externalId: string, designation: string){
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(SendCommandComponent, {
      data: {id: id, identity: identity, externalId: externalId, designation: designation}
    });

     dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
       // this.document.location.reload();
      }
    });
  }

}
