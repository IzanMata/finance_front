import Grid from "@mui/material/Grid2";
import {Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { PageContainer } from "@toolpad/core";
import MenuAppBar from "../components/navegation/NavBar";
import { useAccounts, useCategories, useTransactions } from "../hook/loadData";
import TransactionList from "../components/transaction/transactionList";
import CategoryList from "../components/category/CategoryList";

const Home = () => {
    
    const categories = useCategories()
    const accounts = useAccounts()
    const transactions = useTransactions()

    const account = accounts[0]

    return (
        <PageContainer maxWidth="xl">
            <MenuAppBar />
            <h2>Accounts</h2>
            {accounts.map((account, index) => (
                <Grid key={index}>
                    <h2>{account.amount}</h2>
                </Grid>
            ))}
            <Grid container spacing={2}>
                <Grid>
                    <Typography variant="h1" component="h1">
                        {account?.amount} $
                    </Typography>
                </Grid>
                <Grid>
                    <Box sx={{ height: 300 }}></Box>
                </Grid>
            </Grid>
            <div>
                <h1>Transactions</h1>
                <TransactionList transactionList={transactions} />
            </div>
            <h2>Categories</h2>
            <CategoryList categoriesList={categories}/>
        </PageContainer>
    );
};

export default Home;
