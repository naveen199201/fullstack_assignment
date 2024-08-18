import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Box } from '@mui/material';
import CardItem from './CardItem';
import'./cards.css';

const Cards = ({ results,query }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    if (results && results.length > 0  ) {
      setCards(results);
    } 
     else if (query.length>0 && results && results.length === 0  ) {
      setCards(results);
    } 
    else {
      axios.get('http://localhost:3000/api/cards')
        .then((response) => {
          setCards(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [results,query]);

  return (
    <Box className='cards'>
      {cards.length>0?
      <Grid container spacing={2}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} key={card.id}>
            <CardItem card={card} />
          </Grid>
        ))}
      </Grid>
      : <h1>No results found</h1>}
    </Box>
  );
};

export default Cards;
