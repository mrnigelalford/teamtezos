import { Box, Container, Grid, Typography } from '@mui/material';
import { Item } from '../Categories/categories';
import { FeatureBox } from '../Header/Header';
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
  faUsers,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import { faArtstation } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard, faIdBadge } from '@fortawesome/free-regular-svg-icons';
import React, { useEffect } from 'react';
import tezosProjects from '../Data/data';

interface Props {}

interface ProjectData {
  type?: string;
  title?: string;
  description?: string;
  website_link?: string;
  social_link?: string;
  misc_link?: string;
  telegram_link?: string;
  img?: string;
}

export const tezProjects = [
  { type: 'NFT', icon: faArtstation, projects: [] as ProjectData[] },
  { type: 'DEFI', icon: faCoins, projects: [] as ProjectData[] },
  { type: 'Dapp', icon: faUsers, projects: [] as ProjectData[] },
  { type: 'Tools', icon: faBalanceScaleRight, projects: [] as ProjectData[] },
  { type: 'Developers', icon: faPaw, projects: [] as ProjectData[] },
  { type: 'Real-estate', icon: faHouseDamage, projects: [] as ProjectData[] },
  { type: 'Stablecoin', icon: faDonate, projects: [] as ProjectData[] },
  { type: 'Wallet', icon: faWallet, projects: [] as ProjectData[] },
  { type: 'Corporate Baker', icon: faSchool, projects: [] as ProjectData[] },
  { type: 'DAO', icon: faPeopleArrows, projects: [] as ProjectData[] },
  { type: 'Exchanges (DEX)', icon: faPiggyBank, projects: [] as ProjectData[] },
  { type: 'Identity', icon: faIdBadge, projects: [] as ProjectData[] },
  { type: 'Community', icon: faHeart, projects: [] as ProjectData[] },
  { type: 'Oracle', icon: faGlasses, projects: [] as ProjectData[] },
  { type: 'Data', icon: faDatabase, projects: [] as ProjectData[] },
  { type: 'Gaming', icon: faGamepad, projects: [] as ProjectData[] },
  { type: 'Education', icon: faMoneyBillAlt, projects: [] as ProjectData[] },
  { type: 'Insurance', icon: faCreditCard, projects: [] as ProjectData[] },
  { type: 'Launchpad', icon: faRocket, projects: [] as ProjectData[] },
];

export default function Ecosystem(props: Props) {
  const [projects, setProjects] = React.useState(tezProjects as ProjectData[]);

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

    setProjects(tezProjects);
  }, [projects]);

  return (
    <Container sx={{ marginTop: '2em', maxWidth: 'initial !important' }}>
      <Grid item xs={12} md={4} sx={{ marginRight: 'auto', textAlign: 'left' }}>
        <FeatureBox />
        Count: {tezosProjects.length}
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: '2em', display: 'flex' }}>
        {tezProjects.map((cat, i) => (
          <Grid item xs={12} sm={3} key={i}>
            <Item style={{ height: 'auto', textAlign: 'left' }}>
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                sx={{ flexBasis: '50%', textAlign: 'center' }}
              >
                {cat.type} ({cat.projects.length})
              </Typography>
              {cat.projects.map((p, i) => (
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
