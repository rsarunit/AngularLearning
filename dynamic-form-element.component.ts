import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-form-element',
  template: `
  <form #contact="ngForm">
  <div class="container">
  <div *ngFor="let contact of contacts; let in=index">
      <div class="row">
      <div class="col-md-3">
      <div class="form-group">
          <label for="name{{in}}">Name</label>
          <div class="input-group">
                  <input type="text" id="name{{in}}" class="form-control"
                  name="name-{{in}}" [(ngModel)]="contacts[in].name" >  
          </div>
          </div>
      </div>
      <div class="col-md-2">
      <div class="form-group">
              <label for="phone{{in}}">Phone Number*</label>
              <div class="input-group">
                <input type="text" name="phone-{{in}}" [(ngModel)]="contacts[in].phone" id="phone{{in}}" class="form-control">
              </div>
              </div>
            </div>
            <div class="col-md-2">
              <div class="btn" role="toolbar" style="margin-top: 25px;">
                             <div class="btn-group" role="group">
                               <span style="margin-top:5px;" (click)="addContact()" >+</span>
                             </div>
                           
             </div>
             </div>
              <div class="col-md-2">
              <div class="btn" role="toolbar">
                              <div class="btn-group" role="group">
                                  
                              </div>
                              <div class="btn-group" role="group">
                              <span  (click)="removeContact(in)" >-</span>
                              </div>
              </div>
              </div>
  </div>
  <br>
  </div>
  </div>
  </form>
  {{contacts|json}}
  `,
  styles: ['']
})
export class DynamicFormElementComponent implements OnInit {


  contacts:Contact[]=[];
  constructor() { }


  ngOnInit() {
    this.contacts.push(new Contact());
  }

  removeContact(index:number){
   this.contacts.splice(index,1);
  }

  addContact(){
    this.contacts.push(new Contact());
  }

}


export class Contact{
  name:string;
  phoneNumber:number;
  email:string;

  /*constructor(name:string,phone:number,email:string){
    this.name=name;
    this.phoneNumber=phone;
    this.email=email;
  }*/

}
