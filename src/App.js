import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AllRider from './pages/Backend/AllRider/AllRider';
import LearnerDriving from './pages/Backend/LearnerDriving/LearnerDriving';
import Learners from './pages/Backend/Learners/Learners';
import Riders from './pages/Backend/Riders/Riders';
import RidersForm from './pages/Backend/RidersForm/RidersForm';
import Footer from './pages/Home/Footer/Footer';
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
            <Route path="/Riders" element={<Riders />} />
            <Route path="/Learners" element={<Learners />} />

              <Route path="/AllRider" element={<AllRider />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/LearnerDriving" element={<LearnerDriving />} />
          </Routes>
        </Router>
        <Footer></Footer>
      </AuthProvider>

    </div>
  );
}

export default App;
