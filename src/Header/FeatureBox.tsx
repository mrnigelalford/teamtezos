import * as React from 'react';
import { Link, Typography } from '@mui/material';
import { Props, Item } from './Header';

export const FeatureBox = ({ project }: Props) => (
  <Item sx={{ display: 'flex', textAlign: 'left' }}>
    <div>
      <Typography variant="subtitle2" gutterBottom component="div" sx={{ flexBasis: '50%' }}>
        Featured
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        {project.title}
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div">
        {project.short_description}
      </Typography>
      <Link href="#" variant="body2">
        {project.website_link}
      </Link>
    </div>
    <img
      src={project.img}
      alt="coolLogo"
      style={{ width: '6em', height: '5em', marginLeft: 'auto' }}
    />
  </Item>
);
