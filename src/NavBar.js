import { gsap } from "gsap/dist/gsap";
import {NavLink} from "react-router-dom";

function NavBar() {

    return (
        <div className="w-60 pt-2 min-h-screen bg-slate-900 z-10 flex flex-col items-center">
            <h1 className="font-bold text-white text-xl mb-10">Katherine Roll</h1>

            <a href="https://github.com/katroll" className="text-white mb-2">Github</a>
            <a href="https://www.linkedin.com/in/katherine-roll-82b157205/" className="text-white mb-6">Linkedin</a>

            <NavLink to="/projects" className="text-white">
                Projects
            </NavLink>

            <NavLink to="/" className="text-white mt-3">
                Car Game Demo
            </NavLink>

            <NavLink to="/about" className="text-white mt-3">
                About me
            </NavLink>
        </div>
    
    )
}

export default NavBar;