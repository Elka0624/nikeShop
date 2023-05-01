import './App.css'
import Home from './Page/HomePage/Home';
import { Route, Link, Routes, Router} from 'react-router-dom';
import NaskiPage from './Page/NaskiPage/NaskiPage';

function App() {
  return (
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
  );
}

export default App;
{/* <Route path="/naski" element={NaskiPage} /> */}

