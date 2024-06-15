import React from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';

const DynamicBreadcrumbs = () => {
  const location = useLocation();
  const breadcrumbs = location.pathname.split('/');

  return (
    <Breadcrumbs items={breadcrumbs} separator=">" />
  );
};

export default DynamicBreadcrumbs;