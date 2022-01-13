import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Grid, Typography } from '@mui/material';
import { ProjectData } from '../Data/data';

const mediumGrey = '#f0efef';
const grey = '#d2d2d2';

const ProjectInfo = (props: { title: string; subtitle: string }) => (
  <div
    style={{
      borderBottom: `1px solid ${grey}`,
      display: 'inline-flex',
      justifyContent: 'left',
      marginTop: '.2em',
      marginBottom: '.2em',
      padding: '.5em',
    }}
  >
    <Typography variant="body2" sx={{ marginRight: 'auto' }}>
      {props.title}
    </Typography>
    <Typography variant="body2" sx={{ marginLeft: 'auto' }}>
      {props.subtitle}
    </Typography>
  </div>
);

const ProjectBody = (props: { project: ProjectData }) => (
  <Grid
    container
    sx={{
      p: 2,
    }}
    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
  >
    <Grid item sm={7} xs={12} sx={{ paddingRight: '1.2em' }}>
      <Typography
        style={{ textAlign: 'left', flexWrap: 'wrap', height: 'auto' }}
        variant="h6"
        gutterBottom
        component="div"
      >
        About {props.project.title}
      </Typography>
      <Typography style={{ textAlign: 'left' }} variant="body1" gutterBottom component="div">
        {props.project.description}
      </Typography>
    </Grid>
    <Grid
      item
      sm={5}
      xs={12}
      sx={{ border: '1px solid silver', borderRadius: '.3em', padding: '2em' }}
    >
      <Box sx={{ height: 'auto' }}>
        <Box
          sx={{
            background: mediumGrey,
            display: 'flex',
            flexDirection: 'column',
            padding: '.8em',
            borderRadius: '.3em',
          }}
        >
          <ProjectInfo
            title="Type:"
            subtitle={props.project.type?.replace(/^\w/, (c) => c.toUpperCase()) || 'Project Type'}
          />
          <ProjectInfo title="Release date:" subtitle="Row Two" />
          <ProjectInfo title="Total Supply:" subtitle="`10000`" />
        </Box>
        <Box
          sx={{
            background: mediumGrey,
            marginTop: '1em',
            marginBottom: '1em',
            display: 'flex',
            justifyContent: 'center',
            padding: '.8em',
            borderRadius: '.3em',
          }}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </Box>
        <Box
          sx={{
            display: 'inline-flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Button variant="outlined">Explore More</Button>
          <Button variant="outlined">Tezos Ecosystem</Button>
        </Box>
      </Box>
    </Grid>
  </Grid>
);

export default ProjectBody;
