import { useEffect, useState } from "react";
import { Account, Transaction } from "../types";
import { accountRepository } from "../repositories/accountRepository";
import { transactionRepository } from "../repositories/transactionRepository";

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
    }, []);

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
    }, []);

    return transactions;
}