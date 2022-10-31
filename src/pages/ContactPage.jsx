import React from "react";
import Iframe from "react-iframe";

const ContactPage = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.362676468608!2d35.202148184519906!3d31.787864341064353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d630e6cc2d47%3A0xc9c9323f3aafb126!2z16nXk9eo15XXqiDXlNeo16bXnCAyLCDXmdeo15XXqdec15nXnQ!5e0!3m2!1siw!2sil!4v1667199324039!5m2!1siw!2sil"
            width="400px"
            height="300px"
            id="google-maps-frame"
            className="map-iframe mx-2 border shadow"
            display="block"
            position="relative"
          />
          <Iframe
            url="https://embed.waze.com/iframe?zoom=16&lat=31.787860&lon=35.199959&ct=livemap"
            width="400px"
            height="300px"
            id="waze-maps-frame"
            className="waze-iframe mx-2 border shadow"
            display="block"
            position="relative"
          />
        </div>
        <div className="col-4">
          <div className="login-form p-5">
            <h1 className="mb-5 text-center">Leave a message</h1>
            <div className="mb-4">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="exampleFormControlInput1"
                placeholder="Jhon Doe"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="exampleFormControlInput2" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control rounded-0"
                id="exampleFormControlInput2"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Example textarea
              </label>
              <textarea
                className="form-control rounded-0"
                id="exampleFormControlTextarea1"
                rows="6"
              ></textarea>
            </div>
            <button className="form-send-btn w-25">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
