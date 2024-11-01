import { API_URL } from "../constants";
import { Account } from "../models";

export const fetchAccounts = async (): Promise<Account[]> => {
    const response = await fetch(`${API_URL}/accounts/`);

    if (!response.ok) {
        throw new Error("Error al obtener las accounts");
    }

    return await response.json();
};

export const getAccountById = async (accountId: number): Promise<Account> => {
    const response = await fetch(`${API_URL}/accounts/${accountId}/`);

    if (!response.ok) {
        throw new Error("Error al obtener las accounts");
    }

    return await response.json();
};

export const addAccount = async (account: Account): Promise<Account> => {
    const response = await fetch(`${API_URL}/accounts/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(account),
    });

    if (!response.ok) {
        throw new Error(`Error al crear la transacción con el importe de €`);
    }

    return await response.json();
};

export const modifyAccount = async (accountId: number, account: Account) => {
    const response = await fetch(`${API_URL}/accounts/${accountId}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(account),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
            `Error: ${errorData.message || "Failed to modify account"}`,
        );
    }

    return await response.json();
};

export const deleteAccount = async (accountId: number) => {
    const response = await fetch(`${API_URL}/accounts/${accountId}/`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
            `Error: ${errorData.message || "Failed to modify accountId"}`,
        );
    }
};
