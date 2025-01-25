import { MdLocationPin } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const { id ,logo, job_title, company_name, remote_or_onsite , location, job_type ,salary  }= job;
    return (
        <div className="card card-compact bg-green-950 w-96  border shadow-xl p-6 mt-5 ml-24 ">
        <figure>
          <img
              src="{logo}"
            alt="" />
        </figure>
        <div className="card-body bg-green-800  bg-animate transform hover:scale-110 transition duration-300 ease-in-out">
          <h2 className="card-title">{job_title}</h2>
          <p>{ company_name}</p>
          <div className=" justify-between">
            <button className="px-5 py-2 font-extrabold border rounded border-l-teal-600 mr-4 text-fuchsia-500">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold border rounded border-l-teal-600 mr-4  text-fuchsia-500">{job_type}</button>
          </div>
          <div className="mt-4 flex gap-4">
            <h2 className="flex"><MdLocationPin className="text-2xl text-sky-700 mr-2"></MdLocationPin>{location}</h2>
            <h2 className="flex"><HiOutlineCurrencyDollar className=" text-2xl text-amber-700 mr-2" /> {salary}</h2>
          </div>
          <div className="card-actions  mb-8">
            <Link to={`/job/${id}`}>
            <button className=" btn btn-primary">view detals</button>
            
            </Link>
          </div>


        </div>
      
      </div>

    );
};

export default Job;