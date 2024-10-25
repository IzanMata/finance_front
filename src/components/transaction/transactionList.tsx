import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Transaction } from "../../models";

interface TransactionListProps {
  transaction_list: Transaction[];
}

export default function TransactionList({
  transaction_list,
}: TransactionListProps) {
  const columns: GridColDef[] = [
    { field: "datetime", headerName: "DateTime", width: 150 },
    { field: "amount", headerName: "Amount", width: 100 },
    { field: "description", headerName: "Description", width: 200 },
    { field: "category_name", headerName: "Category", width: 150 },
  ];

  const rows = transaction_list.map((transaction, index) => {
    return {
      id: index,
      datetime: transaction.datetime,
      amount: transaction.amount,
      description: transaction.description,
      category_name: transaction.category.name,
    };
  });

  return (
    <Box sx={{ height: 250, width: "100%" }}>
      <DataGrid columns={columns} rows={rows} />
    </Box>
  );
}
