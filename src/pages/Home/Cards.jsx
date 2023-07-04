import React from "react";
import FileIcon from "./../../assets/icons/file-invoice.png";
import CalendarIcon from "./../../assets/icons/calendar.png";
import UsersIcon from "./../../assets/icons/users.png";
const Cards = () => {
  const cards = [
    {
      icon: FileIcon,
      title: "Mood",
      text: "Share your mood, discover your perfect movie. No scrolling required.",
    },
    {
      icon: CalendarIcon,
      title: "Filters",
      text: "Find your perfect movie effortlessly with our advanced filters.",
    },
    {
      icon: UsersIcon,
      title: "Memory",
      text: "Provide AI with small fragments or details about a movie, and it will find it for you.",
    },
  ];
  return (
    <div className="mt-[77px] mx-auto max-w-[1120px] px-5 flex gap-[46px] md:flex-col">
      {cards.map((card) => {
        return (
          <div className="rounded-lg bg-[#ffffff] shadow-lg w-[100%] px-[39px]">
            <div className="rounded-[76px] w-[76px] h-[74px] bg-[#867070] mx-auto flex justify-center items-center mt-[-38px] sm:w-[56px] sm:h-[54px]">
              <img src={card.icon} alt="" />
            </div>
            <p className="mt-[13px] text-[30px] font-medium text-center sm:text-[24px]">
              {card.title}
            </p>
            <p className="pt-[26px] text-[20px] text-center pb-[26px] sm:text-[16px]">
              {card.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
