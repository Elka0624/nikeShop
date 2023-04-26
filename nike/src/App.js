import './App.css'
import DemoCarousel from './Companents/Carousel/Carousel';
import Navbar from './Companents/Navbar/Navbar';
import NavInfo from './Companents/NavInfo/NavInfo';
import TopMain from './Companents/TopMain/TopMain';

function App() {
  return (
    <div className="App">
      <NavInfo />
      <Navbar />
      <DemoCarousel />
      <TopMain />
    </div>
  );
}

export default App;
