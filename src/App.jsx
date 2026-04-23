import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PublicLayout from './layouts/PublicLayout';
import Auth from './pages/auth/Login.jsx';
import Home from './pages/landing/Home.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/*Public Routes*/}
        <Route element={<PublicLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Auth />} /> 
        </Route>
        {/**<Route element={<>}>
        
        </> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App
