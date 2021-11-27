import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycle';
  ngOnInit():void{
    console.log("parent init");
  }
  onClickMe(){
    console.log("on click");
  }
}
