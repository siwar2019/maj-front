export interface IPropsAddNewColor {
  open: boolean;
  close: () => void;
  colorId: string | undefined;
}
export interface IPropsAddNewSize {
  open: boolean;
  close: () => void;
  sizeId: string | undefined;
}
export interface IPropsEditColor {
  open: boolean;
  close: () => void;
  nameSubOption: string;
  idSubOption: number;
}
export interface IPropsEditSize {
  open: boolean;
  close: () => void;
  nameSubOption: string;
  descriptSubOption: string;
  idSubOption: number;
}
export interface IPropsConfirmDelete {
  open: boolean;
  close: () => void;
  nameSubOption: string;
  idSubOption: number;
}
