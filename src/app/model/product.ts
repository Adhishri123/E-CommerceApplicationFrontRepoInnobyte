import { Category } from "./category";

export class Product {
    id:number;
	name:string;
	price:number;
	description:string;
	stock:number;
	createdAt:string;
	updatedAt:string;
	image:any[];
	category:Category;
}
