import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { selectIsAuth } from "../../../redux/slices/auth";
import AuthBtn from "../../../components/NavBar/AuthBtn";
const FindMoviesBtn = (props) => {
  const isAuth = useSelector(selectIsAuth);
  const { isPending } = props;

  if (!isAuth) {
    return <AuthBtn text={"Get started for free"} />;
  }
  return (
    <>
      {isPending ? (
        <button
          disabled
          className="w-[196px] h-[48px] sm:w-[120px] sm:h-[30px]"
        >
          Find a movie
        </button>
      ) : (
        <button className="w-[196px] h-[48px] sm:w-[150px] sm:h-[35px] sm:text-[12px]">
          Find a movie
        </button>
      )}
    </>
  );
};

export default FindMoviesBtn;
