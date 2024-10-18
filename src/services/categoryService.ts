import { API_URL } from '../constants';
import { Category } from '../models';

export const fetchCategories = async (): Promise<Category[]> => {

    const response = await fetch(`${API_URL}/categories/`);

    if (!response.ok) {
        throw new Error("Error al cargar las categorías");
    }

    return await response.json();
    
};
