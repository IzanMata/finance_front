import { Category } from "../models";
import { fetchCategories } from "../services/categoryService";

export const categoryRepository = {
    async getCategories(): Promise<Category[]> {
        return await fetchCategories();
    }
};
