import { Transaction } from "../models";
import { fetchTransactions } from './../services/transactionService';

export const transactionRepository = {
    async getTransactions(): Promise<Transaction[]> {
        return await fetchTransactions();
    }
};
