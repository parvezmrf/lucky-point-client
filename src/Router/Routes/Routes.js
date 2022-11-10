import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Blog from '../../Pages/Home/Blog/Blog';
import Home from '../../Pages/Home/Home/Home';
import AllServices from '../../Pages/Home/Services/AllService';
import ServiceDetails from '../../Pages/Home/Services/ServiceDetails';
import Login from '../../Pages/Login/Login';
import NotFound from '../../Pages/NotFound/NotFound';
import Register from '../../Pages/Register/Register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/allservices',
                element: <AllServices></AllServices>
            },
            {
                path: '/servicedetils/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/*',
                element: <NotFound></NotFound>
            }
        ]
    }
])

export default router;