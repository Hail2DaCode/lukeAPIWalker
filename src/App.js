import React, { useState } from "react";
import './App.css';
import LukeForm from "./components/Form";
import Person from "./components/Person";
import Planet from "./components/Planet";


import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate
} from "react-router-dom";

function App() {
  const [currentId, setCurrentId] = useState("")
  const youvegotid = (newid) => {
    setCurrentId(newid);
} 
  
  return (
    <BrowserRouter test="Brian">
    <LukeForm onNewId = { youvegotid }/>
      <Routes>
        <Route path="/people/:id" element={<Person id={currentId} error={false}/>} />
        <Route path="/planets/:id" element={<Planet id={currentId}/>}/>
      </Routes>
    </BrowserRouter>
  );
}   
export default App;