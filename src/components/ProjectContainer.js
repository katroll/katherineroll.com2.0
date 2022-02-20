import { NavLink } from "react-router-dom";
import "../index.js"


function ProjectContainer() {

    return (
        <div className="h-screen flex flex-col items-center pt-2">
            <p className="text-5xl lg:text-2xl text-gray-800 font-bold mb-5 mt-10 lg:mt-0 lg:ml-72">My Projects</p>
            <div className="flex lg:pl-10 mb-5 flex-col grid lg:justify-items-end lg:overflow-y-scroll">
                <div className="flex flex-col bg-slate-500 lg:w-2/3 p-8 shadow shadow-slate-900 mb-10 lg:mb-5 mr-5">
                    <p className="lg:text-2xl text-5xl text-center lg:text-left font-bold text-gray-900">My Carbon Footprint</p>
                    <div className="lg:p-y-2 pt-3">
                        <p className="text-3xl lg:text-base text-center lg:text-left font-semibold text-gray-800 mb-3">Group project completed at The Flatiron School</p>
                        <p className="text-4xl lg:text-base text-gray-900 w-3/4 text-justify w-full lg:text-left lg:w-2/3">My Carbon Footprint was created to give you a fun and easy way to get a snapshot of your personal carbon footprint. The app takes a look at some of the most common carbon emitting activities and provides you the ability to fill in your personal details and receive an estimate of carbon emissions based on data provided by the Carbon Interface REST API. </p>
                        <div className="flex mt-3">
                            <p className="text-4xl lg:text-base font-semibold text-gray-800">Technoligies:</p>
                            <p className="text-4xl lg:text-base text-gray-800 pl-5">React.js, Ruby on Rails</p>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-500 lg:w-2/3 p-8 shadow shadow-slate-900 mr-5">
                    <p className="lg:text-2xl text-5xl text-center lg:text-left font-bold text-gray-900">Three.js Car Driving App</p>
                    <div className="lg:p-y-2 pt-3">
                        <p className="text-3xl lg:text-base text-center lg:text-left font-semibold text-gray-800 mb-3">Project created while learning three.js</p>
                        <p className="text-4xl lg:text-base text-gray-900 w-3/4 text-justify w-full lg:text-left lg:w-2/3">I am interested in three.js and continuing to learn and add to this project. The demo is availabe <NavLink to="/threeproject" className="font-bold cursor-pointer">here</NavLink>, where you can use the arrow keys on the keyboard to drive around in the world I am slowly expanding on and updating as I learn new Three.js skills.</p>
                        <div className="flex mt-3">
                            <p className="text-4xl lg:text-base font-semibold text-gray-800">Technoligies:</p>
                            <p className="text-4xl lg:text-base text-gray-800 pl-5">Three.js</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectContainer;