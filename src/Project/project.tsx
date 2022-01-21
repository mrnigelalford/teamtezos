import { Button, Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useNavigate, useParams } from 'react-router-dom';
import tezosProjects from '../Data/data';
import { logo } from '../Header/Header';
import ProjectList from '../ProjectList/ProjectList';
import ProjectBody from './projectBody';

export default function Project() {
  const { id } = useParams();
  let navigate = useNavigate();

  const goToProjectSite = (link?: string) => (link ? window.open(link, '_blank') : navigate('/'));

  const projectFeatured = tezosProjects.filter((p) => p.isFeatured?.home)[0];

  if (!id) return <></>;
  const _id = decodeURIComponent(id);
  console.log('type: ', _id);

  console.log('tezotopia: ', tezosProjects[2]);

  const project = tezosProjects.find((p) => p.title?.toLowerCase() === _id.toLowerCase());
  if (!project) return <></>;

  const PromotedProject = () => (
    <Grid
      sm={4}
      sx={{
        p: 1,
        marginRight: 2,
        marginLeft: 'auto',
        textAlign: 'left',
        color: 'slategrey',
      }}
    >
      <Typography style={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
        Promoted Project
      </Typography>

      <Box sx={{ marginLeft: 'auto', display: 'inline-flex' }}>
        <img
          src={projectFeatured.img || logo}
          className="logo"
          alt="logo"
          style={{ maxHeight: '2em', opacity: 0.3 }}
        />
        <Box style={{ marginLeft: '1em', textAlign: 'left' }}>
          <Typography style={{ color: 'darkslategrey' }} variant="body1" component="div">
            {projectFeatured.title || 'Project Title'}
          </Typography>
          <Typography sx={{ fontSize: '.5em' }} variant="body1" gutterBottom component="div">
            {projectFeatured.short_description || 'Project Description'}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );

  const BreadCrumb = () => (
    <Box
      sx={{
        p: 1,
        m: 1,
        textAlign: 'left',
        height: '60%',
        cursor: 'pointer',
      }}
      onClick={() => navigate('/ecosystem')}
    >
      <Typography style={{ textAlign: 'left' }} variant="subtitle2" gutterBottom component="div">
        {`<`} Back to Projects
      </Typography>
    </Box>
  );

  const ProjectHeader = () => (
    <Box
      sx={{
        p: 1,
        m: 1,
        display: 'inline-flex',
        height: '60%',
        marginBottom: '3em',
      }}
    >
      <img src={project.img} className="logo" alt="logo" style={{ maxWidth: '10em' }} />
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
          {project.full_description}
        </Typography>
        <Button variant="outlined" onClick={() => goToProjectSite(project.links.website)}>
          Visit Website
        </Button>
      </Box>
    </Box>
  );

  return (
    <Container>
      <BreadCrumb />
      <ProjectHeader />
      <ProjectBody project={project} />
      <PromotedProject />

      <Box sx={{ marginTop: '4em', marginBottom: '2em', height: '4em' }}></Box>
      <ProjectList title="More Projects" CTA="Promote now" EXTERNAL_URL="/ecosystem" />
    </Container>
  );
}
