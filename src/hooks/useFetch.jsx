import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const useFetch = () => {
  const [data, setData] = useState([]);
  const history = useHistory();
  let initialBizCardArray = [];

  useEffect(() => {
    (async () => {
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
          case (currLocation = "/login"):
          case (currLocation = "/register"):
            {
              let { data } = await axios.post(`/users${currLocation}`);
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
    })();
  }, []);

  return { data, setData, initialBizCardArray };
};

export default useFetch;
