import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";
import validate from "validation/validation";
import editCardSchema from "validation/editCard.validation";
import { toast } from "react-toastify";
import "../components/style/pages/editCardPage.css";

const EditCardPage = () => {
  const [cardData, setCardData] = useState({
    title: "",
    subTitle: "",
    description: "",
    address: "",
    phone: "",
    url: "",
  });
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get(`/cards/card/${id}`);
        setCardData({
          title: data.title,
          subTitle: data.subTitle,
          description: data.description,
          address: data.address,
          phone: data.phone,
          url: data.image.url,
        });
      } catch {
        toast.error("😭 Something went wrong", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    })();
  }, []);

  const handleInputChange = (ev) => {
    let newCardData = JSON.parse(JSON.stringify(cardData));
    if (newCardData.hasOwnProperty(ev.target.id)) {
      newCardData[ev.target.id] = ev.target.value;
      setCardData(newCardData);
    }
  };

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();
    const { error } = validate(cardData, editCardSchema);
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
            errorMsgs += `${errorItem.context.label} length must be at least ${errorItem.context.limit} characters long. `;
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
      let { data } = await axios.put(
        `/cards/${id}`,
        {
          ...cardData,
          alt: cardData.title,
        },
        history.push("/my-cards")
      );
    } catch (err) {
      console.log("err", err);
      //   toast.error(err., {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //   });
      //   return;
    }
  };

  return (
    <div className="container-fluid">
      <form
        className="fw-semibold d-flex flex-column align-items-center justify-content-center p-5 w-100"
        onSubmit={handleFormSubmit}
      >
        <h1>Edit Card</h1>
        <div className="my-4 edit-input">
          <label htmlFor="title" className="form-label fs-4">
            Full name
          </label>
          <input
            type="text"
            className="form-control rounded-0"
            id="title"
            // placeholder={cardData.title}
            value={cardData.title}
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
            // placeholder={cardData.subTitle}
            value={cardData.subTitle}
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
            // placeholder={cardData.description}
            value={cardData.description}
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
            // placeholder={cardData.phone}
            value={cardData.phone}
            onChange={handleInputChange}
            pattern="^0\d([\d]{0,1})([-]{0,1})\d{7}$"
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
            // placeholder={cardData.address}
            value={cardData.address}
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
            // placeholder={cardData.image}
            value={cardData.url}
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

export default EditCardPage;
