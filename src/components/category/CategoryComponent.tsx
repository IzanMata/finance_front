import React, { useEffect, useState } from 'react';
import { Category } from '../../types';
import CategoryList from './CategoryList';
import { addCategory, deleteCategory, fetchCategories } from '../../services/categoryService';

const CategoryComponent: React.FC = () => {
    
    const [categories, setCategories] = useState<Category[]>([]);

    const loadCategories = async () => {
        try {
            const data = await fetchCategories();
            setCategories(data);
        } catch (error) {
            Error('Error loading categories:' + error);
        }
    };

    const handleAddCategory = async (newCategory: Omit<Category, 'id'>) => {
        try {
            await addCategory(newCategory);
            await loadCategories();
        } catch (error) {
            Error('Error adding category:' + error);
        }
    };

    const handleDeleteCategory = async (id: number) => {
        try {
            await deleteCategory(id);
            await loadCategories();
        } catch (error) {
            Error('Error deleting category:' + error);
        }
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