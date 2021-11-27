import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-child';
  parent_to_child="message from parent";
  message:string | undefined;
  recieveMessage(message: string){
    this.message=message;
  }
}
