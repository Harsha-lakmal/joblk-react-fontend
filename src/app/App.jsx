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
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign" element={<SignPage />} />
      <Route path="/dashboard" element={ <DrowePageTest/>} />
      <Route path="/dashboard/home" element={<HomePage />} />
      <Route path="/dashboard/about" element={<AboutPage />} />
      <Route path="/dashboard/job" element={<JobPage />} />
      <Route path="/dashboard/setting" element={<SettingPage />} />

    </Routes>
   
  );
}

export default App;
