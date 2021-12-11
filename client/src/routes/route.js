import React from 'react';

import { Home } from '../component/home/home';
import { BaseLayout } from "../component/layout/BaseLayout";
import { Login } from '../component/login/Login';

let routes = [
    // A route object has the same properties as a <Route>
    // element. The `children` is just an array of child routes.
    { 
      path: '/', 
      element: <BaseLayout />,
      children:[
        {index:true,  element:<Home/>},
        { path: 'login',  element:<Login/>}
      ]
    },
    // {index:true,path: 'home', element:<Home/>
    //   path: 'users',
    //   element: <Users />,
    //   children: [
    //     { path: '/', element: <UsersIndex /> },
    //     { path: ':id', element: <UserProfile /> },
    //     { path: 'me', element: <OwnUserProfile /> },
    //   ]
    // }
  ];
  export {routes}