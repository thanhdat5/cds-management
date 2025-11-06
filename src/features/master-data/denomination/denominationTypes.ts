export interface Denomination {
  code: string;
  name: string;
  value: number;
  currencyCode: string;
  displayLabel?: string;
  status: string;
  note?: string;
}
