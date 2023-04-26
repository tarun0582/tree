import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FamItemConfig, Enabled, PageFitMode, GroupByType } from 'ngx-basic-primitives';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'First Family Chart';
constructor(private router:Router){}

home(){
  this.router.navigate(['home'])
}
example1(){
  this.router.navigate(['example1'])
}
example2(){
  this.router.navigate(['example2'])
}
example3(){
  this.router.navigate(['example3'])
}
example4(){
  this.router.navigate(['example4'])
}
example5(){
this.router.navigate(['example5'])
}
example6(){
  this.router.navigate(['example6'])

}
  }