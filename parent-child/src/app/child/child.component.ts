import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() parent_to_child:string | undefined;
  constructor() { }
  message="message from child";
  @Output() messageEvent = new EventEmitter<string>();
  sendMessage(){
    this.messageEvent.emit(this.message);
  }
}
