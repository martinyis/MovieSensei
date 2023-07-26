import React, { useEffect, useState } from "react";
import Counter from "../ui/Counter";
import { TabContext } from "../../../Contexts/TabContext";
import { useContext } from "react";
import { setFormData } from "../../../redux/slices/info";
import { useDispatch, useSelector } from "react-redux";
import { selectInfoPending } from "../../../redux/slices/info";
import FindMoviesBtn from "../ui/FindMovieBtn";
const MoodCollector = (props) => {
  const dispatch = useDispatch();
  const isPending = useSelector(selectInfoPending);
  const { defaultText } = props;
  const [textInfo, setTextInfo] = useState({ text: "", length: 0 });
  const { allCount } = useContext(TabContext);
  const handleChange = (e) => {
    const enteredText = e.target.value;
    const truncatedText = enteredText.slice(0, 400); // Limit the text to 400 characters
    setTextInfo({
      text: truncatedText,
      length: truncatedText.length,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Works");
    dispatch(
      setFormData({
        quantity: allCount,
        description: textInfo.text,
        option: "memory",
      })
    );
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        action=""
      >
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder={defaultText}
          className="w-[100%] h-[196px] rounded-[4px] border-[2px] border-[#610094] outline-none bg-white px-[38px] py-[29px] resize-none bg-primary"
          onChange={handleChange}
          value={textInfo.text} // Bind the value to the state
        ></textarea>
        <div className="text-right text-sm text-gray-500 mt-2">
          {textInfo.length}/400
        </div>
        <div className="flex gap-[43px] items-end 550:flex-col 550:items-start">
          <div>
            <p className="text-[24px]">Number of movies</p>
            <Counter />
          </div>
          <div className="flex gap-[18px] items-end">
            <FindMoviesBtn isPending={isPending} />
            <p className="text-[16px]">(1 credit)</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MoodCollector;
