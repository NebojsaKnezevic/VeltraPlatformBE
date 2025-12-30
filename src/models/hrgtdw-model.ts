export interface IHRGTdwModel {
  GEID?: string | null;
  LocalEmployeeID?: string | null;
  FirstName?: string | null;
  LastName?: string | null;
  Email?: string | null;
  CompanyCode?: string | null;
  PayrollCompanyCode?: string | null;
  CountryCode?: string | null;
  CountryName?: string | null;
  AddressCode?: string | null;
  CostCenter?: string | null;
  JobCode?: string | null;
  PositionName: string; // not null
  DivisionCode?: string | null;
  BUCode?: string | null;
  SubGroup: string; // not null
  PersonalArea: string; // not null
  AsCarLease: string; // not null
  AsMonthlyAllowance: string; // not null
  CarAllowance: string; // not null
  PGCode?: string | null;
  ManagerGeid?: string | null;
  ManagerEmail?: string | null;
  ManagerFirstName?: string | null;
  ManagerLastName?: string | null;
  ManagerCountry?: string | null;
  CountryChangeDate?: Date | string | null; // datetime2(7)
  Address?: string | null;
  City?: string | null;
  State?: string | null;
  AddressCountry?: string | null;
  CompanyName: string; // not null
  LogicalSystem: string; // not null
}