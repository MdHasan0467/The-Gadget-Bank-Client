import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Dashboard from '../../Layouts/Dashboard/Dashboard';
import Main from '../../Layouts/Main/Main';
import About from '../../Pages/About/About';
import AddProduct from '../../Pages/AddProduct/AddProduct';
import FAQ from '../../Pages/FAQ/FAQ';
import Login from '../../Pages/Form/Login/Login';
import Signup from '../../Pages/Form/Signup/Signup';
import Home from '../../Pages/Home/Home';
import MyProducts from '../../Pages/MyProducts/MyProducts';
import MyProfile from '../../Pages/MyProfile/MyProfile';
import MyWishList from '../../Pages/MyWishList/MyWishList';
import ProductCategoryDetails from '../../Pages/ProductCategoryDetails/ProductCategoryDetails';
import WelcomeDashboard from '../../Pages/WelcomeDashboard/WelcomeDashboard';

const Route = () => {
    const router = createBrowserRouter(
        [
            {
                element: <Main />,
                path: '/',
                children : [
                    {
                        path: '/',
                        element: <Home />
                    },
                    {
                        path: '/about',
                        element: <About />
                    },
                    {
                        path: '/faq',
                        element: <FAQ />
                    },

                    


                    {
                        path: '/:category',
                        element: <ProductCategoryDetails />, 
                        loader: ({ params }) => fetch(`http://localhost:5000/category/${params.category}`)
                    },
                ]
            },








            
            {
                element: <Dashboard />,
                path: '/dashboard',
                children : [
                    {
                        path: '/dashboard',
                        element: <WelcomeDashboard />
                    },


                    {
                        path: '/dashboard/addProduct',
                        element: <AddProduct />
                    },


                    {
                        path: '/dashboard/my-profile',
                        element: <MyProfile />
                    },


                    {
                        path: '/dashboard/my-products',
                        element: <MyProducts />
                    },

                    

                    {
                        path: '/dashboard/my-wish-list',
                        element: <MyWishList />
                    },


                ]
            },








            
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },








        ]
    )
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Route;