export interface Recipe {
    name: string;
    description: string;
    imgURL: string;
    ingredients: Ingredient[];
}

export interface Ingredient {
    name: string;
    isChecked: boolean;
}