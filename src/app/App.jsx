import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DrowePageTest from '../page/DrowePageTest/DrowePageTest';
import Drow from '../page/Drow/Drow'

function App() {
  return (
    <>
      <div>
        {/* <DrowerPage/> */}
        {/* <Drow/> */}
        {/* <Router>
          <Routes>
            <Route path="/dashboard/*" element={<DrowePageTest />} />
          </Routes>
        </Router> */}

              {/* <DrowePageTest/> */}

              <Drow/>

              
      </div>
    </>
  );
}

export default App;
