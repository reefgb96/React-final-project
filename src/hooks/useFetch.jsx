import React, { useState, useEffect } from "react";
import axios from "axios";
import useAutoLogin from "../../src/hooks/useAutoLogin";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const useFetch = () => {
  const [data, setData] = useState([]);
  const autoLoginFunction = useAutoLogin();
  const history = useHistory();
  let initialBizCardArray = [];

  return async (input) => {
    try {
      let currLocation = history.location.pathname;
      switch (currLocation) {
        case (currLocation = "/my-cards"):
        case (currLocation = "/cards"):
          {
            let { data } = await axios.get(`/cards${currLocation}`);
            initialBizCardArray = data;
            setData(initialBizCardArray);
          }
          break;
        case (currLocation = "/login"): {
          try {
            let { data } = await axios.post(`/users${currLocation}`, input);
            initialBizCardArray = data;
            setData(initialBizCardArray);
            localStorage.setItem("token", data.token);
            autoLoginFunction(data.token);
            setTimeout(() => {
              let userInfo = jwt_decode(data.token);
              userInfo && userInfo.biz
                ? history.push("/my-cards")
                : history.push("/");
            }, 100);
            toast(`🦄 Logged in!`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } catch (error) {}
        }
        case (currLocation = "/register"):
          {
            let { data } = await axios.post(`/users${currLocation}`, input);
            initialBizCardArray = data;
            setData(initialBizCardArray);
          }
          break;
      }
    } catch (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return { error };
    }
  };

  // return { data, setData, initialBizCardArray };
};

export default useFetch;
