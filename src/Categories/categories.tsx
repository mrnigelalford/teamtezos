import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoins,
  faHeart,
  faMoneyBillAlt,
  faPaw,
  faRocket,
  faStore,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import { faArtstation } from '@fortawesome/free-brands-svg-icons';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '4em',
}));

const categories = [
  { title: 'Popular', icon: faHeart },
  { title: 'Meme Coins', icon: faPaw },
  { title: 'Marketplaces', icon: faStore },
  { title: 'Launchpad', icon: faRocket },
  { title: 'wallet', icon: faWallet },
  { title: 'NFT', icon: faArtstation },
  { title: 'Gambling', icon: faMoneyBillAlt },
  { title: 'DEFI', icon: faCoins },
];

interface Props {
  title: string;
}

export default function Categories(props: Props) {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: '2em' }}>
      <Typography style={{ textAlign: 'left' }} variant="h5" gutterBottom component="div">
        {props.title}
      </Typography>

      <Grid container spacing={2}>
        {categories.map(({ title, icon }) => (
          <Grid item xs={12} sm={3}>
            <Item>
              <Typography variant="body1" component="div">
                {title}
              </Typography>
              <FontAwesomeIcon icon={icon} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
