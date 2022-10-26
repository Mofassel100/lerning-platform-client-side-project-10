import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Course from '../AllComponent/Course/Course';
import DetailsPage from '../AllComponent/Course/DetailsPage/DetailsPage';
import Home from '../AllComponent/Home/Home';
import Login from '../AllComponent/Login/Login';
import Register from '../AllComponent/Register/Register';
import SignUP from '../AllComponent/SignUp/SignUP';
import Main from '../Layout/Main/Main';

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