export interface Tenor {
  id: number;
  tenorId: string;
  tenorName: string;
  tenorUnit: string;
  tenorValue: number;
  days: number;
  note?: string;
}
