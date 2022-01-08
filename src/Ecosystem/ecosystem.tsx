import { Box, Container, Grid, Typography } from '@mui/material';
import { typography } from '@mui/system';
import { Item } from '../Categories/categories';
import { FeatureBox, logo } from '../Header/Header';
import {
  faBalanceScaleRight,
  faCoins,
  faDatabase,
  faDonate,
  faGamepad,
  faGlasses,
  faHeart,
  faHouseDamage,
  faMoneyBillAlt,
  faPaw,
  faPeopleArrows,
  faPiggyBank,
  faRocket,
  faSchool,
  faStore,
  faUsers,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import { faArtstation } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard, faIdBadge } from '@fortawesome/free-regular-svg-icons';

interface Props {}
const title = 'ProjectOne';

const sampleProjects = [
  {
    title,
    img: logo,
  },
  {
    title,
    img: logo,
  },
  {
    title,
    img: logo,
  },
  {
    title,
    img: logo,
  },
  {
    title,
    img: logo,
  },
  {
    title,
    img: logo,
  },
];

// const categories = [
//   {
//     category: 'DEX',
//     projects: sampleProjects,
//   },
//   {
//     category: 'wallets',
//     projects: sampleProjects,
//   },
//   {
//     category: 'lending & borrowing',
//     projects: sampleProjects,
//   },
//   {
//     category: 'DEX',
//     projects: sampleProjects,
//   },
//   {
//     category: 'wallets',
//     projects: sampleProjects,
//   },
//   {
//     category: 'lending & borrowing',
//     projects: sampleProjects,
//   },
// ];

export const categories = [
  { title: 'Popular', icon: faHeart, projects: sampleProjects },
  { title: 'Meme Coins', icon: faPaw, projects: sampleProjects },
  { title: 'Marketplaces', icon: faStore, projects: sampleProjects },
  { title: 'Insurance', icon: faHouseDamage, projects: sampleProjects },
  { title: 'Launchpad', icon: faRocket, projects: sampleProjects },
  { title: 'Data', icon: faDatabase, projects: sampleProjects },
  { title: 'Stablecoin', icon: faDonate, projects: sampleProjects },
  { title: 'Oracle', icon: faGlasses, projects: sampleProjects },
  { title: 'Wallets', icon: faWallet, projects: sampleProjects },
  { title: 'Social', icon: faUsers, projects: sampleProjects },
  { title: 'NFT', icon: faArtstation, projects: sampleProjects },
  { title: 'Lending & Borrowing', icon: faBalanceScaleRight, projects: sampleProjects },
  { title: 'Identity', icon: faIdBadge, projects: sampleProjects },
  { title: 'Community', icon: faPeopleArrows, projects: sampleProjects },
  { title: 'Gaming', icon: faGamepad, projects: sampleProjects },
  { title: 'Gambling', icon: faMoneyBillAlt, projects: sampleProjects },
  { title: 'Infrastructure', icon: faSchool, projects: sampleProjects },
  { title: 'Exchanges (DEX)', icon: faPiggyBank, projects: sampleProjects },
  { title: 'Payment', icon: faCreditCard, projects: sampleProjects },
  { title: 'DEFI', icon: faCoins, projects: sampleProjects },
];

export default function Ecosystem(props: Props) {
  return (
    <Container sx={{ marginTop: '2em', maxWidth: 'initial !important' }}>
      <Grid item xs={12} md={4} sx={{ marginRight: 'auto', textAlign: 'left' }}>
        <FeatureBox />
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: '2em', display: 'flex' }}>
        {categories.map((cat) => (
          <Grid item xs={12} sm={3}>
            <Item style={{ height: 'auto', textAlign: 'left' }}>
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                sx={{ flexBasis: '50%', textAlign: 'center' }}
              >
                {cat.title}
              </Typography>
              {cat.projects.map((p) => (
                <Box sx={{ display: 'inline-flex', marginRight: '1em' }}>
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
