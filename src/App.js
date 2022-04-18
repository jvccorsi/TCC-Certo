import './App.css';
// import Header from './Components/Header';
import Login from './Components/Login/Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/*" element={<Login></Login>}></Route>{' '}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
