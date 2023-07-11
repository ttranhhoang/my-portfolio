"use client";
import { SectionWrapper } from "@/hoc";
import { slideIn } from "@/utils";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import { EarthCanvas } from "../Canvas";
import {
  BsFacebook,
  BsFillEnvelopeAtFill,
  BsTelephoneInboundFill,
} from "react-icons/bs";

interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  messages: string;
}
const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<IForm>({
    firstName: "",
    lastName: "",
    email: "",
    messages: "",
  });
  const handleChange = (e: any) => {
    const { target } = e;
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID || "service_0ny8doh",
        process.env.EMAILJS_TEMPLATE_ID || "template_uhyakzg",
        {
          from_name: formValues.firstName + formValues.lastName,
          to_name: "Truong Tran Huy Hoang",
          from_email: formValues.email,
          to_email: "truongtranhuyhoang@gmail.com",
          messages: formValues.messages,
        },
        process.env.EMAILJS_PUBLIC_KEY || "3OG9In3YcpZXpt9aT"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible!");
          setFormValues({
            firstName: "",
            lastName: "",
            email: "",
            messages: "",
          });
        },
        (error: any) => {
          setLoading(true);
          console.log("error mail", error);
          alert("Opps, something went wrong. Please try again.");
        }
      );
  };
  return (
    <div className="contact">
      <motion.div
        variants={slideIn("left", "tween", 0.5, 1)}
        className="contact_social"
      >
        <h3 className="contact_heading">Get In Touch</h3>
        <div className="contact_item">
          {/* <i className="fas fa-phone-alt contact_icon"></i> */}
          <BsTelephoneInboundFill className="contact_icon" />
          <div className="contact_info">
            <h3 className="contact_info-text">Phone</h3>
            <p className="contact_info-textgrey">0767806596</p>
          </div>
        </div>

        <div className="contact_item">
          {/* <i className="fab fa-facebook contact_icon"></i> */}
          <BsFacebook className="contact_icon" />
          <div className="contact_info">
            <h3 className="contact_info-text">Facebook</h3>
            <p className="contact_info-textgrey">facebook.com/tt.hhoang.168</p>
          </div>
        </div>

        <div className="contact_item">
          {/* <i className="fas fa-envelope contact_icon"></i> */}
          <BsFillEnvelopeAtFill className="contact_icon" />
          <div className="contact_info">
            <h3 className="contact_info-text">Email</h3>
            <p className="contact_info-textgrey">
              truongtranhuyhoang@gmail.com
            </p>
          </div>
        </div>
        <div className="form_contact">
          <form onSubmit={handleSubmitForm}>
            <div className="form_row">
              <div className="form_control">
                {/* <!-- <label for="name">Name</label> --> */}
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="input_field"
                  required
                  value={formValues.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form_control">
                {/* <!-- <label for="name">Name</label> --> */}
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="input_field"
                  required
                  value={formValues.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form_row">
              <div className="form_control w-full">
                {/* <!-- <label for="email">Email</label> --> */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="input_field"
                  required
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form_row">
              <div className="form_control">
                {/* <!-- <label for="message">Message</label> --> */}
                <textarea
                  id="messages"
                  cols={60}
                  rows={5}
                  placeholder="Message"
                  name="messages"
                  className="input_field"
                  value={formValues.messages}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form_row">
              <div className="form_control btn">
                <input
                  type="submit"
                  value={loading ? "Sending..." : "Send"}
                  id="submit_btn"
                  className="submit_btn"
                />
              </div>
            </div>
          </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.5, 1)}
        className="contact_earth"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact", "Contact Me");
