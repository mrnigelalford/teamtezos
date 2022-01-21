import { faDiscord, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Grid, Typography } from '@mui/material';
import { projectDataModel } from '../Data/data';

const mediumGrey = '#f0efef';
const grey = '#d2d2d2';

const ProjectInfo = (props: { title: string; subtitle: string; sx?: {} }) => (
  <div
    style={{
      borderBottom: `1px solid ${grey}`,
      display: 'inline-flex',
      justifyContent: 'left',
      marginTop: '.2em',
      marginBottom: '.2em',
      padding: '.5em',
      ...props.sx,
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

const ProjectBody = (props: { project: projectDataModel }) => {
  const setType = (project: projectDataModel): string => {
    if (!project) return '';
    let c;
    if (project.categories) {
      c = project?.categories[0].replace(/^\w/, (c: string) => c.toUpperCase());
    }
    const t = project?.categories[0]?.replace(/^\w/, (c) => c.toUpperCase());
    return c || t || 'Test Type';
  };

  return (
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
          {props.project.full_description}
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
              subtitle={setType(props.project) || 'Project Type'}
              sx={{ borderBottom: 'none' }}
            />
            <ProjectInfo sx={{ display: 'none' }} title="Release date:" subtitle="Row Two" />
            <ProjectInfo
              sx={{ borderBottom: 'none', display: 'none' }}
              title="Total Supply:"
              subtitle="`10000`"
            />
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
              cursor: 'pointer',
            }}
          >
            {props.project.links.twitter && (
              <FontAwesomeIcon
                icon={faTwitter}
                onClick={() => window.open(props.project.links.twitter, '_blank')}
                style={{ cursor: 'pointer' }}
              />
            )}
            {props.project.links.discord && (
              <FontAwesomeIcon
                icon={faDiscord}
                onClick={() => window.open(props.project.links.discord, '_blank')}
                style={{ cursor: 'pointer', marginLeft: '1em' }}
              />
            )}
            {props.project.links.telegram && (
              <FontAwesomeIcon
                icon={faTelegram}
                onClick={() => window.open(props.project.links.telegram, '_blank')}
                style={{ cursor: 'pointer', marginLeft: '1em' }}
              />
            )}
            {props.project.links.website && (
              <FontAwesomeIcon
                icon={faGlobe}
                onClick={() => window.open(props.project.links.website, '_blank')}
                style={{ cursor: 'pointer', marginLeft: '1em' }}
              />
            )}
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
};

export default ProjectBody;
