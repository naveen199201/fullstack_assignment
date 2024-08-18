import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import './header.css'

const Header = () => {
    return (
        <Box className='header'>
            <AppBar position="static" className='appbar' >
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                            <h2>Abstract | Help Center</h2>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant='contained' className='submitrequest'>Submit a request</Button>
                            </Grid>
                        </Grid>
                    </Box>
             </Toolbar>
          </AppBar>
         </Box>
    );
}

export default Header