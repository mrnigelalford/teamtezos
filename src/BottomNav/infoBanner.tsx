import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link, Typography } from '@mui/material';

interface brickProps {
  title: string;
  links: { text: string; nav: string }[];
}
const DataBrick = (bricks: brickProps) => {
  return (
    <Grid item xs={12} sm={3} style={{ textAlign: 'center' }}>
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
        nav: '/ecosystem',
      },
    ],
  },
  {
    title: 'Team Tezos',
    links: [
      // {
      //   text: 'About',
      //   nav: '/',
      // },
      {
        text: 'Promote your project',
        nav: 'https://forms.gle/8mrUCtNf2AG7LTqR7',
      },
      {
        text: 'Contact',
        nav: 'mailto:hello@teamtezos.xyz?subject=Mail from our Team Tezos',
      },
    ],
  },
  {
    title: 'Add a Project',
    links: [
      {
        text: 'Add a project',
        nav: 'https://forms.gle/gJEW9U1vgJf1jJun9',
      },
    ],
  },
];

export default function InfoBanner() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: '2em' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <img src={'teamtezos512.png'} style={{ width: '10em' }} alt="Team Tezos" />
        </Grid>

        {rows.map((r, i) => (
          <DataBrick key={r.title + i} title={r.title} links={r.links} />
        ))}
      </Grid>
    </Box>
  );
}
