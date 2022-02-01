export interface Category {
    id: string;
    name: string;
}

export interface Product {
    code: string;
    name: string;
    description: string;
    amount: number;
    costPrice: number;
    price: number;
    tags: string[];
}