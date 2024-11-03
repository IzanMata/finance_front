import { Account } from "../types";
import { fetchAccounts } from "../services/accountService";

export const accountRepository = {
    async getAccounts(): Promise<Account[]> {
        return await fetchAccounts();
    }
};
