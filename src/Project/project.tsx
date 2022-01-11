import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import BottomNav from '../BottomNav/bottomNav';
import { mockCollection } from '../Data/mockData';
import { FeatureBox } from '../Header/Header';
import ProjectList from '../ProjectList/ProjectList';

export default function Project() {
  const { id } = useParams();
  const project = mockCollection.filter((data) => data.id === id)[0];

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

  return (
    <Container>
      <Box
        sx={{
          p: 1,
          m: 1,
          textAlign: 'left',
          height: '60%',
        }}
      >
        <Typography style={{ textAlign: 'left' }} variant="subtitle2" gutterBottom component="div">
          {`<`} Back to Projects
        </Typography>
      </Box>
      <Box
        sx={{
          p: 1,
          m: 1,
          justifyContent: 'space-between',
          display: 'inline-flex',
          height: '60%',
          marginBottom: '3em',
        }}
      >
        <img src={project.collectionImg} className="logo" alt="logo" style={{ maxWidth: '10em' }} />
        <Box style={{ marginLeft: '1em', textAlign: 'left' }}>
          <Typography style={{ textAlign: 'left' }} variant="h4" gutterBottom component="div">
            {project.title}
          </Typography>
          <Typography
            style={{ textAlign: 'left', marginBottom: '.5em', marginTop: '.5em' }}
            variant="body1"
            gutterBottom
            component="div"
          >
            {project.description}
          </Typography>
          <Button variant="outlined">Go There!</Button>
        </Box>
      </Box>
      <Box
        sx={{
          p: 1,
          m: 1,
          display: 'flex',
        }}
      >
        <Grid item sm={7} sx={{ marginRight: '2em' }}>
          <Typography
            style={{ textAlign: 'left', flexWrap: 'wrap', height: 'auto' }}
            variant="h6"
            gutterBottom
            component="div"
          >
            About {project.title}
          </Typography>
          <Typography style={{ textAlign: 'left' }} variant="body1" gutterBottom component="div">
            {project.fullDescription}
          </Typography>
        </Grid>
        <Grid
          sm={5}
          sx={{ border: '1px solid silver', borderRadius: '.3em', padding: '2em', top: '-3em' }}
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
              <ProjectInfo title="Type:" subtitle="Row One" />
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
      </Box>

      <Box sx={{ marginTop: '4em', marginBottom: '2em', height: '4em' }}></Box>
      <ProjectList title="More Projects" CTA="Promote now" />
    </Container>
  );
}
