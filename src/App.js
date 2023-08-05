
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route Component={Login} path='/'/>

      <Route Component={Home} path='/Home'/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
