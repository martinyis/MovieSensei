import React from "react";
import axios from "./../../axios.js";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth.js";
import AuthBtn from "./../../components/NavBar/AuthBtn.jsx";
const Plans = () => {
  const isAuth = useSelector(selectIsAuth);
  const handleCheckout = (id, credits) => {
    axios
      .post("/app/stripe/create-checkout-session", {
        priceId: id,
        credits: credits,
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
      priceId: "price_1NV0reIdcglxzsJ5fVtUT1ME",
      // priceId: "price_1NSmCjIdcglxzsJ5ITCZpeyg",
    },
    {
      credits: 50,
      perSearch: "0.18",
      price: 9,
      priceId: "price_1NV0rbIdcglxzsJ5kudqoYmo",
    },
    {
      credits: 150,
      perSearch: "0.13",
      price: 20,
      priceId: "price_1NV0rWIdcglxzsJ5OI4fcH8V",
    },
  ];
  return (
    <div className="pt-[40px] flex flex-col gap-[72px] sm:gap-[46px] px-5">
      {plans.map((el) => {
        return (
          <div className="flex sm:flex-col justify-between items-center py-[56px] px-[156px] bg-[#140322] rounded-[12px] md:px-[25px] 550:px-[5px]">
            <div className="flex flex-col gap-[16px]">
              <p className="text-[34px] font-medium 550:text-[28px]">
                {el.credits} Credits
              </p>
              <p className="text-[24px] 550:text-[18px] text-[#ffffff]">
                ${el.perSearch} per search
              </p>
            </div>
            <div className="flex flex-col gap-24] items-center justify-center text-center">
              <p className="text-[72px] font-bold 550:text-[62px]">
                ${el.price}
              </p>
              {isAuth ? (
                <button
                  onClick={() => handleCheckout(el.priceId, el.credits)}
                  className="text-[16px] sm:text-[12px] px-10 py-2 lg:px-6 lg:py-1 xs:px-2 xs:py-0]"
                >
                  Buy credits
                </button>
              ) : (
                <AuthBtn text="Sign in to buy" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Plans;
