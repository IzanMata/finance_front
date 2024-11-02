import Grid from "@mui/material/Grid2";
import { Card, CardContent, Typography } from "@mui/material";
import { Category } from "../../models";
import { addCategory } from "../../services/categoryService";

interface TransactionListProps {
    categoriesList: Category[];
}


const cat : Category= {
    name : "asda",
    description : "asddas"
}


function handleClick() {
    addCategory(cat)
}


const CategoryList = ({ categoriesList }: TransactionListProps) => {
    return (
        <Grid container spacing={2}>
            <button onClick={handleClick}>Add</button>
            {categoriesList.map((category, index) => (
                <Grid key={index}>
                    <Card sx={{ display: 'flex' }}>
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

export default CategoryList;
