import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import { ProgressWebsocketService } from 'src/app/services/progress.websocket.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  public progress: any = {};

  sideBarOpen = true;

  constructor(private auth: LoginService, private router: Router,private progressWebsocketService: ProgressWebsocketService) { }

  ngOnInit() {
    this.auth.loadToken();
    if (!this.isAuthenticated()) {
      this.router.navigateByUrl('/login');
    }
    // Init Progress WebSocket.
    this.initProgressWebSocket();
  }

  /**
   * Subscribe to the client broker.
   * Return the current status of the batch.
   */
  private initProgressWebSocket = () => {
    const obs = this.progressWebsocketService.getObservable();

    obs.subscribe({
      next: this.onNewProgressMsg,
      error: err => {
        console.log(err);
      }
    });
  }

  /**
   * Apply result of the java server notification to the view.
   */
  private onNewProgressMsg = receivedMsg => {
    if (receivedMsg.type === 'SUCCESS') {
      this.progress = receivedMsg.message;
      console.log(receivedMsg.message);
    }
  }

  sideBarToggler($event) {
    this.sideBarOpen = !this.sideBarOpen;
  }
  isAdmin() {
    return this.auth.isAdmin();
  }
  isUser() {
    return this.auth.isUser();
  }
  isAuthenticated() {
    return this.auth.isAuthenticated();
  }
}
