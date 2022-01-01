import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AllRider from './pages/Backend/AllRider/AllRider';
import LearnerServices from './pages/Backend/LearnerServices/LearnerServices';
import Rider from './pages/Backend/Riders/Riders';
import RidersForm from './pages/Backend/RidersForm/RidersForm';
import Riders from './pages/Backend/RidersForm/RidersForm';
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
            <Route path="/RidersForm" element={<RidersForm />} />
            <Route path="/Rider" element={<Rider />} />
            <Route path="/AllRider" element={<AllRider />} />
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
