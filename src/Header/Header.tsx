import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const logo =
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

export default function Header() {
  return (
    <Box style={{ marginTop: '2em' }} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {/* <Item> */}
          <Grid item xs={12}>
            <Item style={{ border: '1px solid grey', height: '1em' }}>xs=4</Item>
          </Grid>
          <Grid item xs={12}>
            <Item style={{ border: '1px solid grey', height: '1em' }}>xs=8</Item>
          </Grid>
          {/* </Item> */}
        </Grid>
        <Grid item xs={4}>
          <Item sx={{ display: 'flex', textAlign: 'left' }}>
            <FeatureText />
            <img
              src={logo}
              alt="coolLogo"
              style={{ width: '6em', height: '5em', marginLeft: 'auto' }}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
