import { Component, OnInit } from '@angular/core';
import { Patient } from '../Patient';
import { HospitalService } from '../hospital.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enroll-patient',
  templateUrl: './enroll-patient.component.html',
  styleUrls: ['./enroll-patient.component.css']
})
export class EnrollPatientComponent implements OnInit {

  constructor(private hospitalService:HospitalService,private route:Router) { }

  patient:Patient = new Patient();
  states = ["AP","UP","TS"];
  stateHasError = true;
  submitted:boolean = false;

  validateState(value)
  {
    if(value == 'default')
    {
      this.stateHasError = true;
    }
    else{
      this.stateHasError = false;
    }
  }

  newPatient():void{
    this.submitted = false;
    this.patient = new Patient();
  }

  ngOnInit(): void {
  }

  save()
  {
    console.log("hiee"  + this.patient)
    this.hospitalService.createPatient(this.patient)
    .subscribe(data=>{
      console.log(data);
      this.submitted = true;}, 
      error =>console.log(error));
      this.patient = new Patient();

    }   

    back()
    {
      this.route.navigate(['/ItemsAdmin']);
    }

  onSubmit(){
    this.save();
  }

}