import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() childEvent = new EventEmitter<string>();
  sendData(){
    this.childEvent.emit('Hello from Child')
  }
}
