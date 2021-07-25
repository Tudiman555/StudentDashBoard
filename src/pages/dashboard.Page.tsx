import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchGroups } from "../api";

interface Props {}

const Dashboard: React.FC<Props> = (props) => {
  useEffect(() => {
    fetchGroups({ status: "all-groups" });
  }, []);
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
