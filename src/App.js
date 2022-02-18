import './index.css';

import { Route, Routes } from "react-router-dom";

import NavBar from './NavBar';
import Car from './components/Car';
import ProjectContainer from './components/ProjectContainer';


function App() {
  return (
    <div className="flex bg-slate-700 h-full">
      <NavBar />
      <Routes>
        <Route 
          path="/threeproject"
          element={<Car />}
        />
        <Route 
          path="/"
          element={<ProjectContainer />}
        />
      </Routes>
    </div>
  );
}
export default App;

