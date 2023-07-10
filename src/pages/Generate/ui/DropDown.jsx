import React, { useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";

const Dropdown = (props) => {
  const { options, val, getInfo } = props;
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    if (selectedOption !== null) {
      getInfo(selectedOption.value, val);
    }
  };

  return (
    <div className="">
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
            border: "1px solid #9D9D9D",
            background: "#FFF",
            fontSize: "16px",
            color: "#867070",
            cursor: "pointer",
            placeholder: {
              ...base.placeholder,
              color: "#867070",
            },
          }),
        }}
      />
    </div>
  );
};

export default Dropdown;
