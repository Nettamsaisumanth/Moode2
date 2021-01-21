import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrollPatientComponent } from './enroll-patient/enroll-patient.component';
import { EnrollPhysicianComponent } from './enroll-physician/enroll-physician.component';
import { SearchPhysicianComponent } from './search-physician/search-physician.component';
import { FindbyInsuranceplanComponent } from './findby-insuranceplan/findby-insuranceplan.component';
import { FindbyDepartmentComponent } from './findby-department/findby-department.component';
import { PatientDiagnosisDetailsComponent } from './patient-diagnosis-details/patient-diagnosis-details.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { LoginComponent } from './login/login.component';
import { ItemsComponent } from './items/items.component';
import { LinksComponent } from './links/links.component';
import { AdminComponent } from './admin/admin.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EnrollPatientComponent,
    EnrollPhysicianComponent,
    SearchPhysicianComponent,
    FindbyInsuranceplanComponent,
    FindbyDepartmentComponent,
    PatientDiagnosisDetailsComponent,
    PatientHistoryComponent,
    LoginComponent,
    ItemsComponent,
    LinksComponent,
    AdminComponent,
    ErrorPageComponent
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
   