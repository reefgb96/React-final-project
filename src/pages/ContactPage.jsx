import React, { useState } from "react";
import Iframe from "react-iframe";
import { useHistory } from "react-router-dom";
import validate from "validation/validation";
import ContactSchema from "validation/contact.validation";
import { toast } from "react-toastify";

const ContactPage = () => {
  const [msgInput, setMsgInput] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  let newMsgInput = JSON.parse(JSON.stringify(msgInput));

  const handleMsgInputChange = (ev) => {
    newMsgInput[ev.target.id] = ev.target.value;
    setMsgInput(newMsgInput);
  };

  const handleContactSubmit = (ev) => {
    ev.preventDefault();
    const { error } = validate(msgInput, ContactSchema);
    if (error) {
      setErrors(error.details);
      let errorMsgs = "";
      for (let errorItem of error.details) {
        switch (errorItem.type) {
          case "any.empty":
            errorMsgs += `${errorItem.message}. `;
            break;
          case "string.max":
            errorMsgs += `${errorItem.context.label} length must be at least ${errorItem.context.limit} characters long, `;
            break;
          default:
            errorMsgs += "something went wrong,";
            break;
        }
      }
      return;
    }
    setMsgInput({
      name: "",
      email: "",
      msg: "",
    });
    toast("🦄 Thanks for your message!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      history.push("/");
    }, 2500);
  };

  return (
    <div className="container my-5">
      <div className="row border shadow">
        <div className="col d-flex justify-content-center align-items-center">
          <form onSubmit={handleContactSubmit} className="login-form p-5">
            <h1 className="mb-5 text-center">Leave a message</h1>
            <div className="mb-4">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="name"
                value={msgInput.name}
                onChange={handleMsgInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control rounded-0"
                id="email"
                value={msgInput.email}
                onChange={handleMsgInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="msg" className="form-label">
                Example textarea
              </label>
              <textarea
                className="form-control rounded-0"
                id="msg"
                rows="6"
                value={msgInput.msg}
                onChange={handleMsgInputChange}
              ></textarea>
            </div>
            <button className="form-send-btn w-25">Send</button>
            <div className="err-msg my-4">
              <ul>
                {errors &&
                  errors.map((item, idx) => {
                    return (
                      <li key={"error-key-" + idx} className="text-danger my-1">
                        {item.message}.
                      </li>
                    );
                  })}
              </ul>
            </div>
          </form>
        </div>
        <div className="col d-flex justify-content-center align-items-center ">
          <div className="desc mt-4">
            <h4 className="my-4">Address:</h4>
            <h6 className="my-3">Hertzel 2 Jerusalem Israel</h6>
            <br />
            <h4 className="my-4">Opening Hours:</h4>
            <h6 className="my-3">sunday-thursday: 08:00-18:00</h6>
            <h6 className="my-3">friday: 09:00-13:00</h6>
          </div>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.362676468608!2d35.202148184519906!3d31.787864341064353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d630e6cc2d47%3A0xc9c9323f3aafb126!2z16nXk9eo15XXqiDXlNeo16bXnCAyLCDXmdeo15XXqdec15nXnQ!5e0!3m2!1siw!2sil!4v1667199324039!5m2!1siw!2sil"
            width="400px"
            height="300px"
            id="google-maps-frame"
            className="map-iframe my-4 mt-5 border shadow"
            display="block"
            position="relative"
          />
          <Iframe
            url="https://embed.waze.com/iframe?zoom=16&lat=31.787860&lon=35.199959&ct=livemap"
            width="400px"
            height="300px"
            id="waze-maps-frame"
            className="map-iframe my-4 border shadow"
            display="block"
            position="relative"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
