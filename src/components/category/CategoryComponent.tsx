import React, { useEffect, useState } from 'react';
import { Category } from '../../types';
import CategoryList from './CategoryList';
import { addCategory, deleteCategory, fetchCategories } from '../../services/categoryService';

const CategoryComponent: React.FC = () => {
    
    const [categories, setCategories] = useState<Category[]>([]);

    const loadCategories = async () => {
        console.log("reload")
        try {
            const data = await fetchCategories();
            console.log(data)
            setCategories(data);
        } catch (error) {
            console.error('Error loading categories:', error);
        }
    };

    const handleAddCategory = async (newCategory: Omit<Category, 'id'>) => {
        try {
            await addCategory(newCategory);
            
            await loadCategories();
        } catch (error) {
            console.error('Error adding category:', error);
        }
    };

    const handleDeleteCategory = async (id: number) => {
        console.log("start delete");
        try {
            await deleteCategory(id);
            console.log("Category deleted, loading categories...");
            await loadCategories();
        } catch (error) {
            console.error('Error deleting category:', error);
        }
        console.log("final");
    };

    useEffect(() => {
        loadCategories();
    }, []);

    return (
        <div>
            <h1>Categories</h1>
            {/* <AddCategory onAdd={handleAddCategory} /> */}
            <CategoryList categories={categories} onDeleteCategory={handleDeleteCategory} />
        </div>
    );
};

export default CategoryComponent;