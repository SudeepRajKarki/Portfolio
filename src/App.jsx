import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home';
import NotFound from './components/NotFound';

import Footer from './components/Footer'

function App() {
  return (
    <>
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="main-content flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
    </>
  )
}
export default App
