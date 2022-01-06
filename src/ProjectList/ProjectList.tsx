import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '4em',
}));
const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

const logo =
  'https://uploads-ssl.webflow.com/60d83e3c6cf84748f7d0a62b/61aa33f03400541381c2b2f5_MyHomePlanet.png';

const title = 'Super Awesome Project';

const testData = [
  { title, logo, description },
  { title, logo, description },
  { title, logo, description },
  { title, logo, description },
  { title, logo, description },
  { title, logo, description },
  { title, logo, description },
  { title, logo, description },
  { title, logo, description },
  { title, logo, description },
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
            <Item sx={{ height: '14em', textAlign: 'initial' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={td.logo} alt="coolLogo" style={{ width: '3em' }} />
                <Typography
                  sx={{
                    marginLeft: '.8em',
                  }}
                  variant="body1"
                  component="div"
                >
                  {td.title}
                </Typography>
              </div>
              <Typography
                style={{ textAlign: 'left', marginTop: '1em' }}
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
