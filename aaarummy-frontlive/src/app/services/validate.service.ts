import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {




  constructor() { }

  // To validate the feilds for the register form
  validateRegister(user){

     if (user.username ==undefined || user.contact ==undefined || user.password ==undefined){
       return false;
     } else {
       return true;
     }
   }


 validateEditUser(Edit) {
    if ( Edit.AdharNumber== undefined || Edit.Pan== undefined || Edit.BankAccount==undefined){
      return false;

    } else {
      return true;
    }

 
  }
}
