export interface Currency {
  code: string;
  name: string;
  symbol: string;
  exchangeRate: number;
  decimalDigits?: number;
  status: string;
  isAccountingCurrency?: string;
  note?: string;
}
