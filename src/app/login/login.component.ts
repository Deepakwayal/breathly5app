import { SocialAuthService } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Validators,FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 user:any;
 loggedIn:any;
 userSignup:any;
  hide = true;
  public loginForm !: FormGroup;
  constructor(private formbuilder: FormBuilder,private http:HttpClient,private router:Router,private authService: SocialAuthService,private api:ApiService){

  }
    

  

  
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
          // localStorage.setItem('userName',JSON.stringify(user.name));
       
        }
       })
    });
  

   /* form  validation*/
    this.loginForm = this.formbuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9]+@[a-z.-]+\\.[a-z]{2,4}$")]),
      pass: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z]).{8,30}")])
    })
  }

  logIn(){
    this.http.get<any>("http://localhost:3000/Signup")
     .subscribe(res=>{
        const user = res.find((a:any)=>{
          return a.email === this.loginForm.value.email && a.pass === this.loginForm.value.pass
        });
        if(user){
         alert("Login Success!!");
         this.loginForm.reset();
         this.router.navigate(['start'])
         
         localStorage.setItem('userName',JSON.stringify(user.fullname));
        }else{
         alert("user not found!!");
        }
      },err=>{
        alert("something went wrong!!")
      })
   }


  /* Validations*/
  get email(){
    return this.loginForm.get('email');
  }

  get pass(){
    return this.loginForm.get('pass')
  }

}