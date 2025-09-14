import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit{

  @Input() parentData!:string
  msg!: string;

  ngOnInit(){
    this.sharedService.currentMsg.subscribe(msg => {
      this.msg = msg;
    })
  }

  constructor(private sharedService: ServiceService){
    
  }
}
