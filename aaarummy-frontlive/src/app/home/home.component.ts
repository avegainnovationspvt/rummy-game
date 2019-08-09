import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var UIkit: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username: String;
  // tslint:disable-next-line:ban-types
  contact: String;
  password: String;
  registerForm: FormGroup;
  
  
  

  constructor(
    private validateService: ValidateService,

     
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }
  userAddressValidations: FormGroup;
  ngOnInit() {
    this.userAddressValidations = this.formBuilder.group({
      mobileNumber: ['', [Validators.required, Validators.pattern('[6-9]\\d{9}')]],
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[a-zA-Z]+')]],
      password: ['', [Validators.required , Validators.minLength(6), Validators.maxLength(20) ]],
    });


    
    
  }
 


  onRegisterSubmit() {

    



    const user = {
      username: this.username,
      contact: this.contact,
      password: this.password,
     





      
    };

    // Required Fields
    if (!this.validateService.validateRegister(user)) {
      this.flashMessage.show(UIkit.notification({message: 'Please fill in all fields', status: 'danger', pos: 'top-right', timeout: 4000}));
      return false;
    }

  //Register user
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        // tslint:disable-next-line:max-line-length
        this.flashMessage.show(UIkit.notification({message: 'You are now registered and can now login', status: 'success', pos: 'top-right', timeout: 4000}));
        this.router.navigate(['/otp']);
      } else {
        this.flashMessage.show(UIkit.notification({message: 'Something went wrong', status: 'danger', pos: 'top-right', timeout: 4000}));
        this.router.navigate(['/']);
      }
    });
  }
}
