import { useEffect, useState } from "react";
import { Account, Category, Transaction } from "../models";
import { categoryRepository } from "../repositories/categoryRepository";
import { accountRepository } from "../repositories/accountRepository";
import { transactionRepository } from "../repositories/transactionRepository";


export function useCategories() {
    const [categories, setCategories] = useState<Category[]>([]);

    const loadCategories = async () => {
        try {
            const data = await categoryRepository.getCategories();
            setCategories(data);
        } catch (err) {
            Error("Error al cargar las categorías");
        }
    };

    useEffect(() => {
        loadCategories();
    }, [categories]);

    return categories;
}

export function useAccounts() {
    const [accounts, setAccounts] = useState<Account[]>([]);

    const loadAccounts = async () => {
        try {
            const data = await accountRepository.getAccounts();
            setAccounts(data);
        } catch (err) {
            Error("Error al cargar las categorías");
        }
    };

    useEffect(() => {
        loadAccounts();
    }, [accounts]);

    return accounts;
}


export function useTransactions() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const loadTransactions = async () => {
        try {
            const data = await transactionRepository.getTransactions();
            setTransactions(data);
        } catch (err) {
            Error("Error al cargar las categorías");
        }
    };

    useEffect(() => {
        loadTransactions();
    }, [transactions]);

    return transactions;
}