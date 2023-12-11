export interface IExpenditureList {
  id: string;
  uuid: string;
  description: string;
  value: number;
  date: string;
  created_by: string;
  categories: string[];
  categories_display: string[];
}
export interface IExpenseDetail {
  uuid: string;
  description: string;
  value: number;
  date: string;
  created_by?: string;
  categories: string[];
  categories_display?: string[];
}

export interface IExpenseCreate {
  description: string;
  value: number;
  date: string;
  categories: string[];
}

export type TExpenditureCount = {
  data: IExpenditureList[];
  totalCount: number;
};
