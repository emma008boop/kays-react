import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PublicLayout from './layouts/PublicLayout';
import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';
import Home from './pages/landing/Home.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/*Public Routes*/}
        <Route element={<PublicLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} /> 
            <Route path='/register' element={<Register />} /> 
        </Route>
        {/**<Route element={<>}>
        
        </> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App
