import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private msgSource = new BehaviorSubject<string>('');

  currentMsg = this.msgSource.asObservable()

  constructor() { }

  changeMsg(msg:string){
    this.msgSource.next(msg);
    
  }
}
