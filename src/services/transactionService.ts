import { API_URL } from '../constants';
import { Transaction } from '../models';
import { TransactionException } from '../errors/transactionErros';

export const fetchTransactions = async (): Promise<Transaction[]> => {

    const response = await fetch(`${API_URL}/transactions/`);

    if (!response.ok) {
        throw new TransactionException("Error al obtener las transacciones");
    }

    return await response.json();
    
};

export const addTransaction = async (transaction: Transaction) => {

    const response = await fetch(`${API_URL}/transactions/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify("asdasd"),
    });

    if (!response.ok) {
        throw new TransactionException(`Error al crear la transacción con el importe de ${transaction.amount} €`);
    }

    return await response.json();
    
};

const modifyTransaction = async (transactionId: number, transaction: Transaction) => {
    
    const response = await fetch(`${API_URL}/transactions/${transactionId}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error: ${errorData.message || 'Failed to modify transaction'}`);
    }

    const data = await response.json();
    console.log('Transaction modified:', data);
    return data;

};