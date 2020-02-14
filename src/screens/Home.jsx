import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import NavBar from 'components/NavBar';
import homeImage from './images/home.jpg';

const useStyles = makeStyles({
  heroImage: {
    backgroundImage: `url(${homeImage})`,
    height: 300,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
});

function Home(props) {
  const styles = useStyles();
  return (
    <div>
      <NavBar title="Inicio" />
      <div className={styles.heroImage}></div>
      <Container>
        <Grid container>
          <Grid item xs="12">
            <Typography variant="h2">Bienvenido</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Home.propTypes = {
  path: PropTypes.string.isRequired
};

export default Home;
