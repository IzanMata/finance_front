import { Transaction } from "../models";
import { addTransaction } from "../services/transactionService"


const newTransaction: Transaction = {
    type: 'income',
    amount: 100.00,
    description: 'Salary for October',
    account: 1,
    category: 1,
    datetime: new Date()
};

const Transactions: React.FC = () => {

    return (
        <div>
            <h1>Transacciones</h1>
            <button onClick={() => addTransaction(newTransaction)}>Agregar transacción</button>
        </div>
    )

}

export default Transactions