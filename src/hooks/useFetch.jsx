import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  let initialBizCardArray = [];

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get(url);
        initialBizCardArray = data;
        setData(initialBizCardArray);
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
