import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Link, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const logo =
  'https://s1.qwant.com/thumbr/0x380/3/5/be45998edad9e76da3935c4be21a1b3c3e3a796dfd3153e298a206fd43c965/depositphotos_116405670-stock-photo-small-grey-white-polka-dot.jpg?u=https%3A%2F%2Fst2.depositphotos.com%2F6442704%2F11640%2Fi%2F450%2Fdepositphotos_116405670-stock-photo-small-grey-white-polka-dot.jpg';

const FeatureText = () => (
  <div>
    <Typography variant="subtitle2" gutterBottom component="div" sx={{ flexBasis: '50%' }}>
      Featured
    </Typography>
    <Typography variant="subtitle1" gutterBottom component="div">
      Title - Single sentence description
    </Typography>
    <Typography variant="subtitle2" gutterBottom component="div">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Typography>
    <Link href="#" variant="body2">
      coolsite.xyz
    </Link>
  </div>
);

const headerText = {
  title: 'Explore the Tezos Ecosystem',
  description:
    'Our mission is to make information more accessible by providing an overview of all projects and dApps building on Tezos.',
};

export const FeatureBox = () => (
  <Item sx={{ display: 'flex', textAlign: 'left' }}>
    <FeatureText />
    <img src={logo} alt="coolLogo" style={{ width: '6em', height: '5em', marginLeft: 'auto' }} />
  </Item>
);

export default function Header() {
  return (
    <Box style={{ marginTop: '2em' }} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Typography style={{ textAlign: 'left' }} variant="h4" gutterBottom component="div">
            {headerText.title}
          </Typography>
          <Typography
            style={{ textAlign: 'left', marginBottom: '.5em', marginTop: '.5em' }}
            variant="body1"
            gutterBottom
            component="div"
          >
            {headerText.description}
          </Typography>
          <div style={{ marginTop: '1.5em', display: 'flex' }}>
            <Button variant="outlined">Explore all projects</Button>
            <Button variant="text" sx={{ marginLeft: '5em' }}>
              Tezos Ecosystem
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={4} sx={{ marginLeft: 'auto', textAlign: 'left' }}>
          <FeatureBox />
        </Grid>
      </Grid>
    </Box>
  );
}
