import { useEffect, useState } from "react";
import { Account, Category } from "../models";
import { categoryRepository } from "../repositories/categoryRepository";
import { accountRepository } from "../repositories/accountRepository";


export function useLoadData() {

    const [categories, setCategories] = useState<Category[]>([]);
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [account, setAccount] = useState<Account | null>(null);
    const [error, setError] = useState<string | null>(null);

    const loadData = async () => {
        try {
            const [categoriesData, accountsData] = await Promise.all([
                categoryRepository.getCategories(),
                accountRepository.getAccounts()
            ]);

            setCategories(categoriesData);
            setAccounts(accountsData);

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
    

    return { categories, accounts, account, error };

}