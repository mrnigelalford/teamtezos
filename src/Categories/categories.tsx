import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tezosProjects, { projectCategories } from '../Data/data';
import { useNavigate } from 'react-router-dom';

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '4em',
}));

interface Props {
  title: string;
}

export default function Categories(props: Props) {
  let navigate = useNavigate();

  projectCategories.map((cat) =>
    tezosProjects.forEach((p) => {
      if (p.categories[0] === cat.name) {
        cat.projects.push(p);
      }
    })
  );

  return (
    <Box sx={{ flexGrow: 1, marginTop: '2em', cursor: 'pointer' }}>
      <Typography style={{ textAlign: 'left' }} variant="h5" gutterBottom component="div">
        {props.title}
      </Typography>

      <Grid container spacing={2}>
        {projectCategories
          .filter((cat) => cat.projects.length)
          .map(({ name, icon }) => (
            <Grid item xs={12} sm={3} onClick={() => navigate(`/category/${name}`)}>
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
