import React from "react";

const LogOut = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    window.location.reload();
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        className="px-10 py-2 lg:px-6 lg:py-1 xs:px-2 xs:py-0 z-0"
      >
        Sign Out
      </button>
    </div>
  );
};

export default LogOut;
