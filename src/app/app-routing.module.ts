import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { AddPatientComponent } from './add-patient/add-patient.component'
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PatientGuard } from './patient.guard';
import { SearchbynameComponent } from './searchbyname/searchbyname.component';

const routes: Routes = [
  {path: "patients", component : PatientsComponent},
  {path: "add-patient", component : AddPatientComponent, canActivate: [PatientGuard]},
  {path: "updatePatient/:id", component: UpdatePatientComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  { path: "", redirectTo: "patients", pathMatch: "full" },
  {path: "searchbyname", component : SearchbynameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
