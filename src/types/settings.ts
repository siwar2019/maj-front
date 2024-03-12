export interface IOptions {
  id: number;
  uuid:number ;
  name: string;
  code: string;
  productOptions? : productOption
}
export interface IOptionsColor {
  id: number;
  uuid:number ;
  name: string;
  code?: string;
  productOptions? : productOption
}
export interface productOption {
  name:string
}
export interface IsubOption {
  name: string,
  code:string,
  uuid:any ;

}
export interface ISubOptionsByOption {
  id: number;
  name: string;
  description: string;
}
export interface IEditSize {
  id: number;
  name: string;
  description: string;
}
