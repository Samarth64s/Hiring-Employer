import React from "react";
import { FaEye } from "react-icons/fa";

const UpcomingInterviewsComponent = () => {
  const jobData = [
    {
      Name: "Amir",
      Job: "Marketing",
      Date: "26/03/2023",
      InterviewTime: "2:00 PM",
      View: <FaEye />,
    },
  ];
  return (
    <div className="p-2">
      <div className="mb-2">
        <h1 className="font-semibold text-xl">Upcoming Interviews</h1>
      </div>
      <table className="w-full">
        <thead className="bg-yellow-400">
          <tr>
            <th className=" p-2">Name</th>
            <th className=" p-2">Job</th>
            <th className=" p-2">Date</th>
            <th className=" p-2">Interview Time</th>
            <th className=" p-2">View</th>
          </tr>
        </thead>
        <tbody>
          {jobData.map((job, index) => (
            <tr key={index}>
              <td className=" p-2">{job.Name}</td>
              <td className=" p-2">{job.Job}</td>
              <td className=" p-2">{job.Date}</td>
              <td className=" p-2">{job.InterviewTime}</td>
              <td className="p-2">{job.View}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingInterviewsComponent;
