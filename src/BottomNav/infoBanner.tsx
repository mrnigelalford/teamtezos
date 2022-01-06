import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '4em',
}));

const testData = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'one_one',
  'two_one',
  'three_one',
  'four_one',
  'five_one',
];

interface brickProps {
  title: string;
  links: { text: string; nav: string }[];
}
const DataBrick = (bricks: brickProps) => {
  return (
    <Grid item xs={12} sm={3} style={{ textAlign: 'left' }}>
      <Typography variant="h6" gutterBottom component="div">
        {bricks.title}
      </Typography>
      {bricks.links.map((brick) => (
        <Typography variant="body1" gutterBottom component="div">
          <Link href={brick.nav} variant="body2">
            {brick.text}
          </Link>
        </Typography>
      ))}
    </Grid>
  );
};

const rowOne: brickProps = {
  title: 'Explore Tezos',
  links: [
    {
      text: 'Explore all projects',
      nav: 'home/',
    },
    {
      text: 'Interactive Ecosystem map',
      nav: 'home/',
    },
  ],
};

const rowTwo: brickProps = {
  title: 'Team Tezos',
  links: [
    {
      text: 'About',
      nav: 'home/',
    },
    {
      text: 'Promote your project',
      nav: 'home/',
    },
    {
      text: 'Become a Partner',
      nav: 'home/',
    },
    {
      text: 'Contact',
      nav: 'home/',
    },
  ],
};

const rowThree: brickProps = {
  title: 'Add a Project',
  links: [
    {
      text: 'Add a project',
      nav: 'home/',
    },
  ],
};

export default function InfoBanner() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: '2em' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" style={{ textAlign: 'left' }} gutterBottom component="div">
            {'<Icon Here>'}
          </Typography>
        </Grid>
        <DataBrick title={rowOne.title} links={rowOne.links} />
        <DataBrick title={rowTwo.title} links={rowTwo.links} />
        <DataBrick title={rowThree.title} links={rowThree.links} />
      </Grid>
    </Box>
  );
}
