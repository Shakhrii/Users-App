import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '@app/layouts/MainLayout';
import Users from '@pages/Users';
import LoginPage from '@pages/Login';
import NotFound from '@pages/NotFound';
import { QueryProvider } from '@app/providers/QueryProvider';

export const App = () => {
  return (
    <QueryProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Users />}></Route>
            <Route path="/users" element={<Users />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryProvider>
  );
};
