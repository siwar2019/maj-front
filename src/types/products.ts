export interface IProducts {
  id: number;
  name: string;
  price: number;
  //purchasePrice:number ;
  refExterne: string;
  //ref: string;
  description: string;
  availability: boolean;
  Category: ICategory[];
  categories: ICategory[];
  listItems: IListItem[];
  Variant: Variant[];
  subOptions: SubOptions[];
  productPrice: productPrice
}
export interface productPrice {
  purchasePrice:number
}
export interface ICategory {
  id: number;
  name: string;
}

export interface IListItem {
  size: '';
  color: '';
  quantity: '';
  images: [];
}
export interface Variant {
  id: number;
  image: string;
  productId: number;
  referenceVariant: string;
  colorId: string;
  sizeId: string;
}

export interface SubOptions {
  id: number;
  name: string;
  description: string;
}
