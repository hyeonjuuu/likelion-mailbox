import Layout from '@/layout/Layout';
import Home from '@/pages/home/Home';
import SignIn from '@/pages/SignIn';
import SiginUp from '@/pages/SiginUp';
import { createBrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router-dom';
import SelectEnvelope from '@/pages/SelectEnvelope';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="selectenvelope" element={<SelectEnvelope />} />
      <Route path="signup" element={<SiginUp />} />
      <Route path="signin" element={<SignIn />} />
    </Route>
  )
);

export default router;
