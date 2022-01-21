import { Box, Container, Grid, Typography } from '@mui/material';
import { Item } from '../Categories/categories';
import { FeatureBox } from '../Header/FeatureBox';

import React, { useEffect } from 'react';
import tezosProjects, {
  ProjectData,
  projectCategories,
  resetProjectData,
  projectDataModel,
} from '../Data/data';
import { useNavigate } from 'react-router-dom';

interface Props {}

export default function Ecosystem(props: Props) {
  const [projects, setProjects] = React.useState(projectCategories);
  let navigate = useNavigate();

  useEffect(() => {
    resetProjectData();
    console.log('success');
    tezosProjects.forEach((project: ProjectData) => {
      const projMatch = projectCategories.find(
        (cat) => cat.name.toLowerCase() === project.title?.toLowerCase()
      );
      if (projMatch && projMatch.projects.filter((p) => p.title === project.title).length === 0) {
        projMatch.projects.push(project as projectDataModel);
      }
    });
    console.log('pc: ', projectCategories);
    setProjects(projectCategories.filter((cat) => cat.projects.length));
  }, []);

  const ecosystemFeatured = tezosProjects.filter((p) => p.isFeatured?.ecosystem)[0];

  return (
    <Container sx={{ marginTop: '2em', maxWidth: 'initial !important' }}>
      <Grid item xs={12} sm={3} sx={{ marginRight: 'auto', textAlign: 'left' }}>
        <Grid sx={{ marginRight: 'auto' }}>
          <FeatureBox project={ecosystemFeatured} />
        </Grid>
        <Grid sx={{ top: '5em', position: 'absolute', right: '2.5em' }}>
          <Typography
            variant="body2"
            gutterBottom
            component="div"
            sx={{
              flexBasis: '50%',
              textAlign: 'right',
              color: 'rgba(0, 0, 0, 0.49)',
              fontWeight: 'bold',
            }}
          >
            Project Count: {tezosProjects.length}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: '2em', display: 'flex' }}>
        {projects.map((proj, i) => (
          <Grid item xs={12} sm={3} key={i}>
            <Item style={{ height: 'auto', textAlign: 'left' }}>
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                sx={{ flexBasis: '50%', textAlign: 'center' }}
              >
                {proj.name} ({proj.projects.length})
              </Typography>
              {proj.projects.map((p, i) => (
                <Box
                  key={i}
                  sx={{ display: 'inline-flex', marginRight: '1em', cursor: 'pointer' }}
                  onClick={() => navigate(`/project/${p.title}`)}
                >
                  <img src={p.img} alt="project" style={{ width: '2em', height: '2em' }} />
                  <Typography
                    variant="body2"
                    sx={{ marginLeft: '.3em' }}
                    gutterBottom
                    component="div"
                  >
                    {p.title}
                  </Typography>
                </Box>
              ))}
            </Item>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
