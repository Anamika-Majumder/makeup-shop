import { useEffect, useState } from "react";
import Job from "../../Job/Job";


const Featurejob = () => {
    const[jobs,setJobs] = useState( [] );
    useEffect( () =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    },[]

    )
    return (
        <div className="bg-[url('https://th.bing.com/th/id/OIP.Zl2ZafbKRI6QY0KTZjNDXQHaEJ?rs=1&pid=ImgDetMain')] ">
            <div className="text-center p-8 bg-[url('https://th.bing.com/th/id/OIP.Zl2ZafbKRI6QY0KTZjNDXQHaEJ?rs=1&pid=ImgDetMain')]">
                <h2 className="text-5xl text-purple-400 ">Feature of product:{jobs.length}</h2>
                <p className="p-2 text-gray-50 ">There all kind of product like makeup,<br></br> haire section, skincare section,nail section. <br></br> All kind of product really good qaulity and resenable</p>
            </div>
            <div className=" grid grid-cols-2 gap-6">
                {
                    jobs.map(job => <Job  key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default Featurejob;