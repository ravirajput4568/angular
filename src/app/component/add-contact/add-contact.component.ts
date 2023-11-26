import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, AbstractControl } from '@angular/forms';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { contact } from '../contactmodel';



@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contactform:FormGroup |any;
  submitted=false;
  integerRegex= /^\d+$/

  constructor(private formbuilder:FormBuilder ,private router:Router,private api:ApiService ) { }

  ngOnInit(): void {
    this.contactform=this.formbuilder.group({
      firstname:[" ",[Validators.required,Validators.maxLength(12)]],
      lastname:['',[Validators.required,Validators.maxLength(12)]],
      Age:['',[Validators.required,Validators.minLength(18),Validators.maxLength(60),Validators.pattern(this.integerRegex)]],
      email:['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      city:['',[Validators.required,Validators.maxLength(12)]]
    })
  }
    getControl(name:any) : AbstractControl|null
    {
      return this.contactform.get(name)
    }
    
    submitcontact(data:contact){

      this.submitted =true
      if(this.contactform.invalid)
      {
        return
      }
      alert("success")
      //console.log(this.contactform.value)
      this.api.addcontact(data).subscribe((res=>{
        this.contactform.reset();
      this.router.navigate(["/header/contactlist"])
      

      }))
    }
}
