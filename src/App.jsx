/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from './Components/Layout';
import"./server"
import './index.css';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './Components/HostLayout';
import HostVanDetail from './pages/Host/HostVanDetail';
import HostVans from './pages/Host/HostVans';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import NotFound from './NotFound';
import AuthRequired from './Components/AuthRequired';

function App() {

  return (
  <BrowserRouter>
      <header>
      <nav> 
        <Link to="/"> #VANLIFE</Link>
        <Link to="/about"> About</Link>
        <Link to="/vans"> Vans</Link>
      </nav>
      </header>  

      <Routes>

      <Route path="/" element={<Layout />}>
        
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          
          <Route element={<AuthRequired />}>
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />
              }/>
              <Route path="*" element={<NotFound />}/>
              </Route>
              </Route>
            </Route>
            </Route>
      </Routes>

  </BrowserRouter>
  )
}

export default App
