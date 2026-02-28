import { OrganizationType } from "./organization-type";

export interface Organization {
    id: number;
  identifier: string;
  active: boolean;
  name: string;
  adress: string;
  phone: string;
  email: string;
  organizationType: OrganizationType;
}
