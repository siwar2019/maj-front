export interface IPropsAddDiscount {
  openAdd: boolean;
  handleCloseAdd: () => void;
}
export interface IPropsTableDiscount {
  search: string;
  selectedDate: any;
  discountSelected: string;
  statusSelected: string;
}
export interface IPropsDeleteDiscount {
  openDelete: boolean;
  handleCloseDelete: () => void;
}
export interface IPropsFormDiscount {
  open: boolean;
  handleClose: () => void;
  title: any;
}
export interface IPropsEditDiscount {
  openEdit: boolean;
  handelCloseEdit: () => void;
}
