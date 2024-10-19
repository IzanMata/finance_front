import * as React from 'react';
import { Transaction } from "../models";
import { addTransaction, deleteTransaction, modifyTransaction } from "../services/transactionService"
import TransactionList from '../components/transaction/transactionList';

const newTransaction: Transaction = {
    type: 'income',
    amount: 250.00,
    description: 'Salary for dasdasdasd',
    account: 1,
    category: 1,
    datetime: new Date()
};

const Transactions: React.FC = () => {

    return (
        <div>
            <h1>Transacciones</h1>
            <button onClick={() => addTransaction(newTransaction)}>Agregar transacción</button>
            <button onClick={() => deleteTransaction(5)}>Delete transacción</button>
            <button onClick={() => modifyTransaction(4, newTransaction)}>Modify transacción</button>
            <TransactionList />
        </div>
    )

}

export default Transactions