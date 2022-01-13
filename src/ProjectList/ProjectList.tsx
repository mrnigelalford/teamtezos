import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import { ProjectData } from '../Data/data';
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

interface Props {
  title: string;
  CTA?: string;
  projects?: ProjectData[];
}

const TitleBar = (props: Props) => (
  <div style={{ display: 'flex', width: '100%' }}>
    <Typography variant="h5" gutterBottom component="div">
      {props.title}
    </Typography>
    {props.CTA && (
      <Button sx={{ marginLeft: 'auto' }} variant="text">
        {props.CTA}
      </Button>
    )}
  </div>
);

export default function ProjectList(props: Props) {
  let navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, marginTop: '2em', display: 'flex', flexWrap: 'wrap' }}>
      <TitleBar title={props.title} CTA={props.CTA} />
      {props.projects?.length && (
        <Grid container spacing={2}>
          {props.projects?.slice(0, 4).map((project, i) => (
            <Grid item xs={12} sm={3} key={i}>
              <Item
                sx={{ display: 'flex', flexWrap: 'wrap' }}
                onClick={() => navigate(`/project/${project.title}`)}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={project?.img} alt="coolLogo" style={{ width: '3em' }} />
                  <Typography
                    sx={{
                      marginLeft: '.8em',
                    }}
                    variant="body1"
                    component="div"
                  >
                    {project.title}
                  </Typography>
                </div>
                <Typography
                  style={{ textAlign: 'left', marginTop: '1em' }}
                  variant="body2"
                  gutterBottom
                  component="div"
                >
                  {project.description}
                </Typography>
                <Button sx={{ marginTop: '1em', marginLeft: 'auto' }}>Learn more</Button>
              </Item>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
