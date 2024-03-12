import { IReturns } from '../../types/returns';

export interface IPropsModalReturns {
  open: boolean;
  handleClose: () => void;
  selectedId: number;
  orderId: number;
  returnList: IReturns[];
  formatDate: (dbDate: string) => string;
}
export interface IPropsTableReturns {
  search: string;
  selectedDate: Date | null;
}
