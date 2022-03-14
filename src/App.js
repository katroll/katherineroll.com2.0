import './index.css';

import { Route, Routes } from "react-router-dom";

import Car from './components/Car';
import About from './components/About';


function App() {
  return (
    <div className="flex bg-slate-400 h-fit">
      <Routes>
        <Route 
          path="/threeproject"
          element={<Car />}
        />
        <Route 
          path="/"
          element={<About />}
        />
      </Routes>
    </div>
  );
}
export default App;

