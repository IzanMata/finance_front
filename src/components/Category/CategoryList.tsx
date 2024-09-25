import React from 'react';
import Grid from '@mui/material/Grid2';
import { useCategories } from '../../context/CategoryContext'
import { Category } from '../../models/Category';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => (
    <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
        <CardMedia
            component="img"
            height="140"
            alt={category.name}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {category.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {category.description || "Sin descripción disponible"}
            </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
);

const CategoryList: React.FC = () => {

    const { categories, loading, error } = useCategories();

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <Grid container spacing={3}>
            {categories.map((category: Category) => (
                <Grid key={category.id} size={{ xs: 6, md: 8 }}>
                    <CategoryCard category={category} />
                </Grid>
            ))}
        </Grid>
    );
};

export default CategoryList;
