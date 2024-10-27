import * as React from "react";
import { useEffect, useState } from "react";
import { Transaction } from "../models";
import { fetchTransactions } from "../services/transactionService";
import TransactionList from "../components/transaction/transactionList";
import { PageContainer } from "@toolpad/core";

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
        <PageContainer maxWidth="xl">
            <div>
                <h1>Transactions</h1>
                <TransactionList transactionList={transactions_data} />
            </div>
        </PageContainer>
    );
};

export default Transactions;
