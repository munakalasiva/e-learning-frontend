import React from "react";
import { MdDashboard } from "react-icons/md";
import "./account.css";
import { IoMdLogOut } from "react-icons/io";
import { UserData } from "../../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Account = ({ user }) => {
  const { setIsAuth, setUser } = UserData();

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
    toast.success("Logged Out");
    navigate("/login");
  };

  return (
    <div className="auth-pag">
      {user && (
        <div className="auth-for">
          <h2>My Profile</h2>
          <div >
            <div className="profile-info">
            <p className="info">
              <strong>Name - {user.name}</strong>
            </p>
            <p className="info">
              <strong>Email - {user.email}</strong>
            </p>
            </div>
            <div className="button-container">
              <button
                onClick={() => navigate(`/${user._id}/dashboard`)}
                className="common-btn"
              >
                <MdDashboard />
                Dashboard
              </button>
              {user.role === "admin" && (
                <button
                  onClick={() => navigate(`/admin/dashboard`)}
                  className="common-btn"
                >
                  <MdDashboard />
                  Admin Dashboard
                </button>
              )}
            </div>
            <br />
            <button
              onClick={logoutHandler}
              className="common-btn"
              style={{ background: "red" }}
            >
              <IoMdLogOut />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
