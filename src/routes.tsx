import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { isAuthenticated } from 'lib/core/session';
import { Login } from 'pages/account';
import { NotFound } from 'components/contexts/general';
import { Private } from 'components/contexts/routes';

export interface RouteProps {
  children?: React.ReactNode;
  element?: React.ReactElement | null;
  path?: string;
}

const PrivateRoute = (props: RouteProps) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return <Route {...props} />;
};

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <PrivateRoute
        path="/"
        element={
          <Private>
            <h2>Welcome to home!</h2>
          </Private>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
