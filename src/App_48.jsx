import { createBrowserRouter,RouterProvider } from  "react-router-dom";

import {
  HomeLayoutPage_48, 
  HomePage_48 ,
  BlogStaticPage_48,
  BlogLocalJsonPage_48,
  BlogNodePage_48
}from "./pages";



const router = createBrowserRouter([
  {
    path: "/",
    element:<HomeLayoutPage_48/>,
    children:[
      {
        index:true,
        element:<HomePage_48/>,
      },
      {
        path: 'static_48',
        element:<BlogStaticPage_48/>,
      },
      {
        path: 'localjson_48',
        element:<BlogLocalJsonPage_48/>,
      },
      {
        path: 'node_48',
        element:<BlogNodePage_48/>,
      },
    ]
  }
])
const App_48 = () => {
  return <RouterProvider router={router}/>
};

export default App_48
