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

  @Output() languageChange = new EventEmitter<string>();
  userData: {name: string, surname: string} | null  = {name:'', surname:''};
  selectedLanguge = 'en';
  availableLangugaes = ['en', 'it'];


  constructor(private userLoginService: UserLoginService, private router: Router) { }

  ngOnInit(): void {
    this.userLoginService.userDataSubject.subscribe( userData => this.userData = userData)
  }

  logoutUser() {
    this.userLoginService.logoutUser();
    this.router.navigate(["/login"]);
  }

  selectLanguage(language: string) {
    console.log('langugae:', language);
    this.selectedLanguge = language;
    this.languageChange.emit(language)
  }
}
