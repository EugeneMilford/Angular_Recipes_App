import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {

  constructor(private aService: AuthService) { }

  isLoggedIn = true;

  isLoading = false;

  error: string = null;

  onSwitchMode() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  onSubmit(form: NgForm) {

    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    if (this.isLoggedIn) {

    } else {
      this.aService.signUp(email, password).subscribe(resData => {
        console.log(resData);
        this.isLoading = false;
      }, error => {
        console.log(error);
        this.error = 'An error has occurred...';
        this.isLoading = false;
      });
    }

    form.reset();
  }
}
