import { API_URL } from "../constants";
import { Category } from "../types";

export const fetchCategories = async (): Promise<Category[]> => {
    const response = await fetch(`${API_URL}/categories/`);

    if (!response.ok) {
        throw new Error("Error al obtener las transacciones");
    }

    return await response.json();
};

export const getCategoryById = async (
    categoryId: number,
): Promise<Category> => {
    const response = await fetch(`${API_URL}/categories/${categoryId}/`);

    if (!response.ok) {
        throw new Error("Error al obtener las transacciones");
    }

    return await response.json();
};

export const addCategory = async (category: Category) => {
    const response = await fetch(`${API_URL}/categories/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
    });

    if (!response.ok) {
        throw new Error(`Error al crear la transacción con el importe de €`);
    }

    return await response.json();
};

export const modifyCategory = async (
    categoryId: number,
    category: Category,
) => {
    const response = await fetch(`${API_URL}/categories/${categoryId}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
            `Error: ${errorData.message || "Failed to modify category"}`,
        );
    }

    return await response.json();
};

export const deleteCategory = async (categoryId: number) => {
    console.log("deleting " + categoryId)
    const response = await fetch(`${API_URL}/categories/${categoryId}/`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    console.log("deleted")
    console.log(response.ok)
    console.log(response)

};
