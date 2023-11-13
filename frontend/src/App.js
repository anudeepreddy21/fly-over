import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Demo App</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/login">Login</Link> <Link to="/dashboard">Dashboard</Link>{" "}
        <Link to="/projectDetails">Project Details</Link> |{" "}
        <Link to="/attachments">Attachment</Link> |{" "}
        <Link to="/editProfile">Edit Profile</Link> |{" "}
        <Link to="/profile">Profile</Link> | <Link to="/home">Home</Link> |{" "}
        <Link to="/recruiterReportContents">Recruiter Reports</Link> |{" "}
        <Link to="/facultyReportContents">Faculty Reports</Link> |{" "}
        <Link to="/myApplications">My Applications</Link> |{" "}
        <Link to="/recommendations">Recommendations</Link> |{" "}
        <Link to="/paymentGateway">PaymentGateway</Link> |{" "}
        <Link to="/eventDetails">EventDetails</Link> |{" "}
        <Link to="/jobApplication/:id">Job Applications</Link> |{" "}
        <Link to="/logout">Logout</Link>{" "}
      </nav>
      {/* ====== For same page rendering ====== 
      <Outlet/> */}
    </div>
  );
}

export default App;
