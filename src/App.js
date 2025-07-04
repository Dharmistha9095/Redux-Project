import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Create from "./components/Create";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <Create /> */}
        <Routes>
          {/* <Route exact path="/" element={<Read />} /> */}
          <Route exact path="/" element={<Create />} />
          {/* <Route exact path="/edit/:id" element={<Edit />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
