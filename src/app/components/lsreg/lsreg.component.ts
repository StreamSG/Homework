import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

/**
 * Component for user registration.
 */
@Component({
  selector: 'app-lsreg',
  templateUrl: './lsreg.component.html',
  styleUrls: ['./lsreg.component.scss']
})
export class LsregComponent {
  /**
   * Object to hold user registration data.
   */
  userData = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private userService: UserService) { }

  /**
   * Handles the submission of the registration form.
   * Sends user registration data to the server for registration.
   */
  onSubmit() {
    this.userService.registerUser(this.userData).subscribe(
      (response) => {
        //Placeholder
        console.log('User registration successful!', response);
      },
      (error) => {
        console.error('User registration failed:', error);
      }
    );
  }
}
