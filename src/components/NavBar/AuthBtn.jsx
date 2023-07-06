import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import axios from "./../../axios.js";
import { isEmpty } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { fetchLogin } from "../../redux/slices/auth";
function App(props) {
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
      className="w-[150px] px-0"
      clientId="1076988421984-1v2clduelaft0i38vo3qojsujkrlvs2m.apps.googleusercontent.com"
      buttonText="Sign In"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default App;
