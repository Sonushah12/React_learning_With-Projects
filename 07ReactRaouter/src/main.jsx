import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Layout from './components/Layout/Layout.jsx'
import Contact from './components/Contact-Us/Contact.jsx'
import LogIn from './pages/LogIn.jsx'
import User from './components/User/User.jsx'
import GitHub, { GitHubInfo } from './components/gitHub/GitHub.jsx'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path:"",
//         element: <Home/>
//       },
//       {
//         path: "/About",
//         element: <About/>
//       },
//       {
//         path: "/Contact",
//         element: <Contact/>
//       },
//       {
//         path: "/Login",
//         element: <LogIn/>
//       }

//     ]
//   }
// ])

 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path='/Contact' element= {<Contact/>}/>
      <Route path='/Login' element={<LogIn/>}/>
      <Route path='User/:id' element={<User/>} />
      <Route 
        loader={GitHubInfo} //for load data from api faster than useEffect Hook
      path='gitHub' element={<GitHub/>} />
    </Route>
  )
 )



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
