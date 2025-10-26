import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Login.jsx'
import PageNotFound from './PageNotFound.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Counter from './Counter.jsx'
import Home from './Home.jsx'
import Posts from './posts.jsx'
import Post from './post.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<PageNotFound/>
  },
  {
    path:'/login',
    element:<Login/>,
    errorElement:<PageNotFound/>
  },
  {
    path:'/counter',
    element:<Counter/>,
    errorElement:<PageNotFound/>
  },
    {
    path:'/home',
    element:<Home/>,
    errorElement:<PageNotFound/>
  },
    {
    path:'/posts',
    element:<Posts/>,
    errorElement:<PageNotFound/>
  },
    {
    path:'/post/:id',
    element:<Post/>,
    errorElement:<PageNotFound/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
