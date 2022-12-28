import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '../layout';

// Route Page Lazy Load
const Dashboard = lazy(() => import('../pages/Dashboard'));
const NotFound = lazy(() => import('../pages/NotFound'));

const RoutesWrapper = () => (
  <Suspense fallback={null}>
    <Routes>
      <Route element={<Layout />}>
        <Route exact index element={<Dashboard />} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  </Suspense>
);

export default RoutesWrapper;