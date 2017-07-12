import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<div class="firstDiv">
        <div class="secondDiv">
          <h1>counter:</h1>
          <p> <button (click)="increment()">+</button>
          {{counter}}
          <button (click)="decrement()">-</button></p>
        </div>
    </div>
  `,
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
export class CounterComponent implements OnInit {
  counter: number =0;
  constructor() {
    this.counter = 0;
  }
  increment() {
    this.counter += 1;
  }
  decrement() {
    this.counter -= 1;
  }
  ngOnInit() {
  }

}
