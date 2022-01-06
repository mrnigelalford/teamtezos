import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Link, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '4em',
}));
const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const logo =
  'https://s1.qwant.com/thumbr/0x380/3/5/be45998edad9e76da3935c4be21a1b3c3e3a796dfd3153e298a206fd43c965/depositphotos_116405670-stock-photo-small-grey-white-polka-dot.jpg?u=https%3A%2F%2Fst2.depositphotos.com%2F6442704%2F11640%2Fi%2F450%2Fdepositphotos_116405670-stock-photo-small-grey-white-polka-dot.jpg';

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

const TitleBar = (props: Props) => (
  <div style={{ display: 'flex' }}>
    <Typography variant="h5" gutterBottom component="div">
      {props.title}
    </Typography>
    {props.CTA && (
      <Typography sx={{ marginLeft: 'auto' }} variant="h5" gutterBottom component="div">
        <Link href="#" variant="body2">
          {props.CTA}
        </Link>
      </Typography>
    )}
  </div>
);

export default function ProjectList(props: Props) {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: '2em' }}>
      <TitleBar title={props.title} CTA={props.CTA} />
      <Grid container spacing={2}>
        {testData.slice(0, 4).map((td, i) => (
          <Grid item xs={12} sm={3} key={td.title + i}>
            <Item sx={{ height: '14em', display: 'flex', flexWrap: 'wrap' }}>
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
              <Button sx={{ marginTop: '1em', marginLeft: 'auto' }}>Learn more</Button>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
