import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from './Components/Error404';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <main>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>{' '}
            <Route path="*" element={<Error404></Error404>}></Route>{' '}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
