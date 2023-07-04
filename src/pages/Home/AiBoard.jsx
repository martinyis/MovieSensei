import React from "react";
const AiBoard = (props) => {
  const { board } = props;
  return (
    <div className="mt-[198px] w-full max-h-[434px]">
      <img
        className="w-full max-h-[434px] md:min-h-[434px] sm:min-h-[300px]"
        src={board}
        alt="AI board"
      />
    </div>
  );
};

export default AiBoard;
