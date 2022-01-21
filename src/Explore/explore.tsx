import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Item } from '../Categories/categories';
import { projectCategories } from '../Data/data';

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
        {projectCategories.map(({ name, icon }) => (
          <Grid item xs={12} sm={3}>
            <Item>
              <FontAwesomeIcon icon={icon} />
              <Typography variant="body1" component="div" sx={{ marginTop: '.8em' }}>
                {name}
              </Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
