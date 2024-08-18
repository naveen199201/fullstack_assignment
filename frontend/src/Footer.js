import React from 'react';
import { Grid, Box, Stack } from '@mui/material';
import './footer.css'

const Footer = () => {
    return (
        <Box className='footer'  >
            <Grid container spacing={2}>
                <Grid item sm={2}>
                    <h3>Abstracts </h3>
                    <ul>
                        <li>Branches</li>
                    </ul>

                </Grid>
                <Grid item sm={2}>
                    <h3>Resources </h3>
                    <ul>
                        <li>Blog</li>
                        <li>Help Center</li>
                        <li>Release Notes</li>
                        <li>Status</li>
                    </ul>
                </Grid>
                <Grid item sm={2}>
                    <h3>Community </h3>
                    <ul>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                        <li>Facebook</li>
                        <li>Dribble</li>
                        <li>Podcast</li>
                    </ul>
                </Grid>
                <Grid item sm={2}>
                    <Stack>
                        <h3>Company</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Legal</li>

                        </ul>
                    </Stack>
                    <Stack>
                        <h4>Contact Us</h4>
                        <ul>
                            <li>info@abstract.com</li>
                            </ul>
                    </Stack>
                </Grid>
                <Grid item sm={3}>
                <h3>Community </h3>
                    <ul>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                        <li>Facebook</li>
                        <li>Dribble</li>
                        <li>Podcast</li>
                    </ul>
                    
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
