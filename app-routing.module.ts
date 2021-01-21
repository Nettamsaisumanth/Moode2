import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindbyInsuranceplanComponent } from './findby-insuranceplan/findby-insuranceplan.component';
import { FindbyDepartmentComponent } from './findby-department/findby-department.component';
import { ItemsComponent } from './items/items.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { LinksComponent } from './links/links.component';
import { EnrollPatientComponent } from './enroll-patient/enroll-patient.component';
import { EnrollPhysicianComponent } from './enroll-physician/enroll-physician.component';
import { SearchPhysicianComponent } from './search-physician/search-physician.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { PatientDiagnosisDetailsComponent } from './patient-diagnosis-details/patient-diagnosis-details.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [

 
 
 {path:'enrollPatient',component:EnrollPatientComponent},
 {path:'enrollPhysician',component:EnrollPhysicianComponent},
 {path:'searchPhysician',component:SearchPhysicianComponent ,children: [
  {path:'findByInsurancePlan',component:FindbyInsuranceplanComponent},
  {path:'findByDepartment',component:FindbyDepartmentComponent}
]
},
 {path:'patientHistory',component:PatientHistoryComponent},
 {path:'diagnosis',component:PatientDiagnosisDetailsComponent},
 {
  path:'item',
  component:ItemsComponent
},
{
  path:'ItemsAdmin', 
  component:AdminComponent,
  canActivate: [AuthGuardService]
},
{
path:'Login',
component:LoginComponent
},
{   
  path:'link',
  component:LinksComponent
  },
  {   
    path:'**',
    component:ErrorPageComponent
    }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
