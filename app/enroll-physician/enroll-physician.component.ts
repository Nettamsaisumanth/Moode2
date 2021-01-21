import { Component, OnInit } from '@angular/core';
import { Physician } from '../Physician';
import { HospitalService } from '../hospital.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enroll-physician',
  templateUrl: './enroll-physician.component.html',
  styleUrls: ['./enroll-physician.component.css']
})
export class EnrollPhysicianComponent implements OnInit {

  constructor(private hospitalService:HospitalService,private route:Router) { }
  physician:Physician = new Physician();
  submitted:boolean = false; 

  departments = ['Cardialogy','Neuro Surgeon','Dentist','Pediatrics','Orthopedic','Dermatologist'];
  qualifications = ["MBBS","MS Cardialogy","MD","BDS",'BPT'];
  states = ['Andhra Pradesh','Telangana','Taminadu','Punjab','Maharasthra'];

  ngOnInit(): void {     
  }

  resetForm(physicianForm1:NgForm)
  {
    console.log("in reset form");
    physicianForm1.reset();
  }

  back()
    {
      this.route.navigate(['/ItemsAdmin']);
    }

  newPhysician():void{
    this.submitted = false;
    this.physician = new Physician();
  }
  
  save()
  {
    console.log("in save option"  , this.physician)
    this.hospitalService.createPhysician(this.physician)
    .subscribe(data=>{
      console.log(data);
      this.submitted = true;}, 
      error =>console.log(error));
      this.physician = new Physician();

    }  

  onSubmit(){
    this.save();
  }

}
