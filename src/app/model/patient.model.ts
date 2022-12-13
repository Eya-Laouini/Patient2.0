import { Service } from "./service.model";

export class Patient {
    idPatient! : number;
    nomPatient! : string;
    genderPatient! : string;
    birthDate! : Date ;
    service! : Service;
    }