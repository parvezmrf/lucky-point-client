import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Blog from '../../Pages/Home/Blog/Blog';
import Home from '../../Pages/Home/Home/Home';
import AddService from '../../Pages/Home/Services/AddService';
import AllServices from '../../Pages/Home/Services/AllService';
import ServiceDetails from '../../Pages/Home/Services/ServiceDetails';
import Login from '../../Pages/Login/Login';
import NotFound from '../../Pages/NotFound/NotFound';
import Register from '../../Pages/Register/Register';
import ForReview from '../../Pages/ReviewPage/ForReview';
import Myreview from '../../Pages/ReviewPage/Myreview';
import UpdateReview from '../../Pages/ReviewPage/UpdateReview';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

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
                loader: ({ params }) => fetch(`https://lucky-point-server-parvezmrf.vercel.app/services/${params.id}`)
            },
            {
                path: '/myreview',
                element: <PrivateRoute><Myreview></Myreview></PrivateRoute>
            },
            {
                path: '/updatereview/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`https://lucky-point-server-parvezmrf.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/servicedetils/:id',
                element: <ForReview></ForReview>,
                loader: ({ params }) => fetch(`https://lucky-point-server-parvezmrf.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    }
])

export default router;