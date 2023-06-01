import './App.css';
import Home from './Page/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import { AuthProvider } from './AuthContex';
import User from './Page/User';

import {Require,Require2} from './component/Require';

function App() {
  return (
      <BrowserRouter>
    <div className="App">
    

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Require><Login /></Require>} />
          <Route path="/register" element={<Require><Register /></Require>} />
          <Route path="/user" element={<Require2><User/></Require2>} />

        </Routes>
    </div>
      </BrowserRouter>
  );
}

function AppWithStore() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}



export default AppWithStore;
