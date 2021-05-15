import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CompaniesList from '../CompaniesList';

const HomePage = () => (
  <>
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h6">
          Mission 2121
        </Typography>
      </Toolbar>
    </AppBar>
    <Container>
      <CompaniesList />
    </Container>
  </>
);

export default HomePage;
