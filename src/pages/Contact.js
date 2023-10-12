import React, { useContext, useRef, useState } from "react";

import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

import MailImg from "../img/contact/mail.jpg";
import { CursorContext } from "../context/CursorContext";
import { transition1 } from "../transitions";

const successToast = () => toast.success("Message sent!");
const notify = () =>
  toast("Toast Test Number 1!", {
    icon: "🚀", // You can customize the icon
    style: {
      backgroundColor: "blue", // Customize the background color
      color: "white", // Customize the text color
    },
  });
const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const form = useRef();

  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zk1pk8l",
        "template_lntcpip",
        form.current,
        "u59CZwn029Box-DPW"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setIsSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section bg-white"
    >
      <Toaster />
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
          {/* bg */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10"
          ></motion.div>
          {/* text & form */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="lg:flex-1 lg:pt-32 px-4"
          >
            <h1 className="h1">Contact me</h1>
            <p className="mb-12">Let's talk some more about coding!</p>
            {/* form */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-y-4"
            >
              <div className="flex gap-x-10">
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                />
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  name="user_email"
                  placeholder="Your email address"
                />
              </div>
              <input
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                type="text"
                name="message"
                placeholder="Your message"
              />
              <button
                className="btn mb-[30px] mx-auto lg:mx-0 self-start"
                onClick={() => isSent && successToast()}
              >
                Send it
              </button>
            </form>
          </div>

          {/* image */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ transition: transition1, duration: 1.5 }}
            className="lg:flex-1"
          >
            <img src={MailImg} alt="" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
