import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AllLearners from './pages/Backend/AllLearners/AllLearners';
import AllRider from './pages/Backend/AllRider/AllRider';
import LearnerDriving from './pages/Backend/LearnerDriving/LearnerDriving';
import Learners from './pages/Backend/Learners/Learners';
import Riders from './pages/Backend/Riders/Riders';
import RidersForm from './pages/Backend/RidersForm/RidersForm';
import DashBoard from './pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
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
            <Route path="/MakeAdmin" element={<MakeAdmin />} />
            <Route path="/DashBoard" element={<DashBoard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/LearnerDriving" element={<LearnerDriving />} />


            <Route path="/dashboard" element={<DashBoard />}>


              <Route path={`/dashboard/makeAdmin`} element={<MakeAdmin></MakeAdmin>}>
              </Route>
              <Route path={`/dashboard/AllRider`} element={<AllRider></AllRider>}>
              </Route>

              <Route path={`/dashboard/AllLearners`} element={<AllLearners></AllLearners>}>
              </Route>
            </Route>





          </Routes>
        </Router>
        <Footer></Footer>
      </AuthProvider>

    </div >
  );
}

export default App;
