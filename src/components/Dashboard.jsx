import "./Dashboard.css";
import { FaUser,FaCalendarAlt,FaFileAlt,FaSignOutAlt, FaDollarSign} from "react-icons/fa";

export default function Dashboard() {

  return (

    <div className="dashboard">

      <div className="sidebar">
        <div>
          <h2>CRM Dashboard</h2>

        <ul>
          <li><FaUser size={28} color="white" className="sidebar-icon"/><span>Profile</span></li>
          <li><FaCalendarAlt size={28} color="white" className="sidebar-icon"/><span>Leaves</span></li>
          <li><FaDollarSign size={28} color="#fff" className="sidebar-icon"/><span>Billable</span></li>
          <li><FaFileAlt size={28} color="white" className="sidebar-icon"/> <span>Daily Work Report</span></li>
          <li><FaCalendarAlt size={28} color="white" className="sidebar-icon"/><span>Calender</span></li>
          <li><FaSignOutAlt size={28} color="#ffffff" className="sidebar-icon"/><span> Logout</span></li>
        </ul>

        </div>
        <div className="bottom-pro">
            <ul>
              <li><FaUser size={30} color="#fff" /><span> John Doe <div style={{ fontSize: "16px"}}>Frondend Developer</div></span></li>
            </ul>
            
        </div>
      </div>

      <div className="main-content">

        <h1>Welcome John 👋</h1>

        <div className="cards">

          <div className="card">
            <h3>Attendance</h3>
            <h2>95%</h2>
            <h5>This Month</h5>
          </div>

          <div className="card">
            <h3>Total Leaves</h3>
            <h2>12</h2>
            <h5>Taken</h5>
          </div>

          <div className="card">
            <h3>Billable Hrs</h3>
            <h2>126</h2>
            <h5>This Month</h5>
          </div>

        </div>

      </div>

    </div>

  );
}