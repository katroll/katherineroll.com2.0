import { NavLink } from "react-router-dom";
import "../index.js"


function ProjectContainer() {

    return (
        <div className="h-full flex flex-col items-center pt-2">
            <div className="flex lg:pl-10 lg:pt-4 mb-5 pb-4 flex-col grid lg:justify-items-end lg:overflow-y-scroll">
                <p className="text-5xl lg:text-3xl lg:w-2/3 text-center text-gray-800 font-bold mb-5 mt-10 lg:mt-0 lg:ml-72">My Projects</p>
                <div className="flex flex-col bg-slate-500 lg:w-2/3 p-8 shadow shadow-slate-900 mb-10 lg:mb-5 mr-5">
                    <p className="lg:text-2xl text-5xl text-center font-bold text-gray-900">Computer Center Testing Platform</p>
                    <div className="lg:p-y-2 pt-3">
                        <p className="text-3xl lg:text-base text-center font-semibold text-gray-800 mb-4">Capstone project built at The Flatiron School</p>
                        <div className="flex flex-col lg:flex-row lg:space-x-4">
                            <p className="text-4xl lg:text-base text-gray-900 lg:w-1/2 text-justify w-full">This website was created for non-profit computer training center located in Kolkata, India. It allows administators to upload quizzes and tests via an Excel file. The center is able to monitor each student's progress and grades and export all tables in the database to Excel files for data analysis. Admins are also able to update student login information if needed. Students are able to create accounts and track their own grade history. The demo for this website can be viewed <a href="https://www.loom.com/share/7e5c8fae9b314f90b45697e890fae04c" target="blank" className="font-semibold cursor-pointer text-slate-300">here</a>.</p>
                            <div className="reletive flex items-center justify-center mt-3 lg:mt-0 lg:w-1/2 lg:pl-3">
                                <iframe 
                                    title="Testing Platform"
                                    src="https://www.loom.com/embed/7e5c8fae9b314f90b45697e890fae04c?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true" 
                                    frameBorder="0" 
                                    webkitallowfullscreen="true"
                                    mozallowfullscreen="true"
                                    allowFullScreen 
                                    className="w-1/2 h-full lg:w-full rounded">
                                </iframe>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row mt-3 items-center lg:justify-center">
                            <p className="text-4xl lg:text-base font-semibold text-gray-800">Technoligies:</p>
                            <p className="text-4xl lg:text-base text-gray-800 pl-5">React.js, Ruby on Rails, Tailwind, ExcelJS</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-slate-500 lg:w-2/3 p-8 shadow shadow-slate-900 mb-10 lg:mb-5 mr-5">
                    <p className="lg:text-2xl text-5xl text-center font-bold text-gray-900">My Carbon Footprint</p>
                    <div className="lg:p-y-2 pt-3">
                        <p className="text-3xl lg:text-base text-center font-semibold text-gray-800 mb-4">Group project completed at The Flatiron School</p>
                        <p className="text-4xl lg:text-base text-gray-900 text-justify w-full">My Carbon Footprint was created to give you a fun and easy way to get a snapshot of your personal carbon footprint. The app takes a look at some of the most common carbon emitting activities and provides you the ability to fill in your personal details and receive an estimate of carbon emissions based on data provided by the Carbon Interface REST API. </p>
                        <div className="flex flex-col lg:flex-row mt-3 items-center lg:justify-center">
                            <p className="text-4xl lg:text-base font-semibold text-gray-800">Technoligies:</p>
                            <p className="text-4xl lg:text-base text-gray-800 pl-5">React.js, Ruby on Rails</p>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-500 lg:w-2/3 p-8 shadow shadow-slate-900 mr-5">
                    <p className="lg:text-2xl text-5xl text-center font-bold text-gray-900">Three.js Car Driving App</p>
                    <div className="lg:p-y-2 pt-3">
                        <p className="text-3xl lg:text-base text-center font-semibold text-gray-800 mb-4">Project created while learning three.js</p>
                        <p className="text-4xl lg:text-base text-gray-900 text-justify w-full">I am interested in three.js and continuing to learn and add to this project. The demo is availabe <NavLink to="/threeproject" className="font-semibold cursor-pointer text-slate-300">here</NavLink>, where you can use the arrow keys on the keyboard to drive around in the world I am slowly expanding on and updating as I learn new Three.js skills.</p>
                        <div className="flex flex-col lg:flex-row mt-3 items-center lg:justify-center">
                            <p className="text-4xl lg:text-base font-semibold text-gray-800">Technoligies:</p>
                            <p className="text-4xl lg:text-base text-gray-800 pl-5">Three.js, React.js</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectContainer;