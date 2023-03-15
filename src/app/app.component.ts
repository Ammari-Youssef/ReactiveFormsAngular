import { Component } from '@angular/core';
import {FormGroup,FormControl, FormControlName,Validators} from '@angular/forms'
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive-Forms';

constructor (private router: Router){

  }
   loginForm=new FormGroup({
     user:new FormControl('',[Validators.required,]),

     email:new FormControl('',[Validators.required,Validators.email,]),
     
     password:new FormControl('',[Validators.required, Validators.minLength(5)]),

      option: new FormControl('',[Validators.required]),

     phone:new FormControl('',[Validators.required, Validators.maxLength(10),Validators.minLength(10),Validators.pattern('^[0-9]{10}$')]) ,

     BirthDay:new FormControl('',[Validators.required]),

     AntFinger:new FormControl('',[Validators.required,Validators.min(1),Validators.max(3)]),
     
     Frameworks:new FormControl('',[Validators.required,]),
     
     week:new FormControl('',[Validators.required]),
     
     portee:new FormControl('10',[Validators.required]),

     message:new FormControl('',[Validators.required,Validators.maxLength(255)]),
     
     Accept:new FormControl('',[Validators.required]),
   }
     )

     login(){
      console.log(this.loginForm)
      alert('Thanks ! Hope you enjoyed my form ^^ ')
      
     }

     get user(){
      return this.loginForm.get('user');
     }

     get email(){
      return this.loginForm.get('email')
     }

     get pass()
     {
      return this.loginForm.get('password')
     }

     get tel(){
      return this.loginForm.get('phone')
     }

     get accept(){
      return this.loginForm.get("Accept")
     }

     get fr(){
      return this.loginForm.get("Frameworks")
     }

     get ant(){
       return this.loginForm.get('AntFinger')
      }
      
      get bd(){
        return this.loginForm.get('BirthDay')
    }
      get rg(){
        return this.loginForm.get('portee')
    }
      get wk(){
        return this.loginForm.get('week')
    }
      get msg(){
        return this.loginForm.get('message')
    }
      get op(){
        return this.loginForm.get('option')
    }
}
