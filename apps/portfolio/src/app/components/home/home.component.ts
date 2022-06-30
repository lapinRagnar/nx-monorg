import { Component } from '@angular/core';

@Component({
  selector: 'nx-monorg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

 f(x: number){
  return x /2000
 }
 
}
