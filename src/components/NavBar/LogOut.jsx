import React from "react";

const LogOut = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    window.location.reload();
  };
  return (
    <div>
      <button onClick={handleLogout} className="px-10">
        Logout
      </button>
    </div>
  );
};

export default LogOut;
