import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveService {

  logged(){
    return localStorage.getItem("username")!=null
  }
  constructor() { }
}
