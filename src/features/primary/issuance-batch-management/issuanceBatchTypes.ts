export interface IssuanceBatch {
  id: number;
  name: string;
  distributionChannel:string;
  tenor: string;
  releaseDate: string;
  dueDate: string;
  interestRate: number;
  value: number;
  paymentMethod: string;
  status: string;
}
