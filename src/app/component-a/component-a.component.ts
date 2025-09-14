import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent {

  data = 'Hello';
  constructor(private sharedService: ServiceService){}

  onInputChange(value: string){
    this.sharedService.changeMsg(value);
  }
}
