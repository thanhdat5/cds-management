export interface Organization {
  code: string;
  name: string;
  shortName: string;
  level: string;
  parent: string;
  type: string;
  phone?: string;
  email?: string;
  taxCode?: string;
  status: string;
  address?: string;
}
