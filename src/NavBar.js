import { useNavigate} from "react-router-dom";
import 'tw-elements';

function NavBar() {
    const navigate = useNavigate();

    return (
        <div className="w-60 h-full shadow-md bg-slate-800 absolute" id="sidenavSecExample">
            <h1 className="px-10 pt-5 font-bold text-slate-300 text-xl font-bold mb-5">Katherine Roll</h1>
            {/* <div>
            <a href="https://github.com/katroll" className="text-slate-200 mb-2">Github</a>
            <a href="https://www.linkedin.com/in/katherine-roll-82b157205/" className="text-slate-200 mb-6">Linkedin</a>

            </div> */}
            
            <ul className="relative px-1 mt-5">
                <li className="pl-6 mb">
                    <a href="https://github.com/katroll" className="text-slate-200 mb-2">Github</a>
                </li>
                <li className="pl-6 mb-4">
                    <a href="https://www.linkedin.com/in/katherine-roll-82b157205/" className="text-slate-200 mb-6">Linkedin</a>
                </li>
                <li className="relative" onClick={() =>  navigate("/projects")}>
                    <div className="flex items-center text-md font-semibold py-4 px-6 h-12 overflow-hidden text-slate-200 text-ellipsis whitespace-nowrap rounded hover:text-slate-200 hover:bg-slate-700" data-mdb-ripple="true" data-mdb-ripple-color="stone">
                        <span>Projects</span>
                    </div>
                </li>   
                <li className="relative" onClick={() => navigate("/")}>
                    <div className="flex items-center text-md font-semibold py-4 px-6 h-12 overflow-hidden text-slate-200 text-ellipsis whitespace-nowrap rounded hover:text-slate-200 hover:bg-slate-700" data-mdb-ripple="true" data-mdb-ripple-color="stone">
                        <span>Three.js Car Project</span>
                    </div>
                </li>   
                {/* <li className="relative" onClick={() => navigate("/about")}>
                    <div className="flex items-center text-md font-semibold py-4 px-6 h-12 overflow-hidden text-slate-200 text-ellipsis whitespace-nowrap rounded hover:text-slate-200 hover:bg-slate-700" data-mdb-ripple="true" data-mdb-ripple-color="stone">
                        <span>About Me</span>
                    </div>
                </li>    */}
            </ul>
        </div>
    
    )
}

export default NavBar;