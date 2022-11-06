import Joi from "joi-browser";

const editCardSchema = {
  title: Joi.string().min(1).max(100).required().label("Name"),
  subTitle: Joi.string().min(1).max(100).required().label("Title"),
  description: Joi.string().min(1).max(100).required().label("Description"),
  address: Joi.string().min(1).max(100).required().label("Address"),
  phone: Joi.string().min(1).max(10).required().label("Phone number"),
  url: Joi.string().min(1).max(1000).required().label("Image"),
};

export default editCardSchema;
