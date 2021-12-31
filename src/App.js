import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import LearnerServices from './pages/Backend/LearnerServices/LearnerServices';
import Riders from './pages/Backend/Riders/Riders';
import Home from './pages/Home/Home/Home';
import Menubar from './pages/Home/Menubar/Menubar';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>

        <Router>
          <Menubar></Menubar>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Riders" element={<Riders />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/LearnerServices" element={<LearnerServices />} />
          </Routes>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
