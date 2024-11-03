import { Transaction } from "../types";
import { fetchTransactions } from './../services/transactionService';

export const transactionRepository = {
    async getTransactions(): Promise<Transaction[]> {
        return await fetchTransactions();
    }
};
