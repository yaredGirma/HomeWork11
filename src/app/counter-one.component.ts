import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter-one',
  template: `<div class="firstDiv">
        <div class="secondDiv">
        <h1>Part Two:</h1>
    <p> <button (click)="increment()">+</button>
    {{counter}}
    <button (click)="decrement()">-</button></p>
     // <p><ng-content></ng-content></p>
      </div>
    </div>
  `
  ,
  styles: [`
  .firstDiv{
    border-style: solid;
    border-color: red;
    width: 700px;
    margin: auto;
  }
  .secondDiv{
    border-style: solid;
    border-color: blue;
    width: 500px;
    margin: auto;
  }
  button {
    background: #428BCA;
    color: #fff;
    font-family: Sans-serif;
    font-size: 20px;
    height: 60px;
    width: 150px;
    line-height: 60px;
    margin: 25px 25px;
    text-align: center;
    border: 0;
    transition: all 0.3s ease 0s;
}`]
})
export class CounterOneComponent {
  @Input()counter:number;
  counterValue: number;
  @Output() counterChange = new EventEmitter<number>();
  
     
  increment(counter) {
    this.counter++;
    this.counterValue = this.counter;
    this.counterChange.emit(this.counterValue);
  }
   decrement(counter) {
    this.counter--;
    this.counterValue = this.counter;
    this.counterChange.emit(this.counterValue);
  }
 
  ngOnInit() {
  }

}
