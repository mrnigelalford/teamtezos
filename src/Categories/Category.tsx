import { Container, Grid, Typography } from '@mui/material';
import { Item } from '../Categories/categories';
import { FeatureBox } from '../Header/Header';
import tezosProjects from '../Data/data';
import { useParams } from 'react-router-dom';

export default function Category() {
  const { id } = useParams();
  const filteredCategory = tezosProjects.filter((p) => p.type.toLowerCase() === id?.toLowerCase());
  return (
    <Container sx={{ marginTop: '2em', maxWidth: 'initial !important' }}>
      <Grid item xs={12} md={4} sx={{ marginRight: 'auto', textAlign: 'left' }}>
        <FeatureBox />
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: '2em', display: 'flex' }}>
        <Grid item xs={12}>
          <Item style={{ height: 'auto', textAlign: 'left' }}>
            <Typography variant="subtitle2" gutterBottom component="div" sx={{ flexBasis: '50%' }}>
              {filteredCategory[0].type} ({filteredCategory.length})
            </Typography>
            {filteredCategory.map((p, i) => (
              <Grid
                item
                xs={12}
                sx={{ borderBottom: '1px solid black', display: 'flex', padding: '1em' }}
              >
                <img
                  src={p.img}
                  alt="project"
                  style={{
                    height: '8em',
                    display: 'inline-flex',
                    marginRight: 'auto',
                  }}
                />
                <Grid xs={10} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                  <Typography
                    variant="body1"
                    sx={{ marginLeft: '.3em' }}
                    gutterBottom
                    component="div"
                  >
                    {p.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ marginLeft: '.3em' }}
                    gutterBottom
                    component="div"
                  >
                    {p.description}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}
