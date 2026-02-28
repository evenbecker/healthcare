import { Organization } from "./organization";
import { Practitioner } from "./practitioner";

export interface Patient {
   id: number;
  identifier: string;
  active: boolean;
  name: string;
  surname: string;
  gender: string;
  birthDate: Date;
  adress: string;
  phone: string;
  email: string;
  deceased: boolean;
  maritialStatus: string;
  organization: Organization;
  practitioner: Practitioner;
}
