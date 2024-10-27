import Grid from "@mui/material/Grid2";
import { Card, CardContent, Typography } from "@mui/material";
import { Category } from "../../models";

interface TransactionListProps {
    categoriesList: Category[];
}

export const categoryList = ({ categoriesList }: TransactionListProps) => {
    return (
        <Grid container spacing={2}>
            <h2>Categories</h2>
            {categoriesList.map((category, index) => (
                <Grid key={index}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" component="div">
                                {category.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {category.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};
