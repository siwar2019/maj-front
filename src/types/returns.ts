export interface IReturns {
  id: number;
  orderId: number;
  raison: string;
  Costumer: CostumerList;
  Order: OrderList;
}

export interface CostumerList {
  firstName: string;
  lastName: string;
}
export interface OrderList {
  ref: string;
  orderDate: string;
  quantity: number;
  totalPrice: number;
}

export interface IReturnsDetails {
  orderId: any;
  size: colorInterface[];
  color: sizeInterface[];
  imageVariant: [];
}
export interface colorInterface {
  name: string;
}
export interface sizeInterface {
  name: string;
}
