import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function BottomNav() {
  const twitterURl = 'https://twitter.com/alforddesign';
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{
        marginTop: '2em',
        color: 'rgba(0, 0, 0, 0.39)',
        paddingLeft: '9%',
        paddingRight: '9%',
      }}
    >
      <Grid xs={12} sx={{ textAlign: 'left' }}>
        <Typography
          variant="body2"
          gutterBottom
          component="div"
          sx={{ cursor: 'pointer', color: 'rgba(0, 0, 0, 0.5)' }}
          onClick={() => window.open(twitterURl, '_blank')}
        >
          <FontAwesomeIcon icon={faTwitter} /> - Follow @Alforddesign on Twitter
        </Typography>
        <Typography variant="body2" gutterBottom component="div">
          * The Content is for informational purposes only, you should not construe any such
          information or other material as legal, tax, investment, financial, or other advice.
        </Typography>
        <Typography variant="body2" gutterBottom component="div">
          Copyright © 2022 Team Tezos. All rights reserved.
        </Typography>
      </Grid>
    </Box>
  );
}
