import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";
import validate from "validation/validation";
import editCardSchema from "validation/editCard.validation";
import { toast } from "react-toastify";
import "../components/style/pages/editCardPage.css";

const CreateCardPage = () => {
  const [bizCardData, setBizCardData] = useState({
    title: "",
    subTitle: "",
    description: "",
    address: "",
    phone: "",
    url: "",
  });
  const history = useHistory();
  window.scrollTo(0, 0);

  const handleInputChange = (ev) => {
    let newBizCardData = JSON.parse(JSON.stringify(bizCardData));
    if (newBizCardData.hasOwnProperty(ev.target.id)) {
      newBizCardData[ev.target.id] = ev.target.value;
      setBizCardData(newBizCardData);
    }
  };

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();
    const { error } = validate(bizCardData, editCardSchema);
    if (error) {
      console.log(error.details);
      let errorMsgs = "";
      for (let errorItem of error.details) {
        switch (errorItem.type) {
          case "any.empty":
            errorMsgs += `${errorItem.message}. `;
            break;
          case "string.min":
            errorMsgs += `${errorItem.context.label} length must be at least ${errorItem.context.limit} characters long. `;
            break;
          case "string.max":
            errorMsgs += `${errorItem.context.label} length must be less ${errorItem.context.limit} characters long. `;
            break;
          case "string.domain":
            errorMsgs += `${errorItem.context.label} length must ${errorItem.context}. `;
            break;
          default:
            errorMsgs += "something went wrong. ";
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
    try {
      let { data } = await axios.post(
        `/cards`,
        {
          ...bizCardData,
          alt: bizCardData.title,
        },
        history.push("/my-cards")
      );
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div className="container-fluid">
      <form
        className="fw-semibold d-flex flex-column align-items-center justify-content-center p-5 w-100"
        onSubmit={handleFormSubmit}
      >
        <h1>Create Card</h1>
        <div className="my-4 edit-input">
          <label htmlFor="title" className="form-label fs-4">
            Full name
          </label>
          <input
            type="text"
            className="form-control rounded-0"
            id="title"
            placeholder="John Doe"
            value={bizCardData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="my-4 edit-input">
          <label htmlFor="subTitle" className="form-label fs-4">
            Title/Job
          </label>
          <input
            type="text"
            className="form-control rounded-0"
            id="subTitle"
            placeholder="CEO & Founder"
            value={bizCardData.subTitle}
            onChange={handleInputChange}
          />
        </div>
        <div className="my-4 edit-input">
          <label htmlFor="description" className="form-label fs-4">
            Description
          </label>
          <input
            type="text"
            className="form-control rounded-0"
            id="description"
            placeholder="FakeBiz™"
            value={bizCardData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="my-4 edit-input">
          <label htmlFor="phone" className="form-label fs-4">
            Telephone number
          </label>
          <input
            type="text"
            className="form-control rounded-0"
            id="phone"
            placeholder="08-4532662"
            value={bizCardData.phone}
            onChange={handleInputChange}
            // pattern="^0\d([\d]{0,1})([-]{0,1})\d{7}$"
          />
        </div>
        <div className="my-4 edit-input">
          <label htmlFor="address" className="form-label fs-4">
            Address
          </label>
          <input
            type="text"
            className="form-control rounded-0"
            id="address"
            placeholder="Rothschild 8, Tel-Aviv, Israel."
            value={bizCardData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="my-4 edit-input">
          <label htmlFor="url" className="form-label fs-4">
            Card Image
          </label>
          <input
            type="text"
            className="form-control rounded-0"
            id="url"
            placeholder="data:image/jpeg;base64,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"
            value={bizCardData.url}
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-3 edit-input d-flex justify-content-center align-self-center">
          <button type="submit" className="btn btn-dark rounded-0">
            Submit
          </button>
          <Link to="/my-cards" className="btn btn-danger mx-4 rounded-0">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateCardPage;
