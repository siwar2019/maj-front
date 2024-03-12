export default interface IOrders {
  id: number;
  ref: string;
  status: string;
  totalPrice: number;
  quantity: number;
  shippingMethod: string;
  orderDate: string;
  discountAppliey: number;
  costumerId: number;
  Costumer: {
    firstName: string;
    lastName: string;
  };
}
export interface UpdateOrderStatusArgs {
  orderId: number;
  updatedStatus: string;
}
