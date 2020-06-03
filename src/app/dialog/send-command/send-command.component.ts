import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Device } from 'src/app/modules/device/device.component';
import { DeviceService } from 'src/app/services/device.service';
import { CommandServiceService } from 'src/app/services/command-service.service';

@Component({
  selector: 'app-send-command',
  templateUrl: './send-command.component.html',
  styleUrls: ['./send-command.component.scss']
})
export class SendCommandComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SendCommandComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Device,
    public deviceService: DeviceService,public commandService: CommandServiceService) { }
  ngOnInit() {
  }
  submit() {
    // emppty stuff
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

    public confirmAdd(): void {
      this.deviceService.createDevice(this.data).subscribe(resp=>{
        console.log(resp);
      });
    }

}
