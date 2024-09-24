import React from 'react';
import { useCategories } from '../../context/CategoryContext'

const CategoryList: React.FC = () => {

    const { categories, loading, error } = useCategories();

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
        <h1>Categories</h1>
        <ul>
            {categories.map((category) => (
            <li key={category.id}>{category.name}</li>
            ))}
        </ul>
        </div>
    );

};

export default CategoryList;
