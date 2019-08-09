import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ValidateService } from '../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
// import {FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
// import {ErrorStateMatcher} from '@angular/material/core';
declare var UIkit: any;
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  // userAddressValidations: FormGroup;
  // firstError :string;

  Fullname: string;
  Email: string;
  // Mobilenumber: string;
  // username: string;
  AdharNumber:string;
  Pan:string;
  BankAccount:string;
  
  
  Edit: object;
  // tslint:disable-next-line:ban-types
  user: Object;
 

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    // private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      console.log(err);
      return false;
    });

   



  }



   


 
  onEditSubmit() {
    this.Edit = {

      Fullname: this.Fullname,
      Email: this.Email,
      // Mobilenumber: this.Mobilenumber,
      //  username: this.username,
       AdharNumber: this.AdharNumber,
       Pan: this.Pan,
       BankAccount: this.BankAccount,
    };

    const user1 = JSON.parse(localStorage.getItem('user'));
    console.log('user', user1);



    // update details user
    this.authService.EditUser(this.Edit , user1.id).subscribe(data => {
      if (data.success) {
        // tslint:disable-next-line:max-line-length
        this.flashMessage.show(UIkit.notification({message: 'You are now registered and can now login', status: 'success', pos: 'top-right', timeout: 4000}));
       
      } else {
        this.flashMessage.show(UIkit.notification({message: 'Something went wrong', status: 'danger', pos: 'top-right', timeout: 4000}));
        this.router.navigate(['/']);
      }
    });
  }




  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show(UIkit.notification({message: 'You are now logged out', status: 'success', pos: 'top-right', timeout: 3000}));
    this.router.navigate(['login']);
    return false;
  }
}

