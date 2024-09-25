import { Category } from '../models/Category';

export const fetchCategories = async (): Promise<Category[]> => {
    const response = await fetch("http://127.0.0.1:8000/categories/");

    console.log(response)

    if (!response.ok) {
        throw new Error("Error al cargar las categorías");
    }

    return await response.json();
    
};
