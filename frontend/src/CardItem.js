import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import './card.css'
const CardItem = ({ card }) => {
  return (
    <Grid item xs={12} sm={6}>
      <Card className='card'>
        <CardContent>
          <Typography variant="h5" component="div" className='card-title'>
            {card.title}
          </Typography>
          <hr />
          <Typography variant="body2" color="text.secondary" className='card-description'>
            {card.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardItem;
