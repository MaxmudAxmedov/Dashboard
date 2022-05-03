// JavaScripts file import
import Header from './Assets/Components/Header/Header';
import Overview from './Assets/Components/Overview/Overview';
import Tickets from './Assets/Components/Tickets/Tickets';

// main.scss import
import "./Assets/main.scss";
import Sidebar from "./Assets/Components/Sidebar/Sidebar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
       
          <div className="left">
            <Sidebar/>
          </div>
    
          <div className="right">
            <Header />

            <Routes>
              <Route path='/overview' element={<Overview/>}/>
              <Route path='/tickets' element={<Tickets/>}/>
            </Routes>

          </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
