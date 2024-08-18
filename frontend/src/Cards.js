import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Box } from '@mui/material';
import CardItem from './CardItem';

const Cards = ({ results,query }) => {
  const [cards, setCards] = useState([]);
  console.log(cards);
  console.log(results.length);
  console.log(query.length);
  
  useEffect(() => {
    if (results && results.length > 0  ) {
      console.log('length')
      setCards(results);
    } 
     else if (query.length>0 && results && results.length === 0  ) {
      console.log("csrd")
      setCards(results);
    } 
    // else if(query.length===0){
    //   axios.get('http://localhost:3000/api/cards')
    //     .then((response) => {
    //       console.log("quer")
    //       setCards(response.data);
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching data:', error);
    //     });
    // }
    else {
      axios.get('http://localhost:3000/api/cards')
        .then((response) => {
          console.log("api")
          setCards(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [results,query]);

  return (
    <Box sx={{marginInline:'300px'}}>
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
