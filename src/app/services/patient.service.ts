import { Service } from './../model/service.model';
import { Injectable } from '@angular/core';
import { Patient } from '../model/patient.model';
import { cursorTo } from 'readline';
@Injectable({
providedIn: 'root'
})
export class PatientService {
  patients : Patient[]; 
  patient! : Patient;
  services : Service[];
  patientSearch! : Patient[];

  constructor() { 
    this.services = [ 
      {idSer:1, nomSer:"Cardiology"},
      {idSer:2, nomSer:"Neurology"},
      {idSer:4, nomSer:"Oncology"},
    ];
    this.patients = [
      {idPatient : 1, nomPatient : "Albert", genderPatient : "MALE", birthDate: new Date("01/14/2011") , service :{idSer:1, nomSer:"Cardiology"}},
      {idPatient : 2, nomPatient : "Julia", genderPatient : "FEMALE", birthDate: new Date("03/22/1997") , service :{idSer:2, nomSer:"Neurology"}},
      {idPatient : 3, nomPatient : "Sam", genderPatient : "MALE", birthDate: new Date("03/22/1997") , service :{idSer:3, nomSer:"Oncology"}},
      {idPatient : 4, nomPatient : "Sara", genderPatient : "FEMALE", birthDate: new Date("05/21/1970") , service :{idSer:4, nomSer:"Oncology"}},
      {idPatient : 5, nomPatient : "Selena", genderPatient : "FEMALE", birthDate: new Date("07/17/1960") , service :{idSer:4, nomSer:"Cardiology"}},
      {idPatient : 6, nomPatient : "John", genderPatient : "Male", birthDate: new Date("02/25/1980") , service :{idSer:4, nomSer:"Neurology"}},
      
    ];
  }
  listePatients():Patient[] {
    return this.patients;
}
ajouterPatient( pat: Patient){
  this.patients.push(pat);
  }
  supprimerPatient( pat: Patient){
    //supprimer le produit prod du tableau produits
    const index = this.patients.indexOf(pat, 0);
    if (index > -1) {
    this.patients.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
    }
    consulterPatient(id:number): Patient{
      this.patient = this.patients.find(p => p.idPatient == id)!;
      return this.patient;
      }
      updatePatient(p:Patient)
     {
     // console.log(p);
     this.supprimerPatient(p);
     this.ajouterPatient(p);
     this.trierPatients();
}
trierPatients(){
  this.patients = this.patients.sort((n1,n2) => {
  if (n1.idPatient! > n2.idPatient!) {
  return 1;
  }
  if (n1.idPatient! < n2.idPatient!) {
  return -1;
  }
  return 0;
  });
  }
  updateProduit(p:Patient)
  {
  // console.log(p);
  this.supprimerPatient(p);
  this.ajouterPatient(p);
  this.trierPatients();
  }
  listeServices():Service[] { 
    return this.services; 
  }
consulterService(id:number): Service{ 
  return this.services.find(ser => ser.idSer == id)!; 
}
searchByName(name:string):Patient[]{
  return this.patients.filter(pat => pat.nomPatient.toLowerCase().includes(name.toLowerCase()));
}

  }
