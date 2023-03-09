import Home from './components/Home'
import Location from './components/Location';
import Menus from './components/Menus'
import Contact from './components/Contact'
import { Route,  Routes } from "react-router-dom";
import NavBar from "./components/NavBar"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path= "/">
        <Route index element={<Home />}/>
        </Route>
       
      <Route path= "/Menus" element={<Menus />}/>
      <Route path= "/Location" element={<Location />}/>
      <Route path= "/Contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
