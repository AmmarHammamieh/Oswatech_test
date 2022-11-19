import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Login';
import Home from './Home';
import Rent from './Rent';
import ViewHouse from './ViewHouse';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
     
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={ <Home/>} />
          <Route path="/Rent" element={ <Rent/>} />
          <Route path="/Rent/ViewHouse" element={ <ViewHouse/>} />
          
      </Routes>  
      </Router>
    </div>
  );
}

export default App;
