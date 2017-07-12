import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-two',
  template: `<div class="firstDiv">
        <div class="secondDiv">
        <h1>Part 3:</h1>
        <input type='button' value='+' (click)='increaseCounter()'>
      {{componentCounterValue}}
      <input type='button' value='-' (click)='decreaseCounter()'>
     <p> component counter value {{componentCounterValue}}
      <ng-content></ng-content>
      </div>
    </div>`,
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
  input {
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
export class CounterTwoComponent implements OnInit {
  componentCounterValue: number = 0;
  countChange(data) {
    this.componentCounterValue = data;
  }

  ngOnInit() {
  }

}
