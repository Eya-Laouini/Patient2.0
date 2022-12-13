import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient.model';
import { ActivatedRoute,Router } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { Service } from '../model/service.model';


@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  currentPatient = new Patient();
  services! : Service[];
  updateSerId! : number;
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private patientService: PatientService) { }

  ngOnInit(): void {
    this.services=this.patientService.listeServices();
  this.currentPatient = this.patientService.consulterPatient(this.activatedRoute.snapshot. params['id']);
    this.updateSerId=this.currentPatient.service.idSer;
  }
  updatePatient()
  { //console.log(this.currentProduit);
    this.currentPatient.service=this.patientService.consulterService(this.updateSerId)
  this.patientService.updatePatient(this.currentPatient);
  this.router.navigate(['patients']);
  }
}
