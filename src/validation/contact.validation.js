import Joi from "joi-browser";

const ContactSchema = {
  name: Joi.string().max(50).required().label("Name"),
  email: Joi.string().email().max(100).required().label("Email"),
  msg: Joi.string().max(100).required().label("Massage"),
};

export default ContactSchema;
