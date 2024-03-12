export interface IPropsAddProduct {
  open: boolean;
  handleClose: () => void;
}
export interface IPropsAddItem {
  openAdd: boolean;
  handleCloseAdd: () => void;
}
export interface IPropsDeleteItem {
  openDelete: boolean;
  handelCloseDelete: () => void;
  ProductsId: string | undefined;
  variantId: number;
}
export interface IPropsDeleteProduct {
  open: boolean;
  handleClose: () => void;
  id: number;
  productName: string;
}
export interface IPropsEditItem {
  openEdit: boolean;
  handelCloseEdit: () => void;
}
export interface IPropsEditProduct {
  openEdit: boolean;
  handleCloseEdit: () => void;
  id: number;
}
export interface IPropsTableProduct {
  search: string;
  searchCategory: string;
  maxPrice: number;
  minPrice: number;
  selectedCategory: string;
}
