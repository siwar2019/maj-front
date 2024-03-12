export interface ICategories {
  id: number;
  uuid:any ,
  name: string;
  description: string;
  categoryId: any;
  level?:any 
}
export interface Categories {
  name: string;
  description?: string;
  categoryId: number;
}
export interface EditCategories {
 categoryId: number,
  children: null[],
  description: string,
  id: number,
  level: number,
  name: string,
  uuid:string

}
