import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <main>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>{' '}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
