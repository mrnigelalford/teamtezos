import { Box, Container, Grid, Typography } from '@mui/material';
import { Item } from '../Categories/categories';
import { FeatureBox } from '../Header/Header';

import React, { useEffect } from 'react';
import tezosProjects, { PR, ProjectData, tezProjects } from '../Data/data';

interface Props {}

export default function Ecosystem(props: Props) {
  const [projects, setProjects] = React.useState(tezProjects as PR[]);

  useEffect(() => {
    tezosProjects.forEach((project: ProjectData) => {
      const found = tezProjects.find(
        (cat) => cat.type.toLowerCase() === project.type?.toLowerCase()
      );
      if (found) {
        found.projects.push({
          title: project.title,
          description: project.description,
          website_link: project.website_link,
          social_link: project.social_link,
          misc_link: project.misc_link,
          telegram_link: project.telegram_link,
          img: project.img,
        });
      }
    });
    setProjects(tezProjects.filter((cat) => cat.projects.length) as PR[]);
  }, []);

  return (
    <Container sx={{ marginTop: '2em', maxWidth: 'initial !important' }}>
      <Grid item xs={12} md={4} sx={{ marginRight: 'auto', textAlign: 'left' }}>
        <FeatureBox />
        Count: {tezosProjects.length}
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
                {proj.type} ({proj.projects.length})
              </Typography>
              {proj.projects.map((p, i) => (
                <Box key={i} sx={{ display: 'inline-flex', marginRight: '1em' }}>
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
