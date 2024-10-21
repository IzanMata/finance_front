import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Transaction } from "../../models";

interface TransactionListProps {
    transaction_list: Transaction[];
}

export default function TransactionList({transaction_list} : TransactionListProps) {
    return (
        <Box sx={{ height: 250, width: "100%" }}>
            <DataGrid
                columns={[{ field: "datetime" }, { field: "amount" }, { field: "description" }]}
                rows={transaction_list}
            />
        </Box>
    );
}
