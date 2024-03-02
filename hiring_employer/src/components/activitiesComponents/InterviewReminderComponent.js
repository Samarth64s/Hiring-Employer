import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";

const InterviewReminderComponent = () => {
  const jobData = [
    {
      Date: "01/02/2023",
      CandidateName: "shubham",
      SubmittedTime: "2:30 AM",
      JobRole: "Ux Designer",
      Status: "Submitted",
      Action: [
        <FaEye />,
        <FaCircleCheck color="lightgreen" />,
        <FaTimesCircle color="red" />,
      ],
    },
    {
      Date: "01/02/2023",
      CandidateName: "shubham",
      SubmittedTime: "2:30 AM",
      JobRole: "Ux Designer",
      Status: "Submitted",
      Action: [
        <FaEye />,
        <FaCircleCheck color="lightgreen" />,
        <FaTimesCircle color="red" />,
      ],
    },
    {
      Date: "01/02/2023",
      CandidateName: "shubham",
      SubmittedTime: "2:30 AM",
      JobRole: "Ux Designer",
      Status: "Submitted",
      Action: [
        <FaEye />,
        <FaCircleCheck color="lightgreen" />,
        <FaTimesCircle color="red" />,
      ],
    },
  ];
  return (
    <div className="p-4">
      <div className="mb-2 flex justify-between h-10 border-b-2">
        <h1 className="font-semibold text-xl">Interview Reminder</h1>
        <Link className="text-blue-600">View all</Link>
      </div>
      <table className="w-full">
        <thead className="bg-yellow-400">
          <tr>
            <th className=" p-2">Date</th>
            <th className=" p-2">Candidate Name</th>
            <th className=" p-2">Submitted Time</th>
            <th className=" p-2">Job Role</th>
            <th className=" p-2">Status</th>
            <th className=" p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {jobData.map((job, index) => (
            <tr key={index}>
              <td className="p-2 pl-8">{job.Date}</td>
              <td className=" p-2 pl-8">{job.CandidateName}</td>
              <td className=" p-2 pl-10">{job.SubmittedTime}</td>
              <td className=" p-2 pl-5">{job.JobRole}</td>
              <td className="p-2 pl-8">{job.Status}</td>
              <td className="p-2 pl-8 flex gap-2">{job.Action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InterviewReminderComponent;
