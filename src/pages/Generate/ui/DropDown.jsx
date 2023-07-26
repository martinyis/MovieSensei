import React, { useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";

const Dropdown = (props) => {
  const { options, val, getInfo } = props;
  const [selectedOption, setSelectedOption] = useState(null);
  //body coor black for this component

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    if (selectedOption !== null) {
      getInfo(selectedOption.value, val);
    }
  };

  return (
    <div
      style={{
        color: "#000000",
      }}
    >
      <CreatableSelect
        isClearable
        options={options}
        value={selectedOption}
        onChange={handleOptionChange}
        styles={{
          control: (base) => ({
            ...base,
            height: "52px",
            borderRadius: "8px",
            border: "1px solid #610094",
            background: "#000000",
            fontSize: "16px",
            color: "#867070",
            cursor: "pointer",
            placeholder: {
              ...base.placeholder,
              color: "#867070",
              cursor: "pointer",
            },
          }),
        }}
      />
    </div>
  );
};

export default Dropdown;
