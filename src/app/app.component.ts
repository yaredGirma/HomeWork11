import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  counter : number = 0;
  displaycounter(data:number){
    this.counter = data;
  }
}
