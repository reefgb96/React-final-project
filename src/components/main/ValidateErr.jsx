import React from "react";
import validate from "../../validation/validation";
import { toast } from "react-toastify";

const ValidateErr = (toValidate, schema) => {
  const { error } = validate(toValidate, schema);
  if (error) {
    let errorMsgs = "";
    for (let errorItem of error.details) {
      switch (errorItem.type) {
        case "any.empty":
          errorMsgs += `${errorItem.message}., `;
          break;
        case "string.max":
          errorMsgs += `${errorItem.context.label} length must be at least ${errorItem.context.limit} characters long, `;
          break;
        default:
          errorMsgs += "Email or password are Invalid.";
          break;
      }
    }
    toast.error(errorMsgs, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return;
  }

  return { error };
};
export default ValidateErr;
