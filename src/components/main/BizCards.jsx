import React, { useState } from "react";
import { Link } from "react-router-dom";

const BizCards = ({
  name,
  imgSrc,
  imgAlt,
  subtitle,
  desc,
  phone,
  address,
  id,
  onDelete,
  itemKey,
  moreInfoLink,
  editCardLink,
  displayBtnMoreInfo,
  displayBtnEdit,
  displayBtnDelete,
  forwardRef,
  hover,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleDeleteClick = () => {
    onDelete(id);
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div
        className={`card biz-card mx-2 my-2 ${isHovering && "shadow"}`}
        key={itemKey}
        id={id}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        ref={forwardRef}
      >
        <div className="row">
          <div className="col d-flex flex-column justify-content-center align-items-center border-end">
            <h5 className="card-title">{name}</h5>
            <div className="img-wrapper d-flex align-self-center">
              <img
                src={imgSrc}
                className="card-img-top img-fluid w-100 p-3 my-1"
                alt={imgAlt}
              />
            </div>
          </div>
          <div className="col d-flex justify-content-end align-items-center">
            <div className="card-body border-top border-bottom">
              <p className="card-text">{subtitle}</p>
              <p className="card-text">{desc}</p>
              <p className="card-text">Tel: {phone}</p>
              <p className="card-text">Address: {address}</p>
            </div>
            <div
              className={`card-btns w-100 text-center ${isHovering && "show"}`}
            >
              {displayBtnEdit && hover && (
                <Link
                  to={`/edit/${editCardLink}`}
                  className="btn-link btn mx-2"
                >
                  🖋 Edit
                </Link>
              )}
              {displayBtnMoreInfo && hover && (
                <Link
                  to={`/card/${moreInfoLink}`}
                  className="btn-link btn mx-2 my-2"
                  id={id}
                >
                  ℹ More info
                </Link>
              )}
              {displayBtnDelete && hover && (
                <button
                  className="btn-link btn mx-2"
                  onClick={handleDeleteClick}
                >
                  X Delete
                </button>
              )}
            </div>
            <div className={`overlay  ${isHovering && hover && "show"}`}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BizCards;
