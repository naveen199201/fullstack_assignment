import React, { useState } from 'react';
import axios from 'axios';
import './search.css';
import { IconButton, InputAdornment, TextField, Typography, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Cards from './Cards';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    console.log(query.length)
  };

  const handleSearch = () => {
    if (query.trim()) {
      axios.post(`http://localhost:3000/api/cardsearch`,{'title':query})
        .then((response) => {
          console.log(response.data);
          setResults(response.data);
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
        });
    }
  };

  return (
    <div className='cardsearch'>
      <Box sx={{ paddingBlockEnd: 2 }}>
        <div className="search-bar">
          <Typography variant="h6">How can we help?</Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
            sx={{ width: '500px' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch}>
                    <ArrowForwardIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>


      </Box>
      <Cards results={results} query={query}/>
    </div>
  );
};

export default SearchComponent;


// import React, { useState } from 'react';
// import './search.css';
// import { IconButton, InputAdornment, TextField } from '@mui/material';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// const SearchComponent = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//   };

//   const handleSearch = () => {
//     if (onSearch) {
//       onSearch(query);
//     }
//   };

//   return (
//     <div className="search-bar">
//       <p>How can we help?</p>
//       <TextField
//         variant="outlined"
//         fullWidth
//         value={query}
//         onChange={handleInputChange}
//         placeholder="Search..."
//         InputProps={{
//           endAdornment: (
//             <InputAdornment position="end">
//               <IconButton onClick={handleSearch}>
//                 <ArrowForwardIcon />
//               </IconButton>
//             </InputAdornment>
//           ),
//         }}
//       />
//     </div>
//   );
// };

// export default SearchComponent;


