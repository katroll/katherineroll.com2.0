import "../index.js"

function ProjectContainer() {

    return (
        <div className="pl-72 h-screen flex flex-col justify-center">
            <p className="text-2xl text-gray-200 font-bold mb-5 pl-3">My Projects:</p>
           <div className="bg-slate-600 p-10 shadow shadow-slate-900 mb-5">
                <p className="text-2xl font-bold text-gray-200">My Carbon Footprint</p>
                <div className="p-3">
                    <p className="text-md font-semibold text-gray-200 mb-3">Group project completed at The Flatiron School</p>
                    <p className="text-sm text-gray-300">Technoligies:</p>
                    <p className="text-sm text-gray-300 pl-5">React.js</p>
                    <p className="text-sm text-gray-300 pl-5 mb-3">Ruby on Rails</p>
                    <p className="text-sm text-gray-300 w-3/4">My Carbon Footprint was created to give you a fun and easy way to get a snapshot of your personal carbon footprint. The app takes a look at some of the most common carbon emitting activities and provides you the ability to fill in your personal details and receive an estimate of carbon emissions based on data provided by the Carbon Interface REST API. </p>
                </div>
            </div>
            <div className="bg-slate-600 p-10 shadow shadow-slate-900">
                <p className="text-2xl font-bold text-gray-200">Three.js Car Driving App</p>
                <div className="p-3">
                    <p className="text-md font-semibold text-gray-200 mb-3">Project created while learning three.js</p>
                    <p className="text-sm text-gray-300">Technoligies:</p>
                    <p className="text-sm text-gray-300 pl-5 mb-3">Three.js</p>
                    <p className="text-sm text-gray-300 w-3/4">I am interested in three.js and continuing to learn and add to this project, which is displayed within the "Three.js Car Project" tab in the side navigation bar. You can use the arrow keys on the keyboard to drive around in the world I am slowly expanding on and updating as I learn new Three.js skills.</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectContainer;