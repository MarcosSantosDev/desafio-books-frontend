import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { isAuthenticated } from 'lib/core/session';
import { Login } from 'pages/account';
import { Books } from 'pages/books';
import * as CC from 'components/contexts';

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
        <CC.WrapperApp>
          <>{element}</>
        </CC.WrapperApp>
      }
    />
  );
};

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <PrivateRoute path="/" element={<Books />} />
      <PublicRoute path="/login" element={<Login />} />
      <Route path="*" element={<CC.NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
