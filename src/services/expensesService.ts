import { API_URL } from "../constants";
import { Expense } from "../types";

export const fetchExpenses = async (): Promise<Expense[]> => {
    const response = await fetch(`${API_URL}/expenses/`);

    if (!response.ok) {
        throw new Error("Error al obtener las transacciones");
    }

    return await response.json();
};

export const addExpense = async (expense: Expense): Promise<Expense> => {
    const response = await fetch(`${API_URL}/expenses/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(expense),
    });

    if (!response.ok) {
        throw new Error(
            `Error al crear la transacción con el importe de ${expense.amount} €`,
        );
    }

    return await response.json();
};

export const modifyExpense = async (expenseId: number, expense: Expense) => {
    const response = await fetch(`${API_URL}/expenses/${expenseId}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(expense),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
            `Error: ${errorData.message || "Failed to modify expense"}`,
        );
    }

    return await response.json();
};

export const deleteExpense = async (expenseId: number) => {
    const response = await fetch(`${API_URL}/expenses/${expenseId}/`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
            `Error: ${errorData.message || "Failed to modify expense"}`,
        );
    }
};
