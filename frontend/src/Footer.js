import React from 'react';
import { Grid, Box, Stack } from '@mui/material';
import './footer.css'

const Footer = () => {
    return (
        <Box className='footer'  >
            <Grid container spacing={2}>
                <Grid item sm={2}>
                    <h1>Abstracts </h1>
                    <ul>
                        <li>Branches</li>
                    </ul>

                </Grid>
                <Grid item sm={2}>
                    <h1>Resources </h1>
                    <ul>
                        <li>Blog</li>
                        <li>Help Center</li>
                        <li>Release Notes</li>
                        <li>Status</li>
                    </ul>
                </Grid>
                <Grid item sm={2.5}>
                    <h1>Community </h1>
                    <ul>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                        <li>Facebook</li>
                        <li>Dribble</li>
                        <li>Podcast</li>
                    </ul>
                </Grid>
                <Grid item sm={2.5}>
                    
                        <h1>Company</h1>
                        <ul>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Legal</li>
                        </ul>
                    
                    
                        <h4>Contact Us</h4>
                        {/* <ul> */}
                            <p className='contact-us'>info@abstract.com</p>
                        {/* </ul> */}
                    
                </Grid>
                <Grid item sm={3} className='copyright'>
                    <ul className='footer_logo'>
                        <img src="/logo.png" alt="Circle" className='footer-image' />
                    </ul>
                </Grid>
                <Grid item sm={9} >
                </Grid>
                <Grid item sm={3} >
                    <ul className='footer-copyright'>
                        <li> © Copyright 2022</li>
                        <li>Abstract Studio Design, Inc</li>
                        <li>All rights reserved</li>
                    </ul>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
