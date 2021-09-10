import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from 'pages/account';

export interface RouteProps {
  children?: React.ReactNode;
  element?: React.ReactElement | null;
  path?: string;
}

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
