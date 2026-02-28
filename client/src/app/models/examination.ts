import { Organization } from "./organization";
import { Patient } from "./patient";
import { ServiceType } from "./service-type";

export interface Examination {
    id: number;
  identifier: string;
  patient: Patient;
  organization: Organization;
  status: string;
  serviceType: ServiceType;
  priority: string;
  startDate: Date;
  endDate: Date;
  diagnosis: string;
}
