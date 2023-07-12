import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import axios from "./../../axios.js";
import { isEmpty } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { fetchLogin } from "../../redux/slices/auth";

function AuthBtn(props) {
  const { text } = props;
  const dispatch = useDispatch();
  const responseGoogle = async (response) => {
    const bodyObject = {
      authId: response.tokenId,
    };
    try {
      if (isEmpty(response.errors)) {
        const data = await dispatch(fetchLogin(bodyObject));
        if (data !== undefined) {
          localStorage.setItem("id", data.payload.data.user._id);
          localStorage.setItem("token", `Bearer ${data.payload.token}`);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <GoogleLogin
      clientId="1076988421984-1v2clduelaft0i38vo3qojsujkrlvs2m.apps.googleusercontent.com"
      buttonText={text}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
      render={(renderProps) => (
        <button
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          className="text-[16px] sm:text-[12px] px-10 py-2 lg:px-6 lg:py-1 xs:px-2 xs:py-0"
        >
          {text}
        </button>
      )}
    />
  );
}

export default AuthBtn;
