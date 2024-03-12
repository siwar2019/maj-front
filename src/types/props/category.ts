export interface IPropsCreateCategory {
  open: boolean;
  handleClose: () => void;
  id: number;
  nameCategory: string;
}
export interface IPropsEditCategory {
  open: boolean;
  close: () => void;
  editedCategory: number;
  nameCategory: string;
  descriptionCategory: string;
  level:any;
  uuid:string ;
  categoryId:number
}
export interface IPropsFilterCategory {
  searchItem: (id: number, name: string) => void;
  idFiltered: number;
  setExpandedAccordionId: ([]) => void;
  searchCategory: string;
  setSearchCategory: (name: string) => void;
  parentList: any;
}
export interface IPropsDeleteCategory {
  open: boolean;
  close: () => void;
  id: number;
  nameCategory: string;
}
