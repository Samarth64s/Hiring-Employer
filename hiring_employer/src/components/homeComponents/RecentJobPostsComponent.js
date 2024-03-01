import React, { useState } from "react";

const RecentJobPostsComponent = () => {
  const [jobData, setJobData] = useState([
    {
      title: "UI UX Designer",
      category: "Full Time",
      openings: 12,
      applications: 135,
      status: "Active",
    },
    {
      title: "Full Stack Dev",
      category: "Full Time",
      openings: 8,
      applications: 100,
      status: "Inactive",
    },
    {
      title: "DevOps",
      category: "Internship",
      openings: 8,
      applications: 100,
      status: "active",
    },
    {
      title: "Android Dev",
      category: "Full Time",
      openings: 8,
      applications: 100,
      status: "nactive",
    },
    {
      title: "IOS Developer",
      category: "Full Time",
      openings: 8,
      applications: 100,
      status: "Inactive",
    },
  ]);
  const handleStatusToggle = (index) => {
    const updatedJobData = [...jobData];
    updatedJobData[index].status =
      updatedJobData[index].status === "Active" ? "Inactive" : "Active";
    setJobData(updatedJobData);
  };

  return (
    <div className="p-2">
      <div className="flex justify-between mb-2">
        <h1 className="font-semibold text-xl">Recent Job Posts</h1>
        <button className="bg-black text-white w-28 rounded-full h-12">
          See All
        </button>
      </div>
      <table className="w-full">
        <thead className="bg-slate-200">
          <tr>
            <th className=" p-2">Job Title</th>
            <th className=" p-2">Category</th>
            <th className=" p-2">Openings</th>
            <th className=" p-2">Applications</th>
            <th className=" p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {jobData.map((job, index) => (
            <tr key={index}>
              <td className=" p-2">{job.title}</td>
              <td className=" p-2">{job.category}</td>
              <td className=" p-2">{job.openings}</td>
              <td className=" p-2">{job.applications}</td>
              <td className="p-2">
                <button
                  onClick={() => handleStatusToggle(index)}
                  className={`rounded-full w-full px-2 py-1 ${
                    job.status === "Active"
                      ? "bg-green-500 text-white"
                      : "bg-red-600 text-white"
                  }`}
                >
                  {job.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentJobPostsComponent;
