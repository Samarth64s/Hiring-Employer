import React from "react";
import JobPostsComponent from "../components/homeComponents/JobPostsComponent";
import TotalApplicationComponent from "../components/homeComponents/TotalApplicationComponent";
import InterviewScheduleComponent from "../components/homeComponents/InterviewScheduleComponent";
import ApplicationOnHoldComponent from "../components/homeComponents/ApplicationOnHoldComponent";
import HiringPipelineComponent from "./../components/homeComponents/HiringPipelineComponent";
import RecentJobPostsComponent from "../components/homeComponents/RecentJobPostsComponent";
import UpcomingInterviewsComponent from "../components/homeComponents/UpcomingInterviewsComponent";

const HomePage = () => {
  const handleCreateJob = () => {
    alert("Created Job Successfully!!!!");
  };
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h1 className="font-semibold text-2xl">Overview</h1>
        <button
          onClick={handleCreateJob}
          className="w-36 h-12 rounded-lg bg-gray-800 text-white"
        >
          Create Job
        </button>
      </div>
      <div className="grid grid-cols-2 m-8 gap-8">
        <div className="grid grid-cols-2 gap-4">
          <div className=" bg-white rounded-lg ">
            <JobPostsComponent />
          </div>
          <div className="bg-white rounded-lg ">
            <TotalApplicationComponent />
          </div>
          <div className="bg-white rounded-lg">
            <InterviewScheduleComponent />
          </div>
          <div className="bg-white rounded-lg">
            <ApplicationOnHoldComponent />
          </div>
        </div>
        <div className="bg-white row-span-2 rounded-lg">
          <HiringPipelineComponent />
        </div>
        <div className="bg-white row-span-5 rounded-lg">
          <RecentJobPostsComponent />
        </div>
        <div className="bg-white row-span-4 rounded-lg">
          <UpcomingInterviewsComponent />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
