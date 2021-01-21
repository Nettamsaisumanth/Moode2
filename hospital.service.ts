import { Injectable } from '@angular/core';
import { Patient } from './Patient';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Physician } from './Physician';
import { Diagnosis } from './Diagnosis';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {





  constructor(private http: HttpClient) { }

  private baseUrlPatient = 'http://localhost:8080/api/patients';
  private baseUrlPhysician = 'http://localhost:8080/api/physicians';
  private baseUrlDiagnosis = 'http://localhost:8080/api/diagnosis';

  createPatient(patient: Patient): Observable<any> {
    return this.http.post(this.baseUrlPatient, patient);
  }

  createPhysician(physician: Physician): Observable<any> {
    console.log(physician);
    return this.http.post(this.baseUrlPhysician, physician);
  }

  createDiagnosis(diagnosis: Diagnosis): Observable<any> {
    return this.http.post(this.baseUrlDiagnosis, diagnosis);
  }

  getPhysiciansByInsurancePlan(insurancePlan1: string): Observable<any> {
    return this.http.get(`${this.baseUrlPhysician}/insuranceplan/${insurancePlan1}`);
  }

  getPhysiciansByDepartment(department1: string): Observable<any> {
    return this.http.get(`${this.baseUrlPhysician}/department/${department1}`);
  }

  checkPhysicianId(physicianID: number): Observable<any> {
    return this.http.get(`${this.baseUrlPhysician}/${physicianID}`)
  }

  checkPatientId(patientID: number): Observable<any> {
    return this.http.get(`${this.baseUrlPatient}/${patientID}`)
  }




  getPatientHistoryByPatientId(patientId: number): Observable<any> {

    return this.http.get(`${this.baseUrlDiagnosis}/patients/${patientId}`)
  }





}
