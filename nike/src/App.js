import './App.css'
import Carousel from './Companents/Carousel/Carousel';
import Navbar from './Companents/Navbar/Navbar';
import NavInfo from './Companents/NavInfo/NavInfo';

function App() {
  return (
    <div className="App">
      <NavInfo />
      <Navbar />
      <Carousel />
    </div>
  );
}

export default App;
