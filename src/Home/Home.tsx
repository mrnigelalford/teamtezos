import { Container } from '@mui/material';
import React from 'react';
import Categories from '../Categories/categories';
import tezosProjects from '../Data/data';
import Header from '../Header/Header';
import ProjectList from '../ProjectList/ProjectList';

export const Home = () => {
  const [featuredProjects] = React.useState(tezosProjects.filter((p) => p.isFeatured.home));
  const [promotedProjects] = React.useState(tezosProjects.filter((p) => p.isFeatured.promoted));
  const [popularProjects] = React.useState(tezosProjects.filter((p) => p.isFeatured.popular));

  return (
    <Container>
      <Header />
      <ProjectList
        title="Promoted Products"
        CTA="Promote now"
        EXTERNAL_URL="https://forms.gle/RiiuPuNT8sthTgQZ7"
        projects={promotedProjects}
      />
      <Categories title="Categories" />
      <ProjectList title="Popular Products" projects={popularProjects} EXTERNAL_URL="/" />
      <ProjectList
        title="Recently Added"
        CTA="Show all"
        projects={featuredProjects}
        EXTERNAL_URL="/"
      />
    </Container>
  );
};
