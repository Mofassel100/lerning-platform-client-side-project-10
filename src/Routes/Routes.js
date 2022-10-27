import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from '../AllComponent/Blog/Blog';
import Course from '../AllComponent/Course/Course';
import DetailsPage from '../AllComponent/Course/DetailsPage/DetailsPage';
import FAQ from '../AllComponent/FAQ/FAQ';
import Home from '../AllComponent/Home/Home';
import Login from '../AllComponent/Login/Login';
import PrimiumAccess from '../AllComponent/PremiumAccess/PrimiumAccess';
import Register from '../AllComponent/Register/Register';
import SignUP from '../AllComponent/SignUp/SignUP';
import Main from '../Layout/Main/Main';
import PrivetRouter from './PrivetRouter';

const Routes = () => {
    const router = createBrowserRouter([
{
path:'/',
element:<Main></Main>,
children:[
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/course',
        element:<Course></Course>,
        loader:()=>fetch('http://localhost:5000/homepage/')
        
    },
    {
path:'/detailspage/:id',
element:<DetailsPage></DetailsPage>,
loader: ({params})=>fetch(`http://localhost:5000/homepage/${params.id}`)

    },
    {
        path:'/login',
        element:<Login></Login>

    },
   
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path:'/signUp',
        element:<SignUP></SignUP>
    },
    {
        path:'faq',
        element:<FAQ></FAQ>
    },
    {
        path:'/primium/:id',
        element:<PrivetRouter><PrimiumAccess></PrimiumAccess></PrivetRouter>,
        loader: ({params})=>fetch(`http://localhost:5000/homepage/${params.id}`)
      
    },
    {
        path:'/blog',
        element:<Blog></Blog>
    }

]

}



    ])
    
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Routes;