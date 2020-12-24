import { ICategory } from "./category.interface";

export interface IProduct {
    id_product: number;
    name_product: string;
    price_product: number;
    image_product: string;
    createdAt?: Date;
    updatedAt?: Date;
    categories?: [ICategory]
}