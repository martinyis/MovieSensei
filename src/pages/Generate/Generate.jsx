import React, { useState } from "react";
import CenteredTabs from "./ui/Centered";
import Generator from "./Generator";
import { TabContext } from "../../Contexts/TabContext";
const Generate = () => {
  const [option, setOption] = useState(0);
  const [allCount, setAllCount] = useState(5);
  return (
    <div className="mt-[200px] mx-auto max-w-[1120px] md:px-5 z-0">
      <TabContext.Provider
        value={{
          option,
          setOption,
          allCount,
          setAllCount,
        }}
      >
        <Generator />
      </TabContext.Provider>
    </div>
  );
};

export default Generate;
