import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  userInfo = {
    email:"",
    password:""
  }
  userInfoValidator = {
    email:false,
    password:false
  }
  v_user = {}
  registrar(){    
    // Javascript Object notation [1,2,3,4,5,65] "hola como estan"
    //validacion de email
    if(this.userInfo.email === ""){
      window.alert("email esta vacio")
      this.userInfoValidator.email=true
    }else{
      this.userInfoValidator.email=false
    }
    //validacion de contraseña
    if(this.userInfo.password === ""){
      alert("password esta vacio")
      this.userInfoValidator.password=true
    }else{
      this.userInfoValidator.password=false
    }
    if(this.userInfo.password !== "" && this.userInfo.email !== ""){
      //puedo servir para hacer consultas a api's a BD o Consumir servicios
      localStorage.setItem('userInfo',JSON.stringify(this.userInfo))
      this.router.navigate(['/'])
    } 
    // localStorage.clear()
    this.v_user=localStorage.getItem('userInfo')
  }

}
