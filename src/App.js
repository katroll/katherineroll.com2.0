import './index.css';

import { Route, Routes } from "react-router-dom";

import Car from './components/Car';
import About from './components/About';


function App() {
  return (
    <div className="flex bg-gradient-to-br from-slate-200 to-slate-500 h-fit">
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

