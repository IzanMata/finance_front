import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchCategories } from "../services/categoryService";
import { Category } from "../models";

interface CategoryContextProps {
    categories: Category[];
    loading: boolean;
    error: string | null;
}

const CategoryContext = createContext<CategoryContextProps | undefined>(
    undefined,
);

export const CategoryProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const data = await fetchCategories();
                setCategories(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        getCategories();
    }, []);

    return (
        <CategoryContext.Provider value={{ categories, loading, error }}>
            <h1>Categories</h1>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategories = () => {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error("useCategories must be used within a CategoryProvider");
    }
    return context;
};
