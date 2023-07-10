import React, { useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import { IoMdClose } from "react-icons/io";
const CountryDrop = (props) => {
  const { options, val, getInfo } = props;
  const [selectedOption, setSelectedOption] = useState(null);
  const [allOptions, setAllOptions] = useState([]);
  const handleOptionChange = (selectedOption) => {
    if (selectedOption === null) {
      return;
    }
    if (!allOptions.includes(selectedOption)) {
      setAllOptions([...allOptions, selectedOption]);
    }
    setSelectedOption(selectedOption);
  };
  const removeCountry = (value) => {
    const newOptions = allOptions.filter((el) => el.value !== value);
    setAllOptions(newOptions);
  };
  useEffect(() => {
    getInfo(
      allOptions
        .map((obj) => {
          return obj.value;
        })
        .join(", "),
      val
    );
  }, [allOptions]);
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
      <div className="mt-[28px] flex gap-[16px] flex-wrap">
        {allOptions.map((el) => {
          return (
            <div className="flex bg-[#D5B4B4] h-[32px] rounded-[50px] px-[20px] gap-[20px] justify-between items-center">
              <p className="text-[16px] text-[#ffffff]">{el.value}</p>
              <IoMdClose
                className="cursor-pointer"
                onClick={() => {
                  removeCountry(el.value);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountryDrop;
