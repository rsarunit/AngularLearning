import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'property-binding',
  template: `
  <article>
  <!--style property binding-->
  <h1 [style.background-color]="color">Angular Property Binding</h1>
  <!-- property binding-->
  <button [disabled]="buttonDisabled" >Property Binded Button</button>
  <span [innerHtml]="spanString"></span>
  <img  [src]="imgUrl"/>
 
  </article>
  <article>
  <h1 [class]="'arun'">Angular Event Binding</h1>
  <!--event binding-->
  <button  (click)="changeButtonState();">Click me</button>
  <input type="text" (focus)="focusFunction()" (focusout)="focusOutFunction()"/>
  <span>{{inputTextState}}</span>
  </article>
  `,
  styles: [`
  .arun{
    background-color:green;
    font-style: italic;
  }`]
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }

  buttonDisabled:boolean=true;
  spanString:string="";
  inputTextState:string="";
  imgUrl:string="../favicon.ico";
   color="red";


  ngOnInit() {
  }

  changeButtonState(){
    if(this.buttonDisabled){
      this.buttonDisabled=false;
      this.spanString="<h1>Property Binded Button Enabled</h1>";
      this.imgUrl="../favicon.ico";
      this.color="green";
    }else{
      this.buttonDisabled=true;
      this.spanString="<h1>Property Binded Button Disabled</h1>";
      this.imgUrl="";
      this.color="red";
    }
  }
  focusFunction(){
    this.inputTextState="input text focused";
  }

  focusOutFunction(){
    this.inputTextState="input text focused out";
  }

  hoverfunction(){
    alert("Button Hovered");
  }


}
