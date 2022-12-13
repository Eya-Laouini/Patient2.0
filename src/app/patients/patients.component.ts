import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient.model';
import { PatientService } from '../services/patient.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-patients',
  templateUrl:'./patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements OnInit {
  patient!: Patient[];
  constructor(private patientService: PatientService,
              private Router: Router,
              public authService: AuthService) 
              { }   
   

  ngOnInit(): void {
    this.patient = this.patientService.listePatients();
  }
  supprimerPatient(p: Patient)
{
//console.log(p);
let conf = confirm("Are you sure ?");
if (conf)
this.patientService.supprimerPatient(p);
}

}
