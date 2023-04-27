import { Component,Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-open-modal',
  templateUrl: './open-modal.component.html',
  styleUrls: ['./open-modal.component.scss']
})
export class OpenModalComponent implements OnInit{
constructor(@Inject(MAT_DIALOG_DATA) public data:{title:string,email:string,phone:string,description:string,image:string}){}
info:any

ngOnInit(){
  this.info =[this.data];
  console.log(this.info)
}

}
