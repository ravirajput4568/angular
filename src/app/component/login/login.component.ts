import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule, FormControl, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup |any;
  submitted = false;
  constructor(private fb: FormBuilder ,private router:Router) { 
   
  }

  ngOnInit(): void {
    this.loginform=new FormGroup(
      {
      email: new FormControl ('', [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl ('', [Validators.required])
    });
  }
  getControl(name:any) : AbstractControl|null
    {
      return this.loginform.get(name)
    }
    
  login()
  {  this.submitted = true;
    // stop here if form is 
    if (this.loginform.invalid) {
      return;
  }
  if(this.submitted)
  {
    alert("Great!!");
    this.router.navigate(['/header/home'])
  }
  }
  }

