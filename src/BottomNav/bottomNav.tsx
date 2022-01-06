import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

export default function BottomNav() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: '2em', marginBottom: '2em' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" gutterBottom component="div">
            {'Twitter Banner'}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
