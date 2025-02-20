import { Route, Routes, Navigate } from 'react-router-dom';
import DrowerPage from '../page/DrowerPage/DrowerPage';
import LoginPage from '../page/LoginPage/LoginPage';
import SignPage from '../page/SignPage/SignPage';
import DrowePageTest from '../page/DrowerPageTest/DrowerPageTest'
import Drow from '../page/Drow/Drow'
import HomePage from '../page/HomePage/HomePage';
import AboutPage from '../page/AboutPage/AboutPage';
import JobPage from '../page/JobPage/JobPage';
import SettingPage from '../page/SettingPage/SettingPage';
import DashBoard from '../comon/DashBoard/DashBoard';
import  AboutOther from '../OtherPage/about/page'
function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Navigate to="/login" />} />
    //   <Route path="/login" element={<LoginPage />} />
    //   <Route path="/sign" element={<SignPage />} />
    //   <Route path="/dashboard" element={ <DrowePageTest/>} />
    // </Routes>
    <div>
        <AboutOther/>
    </div>

  
  );
}

export default App;
