import React from "react";
import { Link } from "react-router-dom"
interface Props {}

const Dashboard: React.FC<Props> = (props) => {
  

  return (
    <>
      <div>
        This is DashBoard.
        <Link to="/recordings" className="text-blue-700 hover:underline">
          <span>Go to Recordings</span>
        </Link>
      </div>
    </>
  );
};

Dashboard.defaultProps = {};
export default Dashboard;
