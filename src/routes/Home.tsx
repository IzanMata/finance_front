import Grid from "@mui/material/Grid2";
import { Card, CardContent, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { PageContainer } from "@toolpad/core";
import { useEffect, useState } from "react";
import { Category } from "../models";
import { fetchCategories } from "../services/categoryService";

const Home = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const loadTransactions = async () => {
            try {
                const data = await fetchCategories();
                setCategories(data);
            } catch (error) {
                Error("Error al cargar las transacciones.");
            }
        };

        loadTransactions();
    }, []);

    return (
        <PageContainer maxWidth="xl">
            <Grid container spacing={2}>
                <Grid>
                    <Typography variant="h1" component="h1">
                        1550,00 $
                    </Typography>
                </Grid>
                <Grid>
                    <Box sx={{ height: 300 }}></Box>
                </Grid>
            </Grid>

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
