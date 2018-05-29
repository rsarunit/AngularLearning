import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-validation',
  template: `<div class="container">
  <h1>Contact Form</h1>
  <div [hidden]="submitted">
  <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" [(ngModel)]="contact.name" name="name"  class="form-control" id="name" #name="ngModel" required>
      <div [hidden]="name.valid || name.pristine"
             class="alert alert-danger">
          Name is required
        </div>
      </div>

    <div class="form-group">
      <label for="phoneNumber">Phone Number</label>
      <input type="text"  [(ngModel)]="contact.phoneNumber" name="phoneNumber" class="form-control" id="phoneNumber" required maxlength=10 #phoneNumber="ngModel">
   
      <div [hidden]="phoneNumber.valid || phoneNumber.pristine" class="alert alert-danger">
          Phone Number is required
        </div>
    
      </div>

    <div class="form-group">
    <label for="email">Email</label>
    <input type="text" [(ngModel)]="contact.email" name="email" #email="ngModel" class="form-control" email id="email">
    <div [hidden]="email.valid || email.pristine" class="alert alert-danger">
      Email id is invalid
  </div>
    </div>
    <button type="submit" class="btn btn-success" [disabled]="!contactForm.form.valid">Submit</button>
      <button type="button" class="btn btn-default" (click)="contactForm.reset()">Reset Form</button>
    

  </form>
</div>
</div>


<div [hidden]="!submitted">
    <h2>You submitted the following:</h2>
    <div class="row">
      <div class="col-xs-3">Name</div>
      <div class="col-xs-9  pull-left">{{ contact.name }}</div>
    </div>
    <div class="row">
      <div class="col-xs-3">Phone Number</div>
      <div class="col-xs-9 pull-left">{{ contact.phoneNumber }}</div>
    </div>
    <div class="row">
      <div class="col-xs-3">Email</div>
      <div class="col-xs-9 pull-left">{{ contact.email }}</div>
    </div>
    <br>
    <button class="btn btn-primary" (click)="submitted=false">Edit</button>
  </div>
`,
  styles: [`
  .ng-valid[required], .ng-valid.required  {
    border-left: 5px solid #42A948; /* green */
  }
  
  .ng-invalid:not(form)  {
    border-left: 5px solid #a94442; /* red */
  }`]
})
export class FormValidationComponent implements OnInit {

  constructor() { }

  contact:Contact=new Contact();

  

  ngOnInit() {
  }

  

  submitted = false;
 
  onSubmit() { this.submitted = true; }

}

export class Contact{
  name:string;
  phoneNumber:string;
  email:string;

}
