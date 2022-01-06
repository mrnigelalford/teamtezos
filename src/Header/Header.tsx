import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
