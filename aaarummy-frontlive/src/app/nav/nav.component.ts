import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
declare var UIkit: any;
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  Fullname: string;
  Email: string;
  Mobilenumber: string;
  username: string;
  AdharNumber:string;
  Pan:string;
  BankAccount:string
  
  
  Edit: Object ;
  // tslint:disable-next-line:ban-types
  user: Object;
 

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
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
      Mobilenumber: this.Mobilenumber,
       username: this.username,
       AdharNumber: this.AdharNumber,
       Pan: this.Pan,
       BankAccount: this.BankAccount

     
    };
  }




  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show(UIkit.notification({message: 'You are now logged out', status: 'success', pos: 'top-right', timeout: 3000}));
    this.router.navigate(['login']);
    return false;
  }
}






// this.authService.EditUser(Edit).subscribe(data => {
//   if (data.success) {
//     // tslint:disable-next-line:max-line-length
//     this.flashMessage.show(UIkit.notification({message: 'You are now registered and can now login', status: 'success', pos: 'top-right', timeout: 4000}));
//     this.router.navigate(['/nav']);
//   } else {
//     this.flashMessage.show(UIkit.notification({message: 'Something went wrong', status: 'danger', pos: 'top-right', timeout: 4000}));
//     this.router.navigate(['/']);
//   }
// });

