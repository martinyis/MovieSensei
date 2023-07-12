import React, { useState } from "react";
import CreditIcon from "./../../assets/icons/credit-icon.png";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";
import { fetchCredits, selectCredits } from "../../redux/slices/credits";
const CreditCount = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const credits = useSelector(selectCredits);
  const [amount, setAmount] = useState(0);
  const getCredits = async () => {
    const data = await dispatch(fetchCredits());
    setAmount(data.payload.credits);
  };
  React.useEffect(() => {
    if (isAuth) {
      getCredits();
    }
  }, [isAuth]);

  React.useEffect(() => {
    if (credits) {
      setAmount(credits);
    }
  }, [credits]);
  return (
    <li
      className={`flex items-center gap-[10px] ${!isAuth ? "hidden" : "flex"}`}
    >
      <img src={CreditIcon} alt="" />
      <p>{amount} Credits left</p>
    </li>
  );
};

export default CreditCount;
