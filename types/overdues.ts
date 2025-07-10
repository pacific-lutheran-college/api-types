interface LoanEntry {
  ID: string;
  LoanUuid: string;
  Name: string;
  Title: string;
  Barcode: string;
  Lent: Date | string;
  Due: Date | string;
  DaysOver: string;
  Serial: string;
  Classification: string;
  stud_code: string;
  Username: string;
  year_grp: string;
  pctut_grp: string;
  usr: string | null;
  whdNo: string | null;
  whdName: string | null;
  whdSubject: string | null;
  tassURI: string | null;
  parDetails: Email[];
}

interface Email {
  email: string;
  salutation: string;
}

interface Vision6Email {
  email: string;
  salutation: string;
  studname: string;
  title: string;
  lent: string;
  due: string;
  studentid?: string;
  barcode: string;
}
export { LoanEntry, Vision6Email };
