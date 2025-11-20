export interface WorkdayModel {
  GEID: string;
  LocalEmployeeID: string;
  FirstName: string;
  LastName: string;
  Email: string;
  CompanyCode: string;
  PayrollCompanyCode: string;
  CountryCode: string;
  CountryName: string;
  AddressCode: string;
  CostCenter: string;
  JobCode: string;
  PositionName: string;
  DivisionCode: string;
  BUCode: string;
  SubGroup: string;
  PersonalArea: string;
  AsCarLease: string;
  CarAllowance: string;
  AsMonthlyAllowance: string;
  PGCode: string;
  ManagerGeid: string;
  IsActive: "YES" | "NO" | string;
  lastsynced: string; // ISO date
  ManagerEmail: string;
  ManagerFirstName: string;
  ManagerLastName: string;
  ManagerCountry: string;
  Address: string;
  City: string;
  State: string;
  AddressCountry: string;
  CompanyName: string;
  ConcurDummyPayroll: number;
  LogicalSystem: string;
}
