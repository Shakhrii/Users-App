import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '@app/layouts/MainLayout';
import Users from '@pages/Users';
import LoginPage from '@pages/Login';
import NotFound from '@pages/NotFound';
import { QueryProvider } from '@app/providers/QueryProvider';
import { ProtectedRoute, PublicRoute } from '@features/auth';
import { GlobalStyle } from './styles/GlobalStyle';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <QueryProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route element={<MainLayout />}>
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Users />} />
                <Route path="/users" element={<Users />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryProvider>
    </>
  );
};
