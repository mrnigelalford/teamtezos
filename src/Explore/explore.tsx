import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { tezProjects } from '../Ecosystem/ecosystem';
import { Item } from '../Categories/categories';

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
        {tezProjects.map(({ type, icon }) => (
          <Grid item xs={12} sm={3}>
            <Item>
              <FontAwesomeIcon icon={icon} />
              <Typography variant="body1" component="div" sx={{ marginTop: '.8em' }}>
                {type}
              </Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
