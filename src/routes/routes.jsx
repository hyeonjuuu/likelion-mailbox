import Layout from '@/layout/Layout';
import Home from '@/pages/home/Home';
import SignIn from '@/pages/signin/SignIn';
import SiginUp from '@/pages/signup/SiginUp';
import { createBrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router-dom';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='signup' element={<SiginUp />} />
            <Route path='signin' element={<SignIn />} />
        </Route>
    )
)

export default router