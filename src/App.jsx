import './App.css'
import Navbar from './components/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import Visit from './pages/Visit.jsx';
import Countries from './pages/Countries.jsx';
import Referrels from './pages/Referrels.jsx';
import Footer from './components/Footer.jsx';
import Search from './components/Search.jsx';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div>

      <ToastContainer />
      <Navbar />
      <Search />

      <Routes>
        <Route element={<Visit />} path='/' />
        <Route element={<Countries />} path='/countries' />
        <Route element={<Referrels />} path='/referrers' />
      </Routes>

      <Footer />
    </div>
  )
}

export default App

