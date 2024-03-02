import React from "react";
import ACHiringPipelineComponents from "../components/activitiesComponents/ACHiringPipelineComponents";
import OnboardingManagerComponent from "./../components/activitiesComponents/OnboardingManagerComponent";
import InterviewReminderComponent from "../components/activitiesComponents/InterviewReminderComponent";

const ActivitiesPage = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl m-6">Task Manager</h1>
      </div>
      <div className="grid grid-cols-4 gap-4 m-8 mb-4 ">
        <div className="bg-white  rounded-lg p-4">
          <div className="bg-slate-200 w-12 h-12 rounded-full"></div>
          <h1 className="font-semibold text-lg">Application in process</h1>
          <p className="text-xl font-extrabold">21</p>
        </div>
        <div className="bg-white  rounded-lg p-4">
          <div className="bg-slate-200 w-12 h-12 rounded-full"></div>
          <h1 className="font-semibold text-lg">Interviews Scheduled</h1>
          <p className="text-xl font-extrabold">12</p>
        </div>
        <div className="bg-white  rounded-lg p-4">
          <div className="bg-slate-100 w-12 h-12 rounded-full"></div>
          <h1 className="font-semibold text-lg">Unread Inbox</h1>
          <p className="text-xl font-extrabold">25</p>
        </div>
        <div className="bg-white  rounded-lg p-4">
          <div className="bg-orange-100 w-12 h-12 rounded-full "></div>
          <h1 className="font-semibold text-lg">Request Pending</h1>
          <p className="text-xl font-extrabold">20</p>
        </div>
      </div>
      <div className="grid grid-cols-6 m-8 gap-4 mt-2">
        <div className="bg-white col-start-1 col-end-5 rounded-lg">
          <ACHiringPipelineComponents />
        </div>
        <div className="bg-white col-start-5 col-end-7 row-span-4  rounded-lg">
          <OnboardingManagerComponent />
        </div>
        <div className="bg-white col-start-1 col-end-5 rounded-lg">
          <InterviewReminderComponent />
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;
