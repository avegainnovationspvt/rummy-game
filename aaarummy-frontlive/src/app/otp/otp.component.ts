import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
// import { ValidateService } from '../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
declare var UIkit: any;

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  verified:number;
  verify:object;

  constructor(
    // private validateService: ValidateService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
  ) { }

  ngOnInit() {
  }



  onverify()  {
  
  this.verify = {
    verified: this.verified, 
  };


  const verifiUser = JSON.parse(localStorage.getItem('user'));
  console.log('user', verifiUser );
  // update details user
  this.authService.VerifyUser(this.verify , verifiUser.id).subscribe(data => {
    if (data.success) {
      // tslint:disable-next-line:max-line-length
      this.flashMessage.show(UIkit.notification({message: 'You are verification process complted', status: 'success', pos: 'top-right', timeout: 4000}));
      this.router.navigate(['/lobby']);
    } else {
      this.flashMessage.show( UIkit.notification({message: 'Something went wrong', status: 'danger', pos: 'top-right', timeout: 4000}));
      this.router.navigate(['/']);
    }
  });






  }
}
