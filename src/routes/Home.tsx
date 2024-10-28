import Grid from "@mui/material/Grid2";
import { Card, CardContent, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { PageContainer } from "@toolpad/core";
import MenuAppBar from "../components/navegation/NavBar";
import { useLoadData } from "../hook/loadData";
import TransactionList from "../components/transaction/transactionList";

const Home = () => {
    
    const { categories, accounts, transactions, account, error } = useLoadData();

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }



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
            <Grid container spacing={2}>
                {categories.map((category, index) => (
                    <Grid key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {category.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {category.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </PageContainer>
    );
};

export default Home;
