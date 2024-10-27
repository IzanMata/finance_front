export interface Account {
    id?: number;
    amount: number;
    user: number;
}

export interface Category {
    id?: number;
    name: string;
    description: string;
}

export interface Transaction {
    id?: number;
    type: string;
    datetime: Date;
    amount: number;
    description: string;
    account: Account;
    category: Category;
}

export interface Expense {
    id?: number;
    description: string;
    expense_type: string;
    amount: number;
    deadline: null;
    category: Category;
}
