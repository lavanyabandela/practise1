import "./App.css";
// import Fetch from "./Fetch";
import Nav from "./Nav";
import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/first' element={<Firstpage />}/>
      </Routes>
      
      <Secondpage/>
      <Thirdpage/>
      {/* <Fetch /> */}
    </div>
    
  );
}

export default App;