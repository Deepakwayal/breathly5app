import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { SocialAuthService } from '@abacritt/angularx-social-login';
@Component({
  selector: 'app-formsignup',
  templateUrl: './formsignup.component.html',
  styleUrls: ['./formsignup.component.css']
})
export class FormsignupComponent {
  user:any;
  loggedIn:any;
  userSignup:any;

  hide = true;
  public signupForm !: FormGroup;
  constructor(private formbuilder: FormBuilder,private api:ApiService,private router:Router,private authService: SocialAuthService) { }


  ngOnInit(): void {


  

      /* Google Signin */
      
    
      this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = (user != null);
        this.userSignup={name: this.user.name , email: this.user.email, password: ' '}
      
         this.api.Signupuser(this.userSignup).subscribe((uname:any)=>{
          if(uname){
            this.router.navigate(['/start'])
            alert('Login Successfull')
            
         
          }
         })
      });



    /* Form Validation */
    this.signupForm = this.formbuilder.group({
      fullname: new FormControl('', [Validators.required, Validators.pattern("^([A-Za-z]{2,}\\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\\s?([a-zA-Z]{1,})?)")]),
      email: new FormControl('', [Validators.required, Validators.email,Validators.maxLength(255)]),
      pass: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z]).{8,30}")])
    })
  }

 

  signUp(){
    this.api.Signupuser(this.signupForm.value)
    .subscribe(res=>{
     alert("Signup Successfull");
     this.signupForm.reset();
     this.router.navigate(['login']);
    },err=>{
     alert("Something went wrong")
    })
   }


    /*Validations */

  get fullname(){
    return this.signupForm.get('fullname')
  }

 get email(){
    return this.signupForm.get('email');
  }

  get pass(){
    return this.signupForm.get('pass')
  }

  // getErrorFullname() {
  //   if (this.fullname.hasError('required')) {
  //     return 'Name is required';
  //   }

  //   return this.fullname.hasError('pattern') ? 'Space between fname and lname' : '';
  // }

  // getErrorEmail() {
  //   if (this.email.hasError('required')) {
  //     return 'Email is required';
  //   }

  //   return this.email.hasError('pattern') ? 'Not a valid email' : '';
  // }

  // getErrorPass() {
  //   if (this.pass.hasError('required')) {
  //     return 'Password is required';
  //   }

  //   return this.pass.hasError('pattern') ? 'Not a valid password Format(U,L,@,Num)' : '';
  // }
}
