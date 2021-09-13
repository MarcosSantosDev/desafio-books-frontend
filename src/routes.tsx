import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { isAuthenticated } from 'lib/core/session';
import { Login } from 'pages/account';
import { Books } from 'pages/books';
import { NotFound } from 'components/contexts/general';
import { Private } from 'components/contexts/routes';

export interface RouteProps {
  children?: React.ReactNode;
  element?: React.ReactElement | null;
  path?: string;
}

const PublicRoute = (props: RouteProps) => {
  if (isAuthenticated()) {
    return <Navigate to="/" />;
  }

  return <Route {...props} />;
};

const PrivateRoute = ({ element, ...props }: RouteProps) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return (
    <Route
      {...props}
      element={
        <Private>
          <>{element}</>
        </Private>
      }
    />
  );
};

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <PrivateRoute path="/" element={<Books />} />
      <PublicRoute path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
