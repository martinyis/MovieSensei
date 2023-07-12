import React from "react";
import { Link } from "react-router-dom";

const CreditError = () => {
  return (
    <div className="flex justify-between max-w-[600px] mx-auto mt-[40px] bg-[rgb(255,151,151)] px-10 py-5 rounded-[13px] items-center">
      <p>You have no credits left</p>
      <Link to="/pricing">
        <button className="px-7 py-2">Buy credits</button>
      </Link>
    </div>
  );
};

export default CreditError;
