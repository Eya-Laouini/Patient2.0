import { AuthService } from './../services/auth.service';
import { Service } from './../model/service.model';
import { Patient } from './../model/patient.model';
import { PatientService } from './../services/patient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbyname',
  templateUrl: './searchbyname.component.html',
  styleUrls: ['./searchbyname.component.css']
})
export class SearchbynameComponent implements OnInit {
  patients!: Patient[];
  idSer! : number;
  services!: Service[];
  allpatients!: Patient[];

  constructor(public AuthService: AuthService, 
              private patientService : PatientService
    ) { }
  ngOnInit(): void {
    this.allpatients = this.patientService.listePatients();
    this.services = this.patientService.listeServices();
  }
  onKeyUp(filterText : string){
    console.log(filterText);
    this.patients = this.allpatients.filter(item => item.nomPatient!.toLowerCase().includes(filterText));
  }
  supprimerPatient(p: Patient)
{
//console.log(p);
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.patientService.supprimerPatient(p);
}
}
