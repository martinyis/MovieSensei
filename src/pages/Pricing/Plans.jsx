import React from "react";
import axios from "./../../axios.js";
const Plans = () => {
  const handleCheckout = () => {
    ///app/stripe/create-checkout-session
    axios
      .post("/app/stripe/create-checkout-session", {
        priceId: "price_1JZ2XtGZqjg0YJZ0QZ0ZQZ0Z",
      })
      .then((res) => {
        window.location.href = res.data.url;
      });
  };
  const plans = [
    {
      credits: 25,
      perSearch: "0.20",
      price: 5,
      priceId: "price_1NT66JIdcglxzsJ5azll9fM4",
    },
    {
      credits: 50,
      perSearch: "0.18",
      price: 9,
      priceId: "price_1NT65dIdcglxzsJ5VZ5uzOvt",
    },
    {
      credits: 150,
      perSearch: "0.13",
      price: 20,
      priceId: "price_1NSmCjIdcglxzsJ5ITCZpeyg",
    },
  ];
  return (
    <div className="pt-[40px] flex flex-col gap-[72px] sm:gap-[46px] px-5">
      {plans.map((el) => {
        return (
          <div className="flex sm:flex-col justify-between items-center py-[56px] px-[156px] bg-[#FFF] rounded-[12px] md:px-[25px] 550:px-[5px]">
            <div className="flex flex-col gap-[16px]">
              <p className="text-[34px] font-medium 550:text-[28px]">
                {el.credits} Credits
              </p>
              <p className="text-[24px] 550:text-[18px] text-[#3D3D3D]">
                ${el.perSearch} per search
              </p>
            </div>
            <div className="flex flex-col gap-24] items-center justify-center text-center">
              <p className="text-[72px] font-bold 550:text-[62px]">
                ${el.price}
              </p>
              <button
                onClick={handleCheckout}
                className="w-[195px] h-[56px] md:w-[150px] md:h-[40px]"
              >
                Buy credits
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Plans;
