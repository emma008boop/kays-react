import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PublicLayout from './layouts/PublicLayout';
import Home from './pages/landing/Home.jsx';
import Auth from './pages/auth/Auth.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
            <Route path='/' element={<Home />} />
        </Route>
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
