import { Examination } from "./examination";
import { Practitioner } from "./practitioner";

export interface ExaminationPractitioner {
   id: number;
  examination: Examination;
  practitioner: Practitioner;
}
