import React from 'react';
import { Container, Grid, Box, Button } from '@mui/material';

const Loader = () => {
    return (
        <Container>
            <Grid container style={{height: window.innerHeight - 50}}
            alignItems={'center'}
            justifyContent={'center'}
            >
                <Grid
                container
                alignItems={'center'}
                direction={'column'}
                >
                    <div class="lds-hourglass"></div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;