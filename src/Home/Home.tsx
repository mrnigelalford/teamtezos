import { Container } from '@mui/material';
import React from 'react';
import Categories from '../Categories/categories';
import tezosProjects from '../Data/data';
import Header from '../Header/Header';
import ProjectList from '../ProjectList/ProjectList';

export const Home = () => {
  const [featuredProjects] = React.useState(tezosProjects.filter((p) => p.featured));
  const [promotedProjects] = React.useState(tezosProjects.filter((p) => p.promoted));
  const [popularProjects] = React.useState(tezosProjects.filter((p) => p.popular));

  return (
    <Container>
      <Header />
      <ProjectList title="Promoted Products" CTA="Promote now" projects={promotedProjects} />
      <Categories title="Categories" />
      <ProjectList title="Popular Products" projects={popularProjects} />
      <ProjectList title="Recently Added" CTA="Show all" projects={featuredProjects} />
    </Container>
  );
};
