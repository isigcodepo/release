import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatIconModule, MatFormField, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule, MatSelect, MatSelectModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { MapComponent } from 'src/app/modules/map/map.component';
import { DeviceComponent } from 'src/app/modules/device/device.component';
import { SettingComponent } from 'src/app/modules/setting/setting.component';
import {UsersComponent} from '../../modules/users/users.component';
import { AddDeviceDialogComponent } from 'src/app/dialog/add-device-dialog/add-device-dialog.component';
import { EditDeviceDialogComponent } from 'src/app/dialog/edit-device-dialog/edit-device-dialog.component';
import { DeleteDeviceDialogComponent } from 'src/app/dialog/delete-device-dialog/delete-device-dialog.component';
import { FormsModule } from '@angular/forms';
import { AddUserDialogComponentComponent } from 'src/app/dialog/add-user-dialog-component/add-user-dialog-component.component';
import { EditUserDialogComponentComponent } from 'src/app/dialog/edit-user-dialog-component/edit-user-dialog-component.component';
import { DeleteUserDialogComponentComponent } from 'src/app/dialog/delete-user-dialog-component/delete-user-dialog-component.component';
import { DetailDeviceComponent } from 'src/app/dialog/detail-device/detail-device.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import { PreferenceComponent } from 'src/app/modules/preference/preference.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { RxStompService } from '@stomp/ng2-stompjs';
import { ProgressWebsocketService } from 'src/app/services/progress.websocket.service';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    MapComponent,
    DeviceComponent,
    SettingComponent,
    UsersComponent,
    PreferenceComponent,
    AddDeviceDialogComponent,
    EditDeviceDialogComponent,
    DeleteDeviceDialogComponent,
    AddUserDialogComponentComponent,
    EditUserDialogComponentComponent,
    DeleteUserDialogComponentComponent,
    DetailDeviceComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    FusionChartsModule,
    ColorPickerModule
      ],
  entryComponents: [
    AddDeviceDialogComponent,
    EditDeviceDialogComponent,
    DeleteDeviceDialogComponent,
    AddUserDialogComponentComponent,
    EditUserDialogComponentComponent,
    DeleteUserDialogComponentComponent,
    DetailDeviceComponent,
  ],
  providers: [
    DashboardService,
    ProgressWebsocketService,
    RxStompService
  ]
})
export class DefaultModule { }
