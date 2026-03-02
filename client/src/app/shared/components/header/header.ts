import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserLoginService } from '../../../core/services/user-login-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {

  
  userData: {name: string, surname: string} | null  = {name:'', surname:''};
 


  constructor(private userLoginService: UserLoginService, private router: Router) { }

  ngOnInit(): void {
    this.userLoginService.userDataSubject.subscribe( userData => this.userData = userData)
  }

  logoutUser() {
    this.userLoginService.logoutUser();
    this.router.navigate(["/login"]);
  }

  
}
