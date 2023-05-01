import './App.css'
import DemoCarousel from './Companents/Carousel/Carousel';
import Navbar from './Companents/Navbar/Navbar';
import NavInfo from './Companents/NavInfo/NavInfo';
import TopMain from './Companents/TopMain/TopMain';
import UpdateLater from './Companents/UpdateLater/UpdateLater';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import NaskiPage from './Page/NaskiPage/NaskiPage';

function App() {
  return (
    <Routes>
      
      <div className="App">
        <NavInfo />
        <Navbar />
        <DemoCarousel />
        <TopMain />
        <UpdateLater />

        
      </div>
    </Routes>
  );
}

export default App;
{/* <Route path="/naski" element={NaskiPage} /> */}

