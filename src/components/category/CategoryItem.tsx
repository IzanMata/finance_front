import React from 'react';
import { Category } from '../../types';
import Grid from "@mui/material/Grid2";
import { Card, CardContent, Typography } from '@mui/material';

interface CategoryItemProps {
    category: Category;
    onDeleteCategory: (id: number) => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category, onDeleteCategory }) => {
    
    const handleDelete = () => {
        if (category.id !== undefined) {
            onDeleteCategory(category.id);
        }
    };

    return (
        <Grid key={category.id}>
            <Card>
                <CardContent>
                    <Typography variant="h6" component="div">
                        {category.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {category.description}
                    </Typography>
                </CardContent>
                <button onClick={handleDelete}>Delete</button>
            </Card>
        </Grid>
    );
    
};

export default CategoryItem;
