import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link, Typography } from '@mui/material';

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
        <Typography key={brick.text} variant="body1" gutterBottom component="div">
          <Link href={brick.nav} variant="body2">
            {brick.text}
          </Link>
        </Typography>
      ))}
    </Grid>
  );
};

const rows = [
  {
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
  },
  {
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
  },
  {
    title: 'Add a Project',
    links: [
      {
        text: 'Add a project',
        nav: 'home/',
      },
    ],
  },
];

export default function InfoBanner() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: '2em' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" style={{ textAlign: 'left' }} gutterBottom component="div">
            {'<Icon Here>'}
          </Typography>
        </Grid>

        {rows.map((r, i) => (
          <DataBrick key={r.title + i} title={r.title} links={r.links} />
        ))}
      </Grid>
    </Box>
  );
}
