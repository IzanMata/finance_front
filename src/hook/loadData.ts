import { useEffect, useState } from "react";
import { Account, Category, Transaction } from "../models";
import { categoryRepository } from "../repositories/categoryRepository";
import { accountRepository } from "../repositories/accountRepository";
import { transactionRepository } from "../repositories/transactionRepository";


export function useLoadData() {

    const [categories, setCategories] = useState<Category[]>([]);
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [account, setAccount] = useState<Account | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const loadData = async () => {
        try {
            const [categoriesData, accountsData, transactionsData] = await Promise.all([
                categoryRepository.getCategories(),
                accountRepository.getAccounts(),
                transactionRepository.getTransactions()
            ]);

            setCategories(categoriesData);
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
    

    return { categories, accounts, transactions, account, error };

}