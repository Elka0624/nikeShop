import './App.css'
import Home from './Page/HomePage/Home';
import { Route, Link, Routes, Router} from 'react-router-dom';
import Naski from './Page/NaskiPage/Naski';
import AyollarKiyimi from './Page/AyolarKiyimlari/AyollarKiyimi'


function App() {
  return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/naski' element={<Naski />} />
          <Route path='/ayollar-kiyimi' element={<AyollarKiyimi />} />
          
        </Routes>
  );
}

export default App;
{/* <Route path="/naski" element={NaskiPage} /> */}

