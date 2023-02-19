import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import About from './pages/about';
import Dashboard from './pages/dashboard';
import Stock from './pages/stock';
import stockData from './data'

function App() {
  const testFunction = async () => {
    const response = await fetch('/test_route')
  }
  testFunction()

  return (
    <div className="App">
      
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/' element={<Dashboard stockData={stockData}/>} />
            <Route path='about' element={<About />} />
            <Route path='stock/:symbol' element={<Stock stockData={stockData}/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
