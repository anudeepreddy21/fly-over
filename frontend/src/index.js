import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Login from "./routes/Login";
import Signup from "./Components/Login/Signup";
import ProjectDetails from "./routes/ProjectDetails";
import Profile from "./routes/Profile";
import EventLists from "./routes/EventLists";
import RecruiterReportContents from "./routes/RecruiterReportContents";
import FacultyReportContents from "./routes/FacultyReportContents";
import MyApplications from "./routes/MyApplications";
import EventDetails from "./routes/EventDetails";
import JobApplications from "./routes/JobApplications";
import Recommendations from "./routes/Recommendations";
import PaymentGateway from "./routes/PaymentGateway";
import Logout from "./routes/Logout";
import Chat from "./routes/Chat";
import { CometChat } from "@cometchat-pro/chat";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Attachments from "./routes/Attachments";
import EditProfile from "./routes/EditProfile";

// const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projectDetails" element={<ProjectDetails />} />
        <Route path="profile" element={<Profile />} />
        <Route path="editProfile" element={<EditProfile />} />
        {/* Temp route */}
        <Route path="attachments" element={<Attachments />} />
        <Route path="eventLists" element={<EventLists />} />
        <Route
          path="recruiterReportContents"
          element={<RecruiterReportContents />}
        />
        <Route
          path="facultyReportContents"
          element={<FacultyReportContents />}
        />
        <Route path="myApplications" element={<MyApplications />} />
        <Route path="recommendations" element={<Recommendations />} />
        <Route path="eventDetails" element={<EventDetails />} />
        <Route path="JobApplications" element={<JobApplications />} />
        {/* <Route path="JobApplications/:id" element={<JobApplications />} /> */}
        <Route path="Logout" element={<Logout />} />
        <Route path="Chat" element={<Chat />} />
        <Route path="paymentGateway" element={<PaymentGateway />} />

        {/* ====== For nested routing ======= 
        <Route path="/" element={<App />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="userProfiles" element={<UserProfiles />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

const appID = "227359120eb3a00c";
const region = "us";
const appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(region)
  .build();
CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
    // this.login("superhero5");
  },
  (error) => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
