import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import "./index.css"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './components/react-router/Layout/Layout.jsx';
import Home from './components/react-router/Home.jsx';
import About from './components/react-router/About.jsx';
import Contact from './components/react-router/Contact.jsx';
import Github, { githubInfoLoader } from './components/react-router/Github.jsx';
import User from './components/react-router/User.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       },
//       {
//         path: 'github',
//         element: <Github />
//       }
//     ]
//   }
// ])

// other way

const router2 = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      <Route
        loader={githubInfoLoader}
        path='github'
        element={<Github />}
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router2} />
    {/* <App /> */}
  </StrictMode>,
)
