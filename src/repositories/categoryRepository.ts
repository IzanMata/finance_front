import { Category } from "../models";
import { addCategory, fetchCategories } from "../services/categoryService";

export const categoryRepository = {
    
    async getCategories(): Promise<Category[]> {
        return await fetchCategories();
    },

    async addCategory(category : Category) {
        return await addCategory(category);
    }

};
