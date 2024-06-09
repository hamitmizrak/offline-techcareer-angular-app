import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css'
})
export class FormPageComponent implements OnInit {

  //Variables
  registerForm: FormGroup;
  submitted:boolean=false;

  // Constructor
  constructor(private fb: FormBuilder){}


  // ngOnInit
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  } //end ngOnInit()

  // Submit
  onSubmit():void{
    this.submitted=true;
        if(this.registerForm.valid){
          console.log("Form Submitted:"+this.registerForm.value);
          window.alert(this.registerForm.value.name);
        }
  } //end onSubmit()

}
