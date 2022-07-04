import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:any

  constructor( private router:Router,private fb:FormBuilder) { }
  login=this.fb.group({
    name:new FormControl('')
  })

  ngOnInit(): void {
  }
  proceedlogin(){
    // this.router([""])
this.username=this.login.value.name

localStorage.setItem("username",JSON.stringify(this.username))
console.log(localStorage.getItem("username"));

// console.log("data",data);
  }

}
