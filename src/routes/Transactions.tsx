import * as React from 'react';
import { Transaction } from "../models";
import { fetchTransactions } from "../services/transactionService"
import TransactionList from '../components/transaction/transactionList';
import { useEffect, useState } from 'react';


const Transactions: React.FC = () => {

    const [transactions_data, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTransactions = async () => {
            try {
                const data = await fetchTransactions();
                setTransactions(data);
            } catch (error) {
                Error("Error al cargar las transacciones.");
            } finally {
                setLoading(false);
            }
        };
    
        loadTransactions();

    }, []);

    if (loading) return <div>Cargando...</div>;

    return (
        <div>
            <h1>Transacciones</h1>
            <TransactionList transaction_list={transactions_data} />
        </div>
    )

}

export default Transactions