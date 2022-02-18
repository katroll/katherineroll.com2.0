import { NavLink } from "react-router-dom";
import "../index.js"


function ProjectContainer() {

    return (
        <div className="h-screen flex flex-col items-center pt-2">
            <p className="text-2xl text-gray-800 font-bold mb-5 ml-72">My Projects</p>
            <div className="flex pl-10 mb-5 flex-col grid justify-items-end overflow-y-scroll">
                <div className="bg-slate-500 w-2/3 p-10 shadow shadow-slate-900 mb-5 mr-5">
                    <p className="text-2xl font-bold text-gray-900">My Carbon Footprint</p>
                    <div className="p-3">
                        <p className="text-md font-semibold text-gray-900 mb-3">Group project completed at The Flatiron School</p>
                        <p className="text-sm text-gray-900">Technoligies:</p>
                        <p className="text-sm text-gray-900 pl-5">React.js</p>
                        <p className="text-sm text-gray-900 pl-5 mb-3">Ruby on Rails</p>
                        <p className="text-sm text-gray-900 w-3/4">My Carbon Footprint was created to give you a fun and easy way to get a snapshot of your personal carbon footprint. The app takes a look at some of the most common carbon emitting activities and provides you the ability to fill in your personal details and receive an estimate of carbon emissions based on data provided by the Carbon Interface REST API. </p>
                    </div>
                </div>
                <div className="bg-slate-500 w-2/3 p-10 shadow shadow-slate-900 mr-5">
                    <p className="text-2xl font-bold text-gray-900">Three.js Car Driving App</p>
                    <div className="p-3">
                        <p className="text-md font-semibold text-gray-900 mb-3">Project created while learning three.js</p>
                        <p className="text-sm text-gray-900">Technoligies:</p>
                        <p className="text-sm text-gray-900 pl-5 mb-3">Three.js</p>
                        <p className="text-sm text-gray-900 w-3/4">I am interested in three.js and continuing to learn and add to this project. The demo is availabe <NavLink to="/threeproject" className="font-bold cursor-pointer">here</NavLink>, where you can use the arrow keys on the keyboard to drive around in the world I am slowly expanding on and updating as I learn new Three.js skills.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectContainer;