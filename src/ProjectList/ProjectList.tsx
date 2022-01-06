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

const logo =
  'https://uploads-ssl.webflow.com/60d83e3c6cf84748f7d0a62b/61aa33f03400541381c2b2f5_MyHomePlanet.png';
const testData = [
  { title: 'one', logo, description: 'descriptions are really good' },
  { title: 'two', logo, description: 'descriptions are really good' },
  { title: 'three', logo, description: 'descriptions are really good' },
  { title: 'four', logo, description: 'descriptions are really good' },
  { title: 'five', logo, description: 'descriptions are really good' },
  { title: 'one_one', logo, description: 'descriptions are really good' },
  { title: 'two_one', logo, description: 'descriptions are really good' },
  { title: 'three_one', logo, description: 'descriptions are really good' },
  { title: 'four_one', logo, description: 'descriptions are really good' },
  { title: 'five_one', logo, description: 'descriptions are really good' },
];

interface Props {
  title: string;
  CTA?: string;
}

export default function ProjectList(props: Props) {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: '2em' }}>
      <Typography style={{ textAlign: 'left' }} variant="h5" gutterBottom component="div">
        {props.title}
      </Typography>
      {props.CTA && (
        <Typography style={{ textAlign: 'right' }} variant="h5" gutterBottom component="div">
          <Link href="#" variant="body2">
            {props.CTA}
          </Link>
        </Typography>
      )}

      <Grid container spacing={2}>
        {testData.map((td, i) => (
          <Grid item xs={12} sm={3} key={td.title + i}>
            <Item sx={{ border: '1px solid grey', height: '15em' }}>
              <img src={td.logo} alt="coolLogo" style={{ width: '3em' }} />
              <Typography
                sx={{ textAlign: 'center', display: 'inline' }}
                variant="h5"
                component="div"
              >
                {td.title}
              </Typography>
              <Typography
                style={{ textAlign: 'left' }}
                variant="body2"
                gutterBottom
                component="div"
              >
                {td.description}
              </Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
