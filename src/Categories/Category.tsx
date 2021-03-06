import { Container, Grid, Typography } from '@mui/material';
import { Item } from '../Categories/categories';
import { FeatureBox } from '../Header/FeatureBox';
import tezosProjects from '../Data/data';
import { useParams } from 'react-router-dom';

export default function Category() {
  const { id } = useParams();
  const filteredCategory = tezosProjects.filter(
    (p) => p.categories[0]?.toLowerCase() === id?.toLowerCase()
  );
  const categoryFeatured = tezosProjects.filter((p) => p.isFeatured?.categories)[0];

  return (
    <Container sx={{ marginTop: '2em', maxWidth: 'initial !important' }}>
      <Grid item xs={12} md={4} sx={{ marginRight: 'auto', textAlign: 'left' }}>
        <FeatureBox project={categoryFeatured} />
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: '2em', display: 'flex' }}>
        <Grid item xs={12}>
          <Item style={{ height: 'auto', textAlign: 'left' }}>
            <Typography variant="subtitle2" gutterBottom component="div" sx={{ flexBasis: '50%' }}>
              {filteredCategory[0].title} ({filteredCategory.length})
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
                    {p.full_description}
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
