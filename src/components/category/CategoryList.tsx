import Grid from "@mui/material/Grid2";
import { Category } from "../../types";
import CategoryItem from "./CategoryItem";

interface CategoryListProps {
    categories: Category[];
    onDeleteCategory: (id: number) => void;
}

const CategoryList = ({ categories, onDeleteCategory }: CategoryListProps) => {
    return (
        <Grid container spacing={2}>
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} onDeleteCategory={onDeleteCategory}/>
            ))}
        </Grid>
    );
};

export default CategoryList;
