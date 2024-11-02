import { useEffect, useState } from "react";
import { Account, Category, Transaction } from "../models";
import { categoryRepository } from "../repositories/categoryRepository";
import { accountRepository } from "../repositories/accountRepository";
import { transactionRepository } from "../repositories/transactionRepository";


export function useLoadData() {

    const [accounts, setAccounts] = useState<Account[]>([]);
    const [account, setAccount] = useState<Account | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const loadData = async () => {
        try {
            const [ accountsData, transactionsData] = await Promise.all([
                accountRepository.getAccounts(),
                transactionRepository.getTransactions()
            ]);

            setAccounts(accountsData);
            setTransactions(transactionsData)

            if (accountsData.length > 0) {
                setAccount(accountsData[0]);
            }
        } catch (err) {
            setError("Error al charge los data");
            console.error(err);
        }
    };

    useEffect(() => {
        loadData();
    }, []);
    

    return {accounts, transactions, account, error };

}

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