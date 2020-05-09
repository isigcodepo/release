import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  public progress: any = {};

  sideBarOpen = true;

  constructor(private auth: LoginService, private router: Router) { }

  ngOnInit() {
    this.auth.loadToken();
    if (!this.isAuthenticated()) {
      this.router.navigateByUrl('/login');
    }
  }

  sideBarToggler() {
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
