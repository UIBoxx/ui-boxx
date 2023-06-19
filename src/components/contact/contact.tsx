import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";
import Desc from "../desc/desc";
import MyHelmet from "../helmet/helmet";

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);

  const CustomToast = ({
    closeToast,
    message,
  }: {
    closeToast: () => void;
    message: string;
  }) => (
    <div className="custom-toast">
      <div className="custom-toast-content">{message}</div>
      <button className="custom-toast-close" onClick={closeToast}>
        Close
      </button>
    </div>
  );

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    // Get the form fields' values
    const nameInput = form.current?.elements.namedItem(
      "user_name"
    ) as HTMLInputElement;
    const emailInput = form.current?.elements.namedItem(
      "user_email"
    ) as HTMLInputElement;

    // Perform validation
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    const validateInputs = () => {
      const nameRegex = /^[a-zA-Z ]+$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return nameRegex.test(name) && emailRegex.test(email);
    };

    if (!validateInputs()) {
      if (!name) {
        toast.error(
          <CustomToast
            message="Please enter your name !"
            closeToast={toast.dismiss}
          />,
          {
            position: toast.POSITION.TOP_RIGHT,
            closeButton: false,
          }
        );
      } else if (!email) {
        toast.error(
          <CustomToast
            message="Please enter your email !"
            closeToast={toast.dismiss}
          />,
          {
            position: toast.POSITION.TOP_RIGHT,
            closeButton: false,
          }
        );
      } else {
        toast.error(
          <CustomToast
            message="Please enter a valid name and email !"
            closeToast={toast.dismiss}
          />,
          {
            position: toast.POSITION.TOP_RIGHT,
            closeButton: false,
          }
        );
      }
      return;
    }
    // Send the email
    emailjs
      .sendForm(
        "service_pa6r2q8",
        "template_nxlpa8n",
        form.current ? form.current : "",
        "vyJCb0dHfAuTRgrz3"
      )
      .then((result) => {
        console.log(result.text);
        toast.success(
          <CustomToast
            message="Your message is sent"
            closeToast={toast.dismiss}
          />,
          {
            position: toast.POSITION.TOP_RIGHT,
            closeButton: false,
            transition: Slide,
          }
        );
        form.current?.reset();
      })
      .catch((error) => {
        console.log(error.text);
        toast.error(
          <CustomToast
            message="An error occurred. Please try again."
            closeToast={toast.dismiss}
          />,
          {
            position: toast.POSITION.TOP_RIGHT,
            closeButton: false,
            transition: Slide,
          }
        );
      });
  };

  return (
    <div className="contact-body">
      <MyHelmet
        title="Contact"
        des="Get in touch with us through our contact page and let us know how we can assist you."
        keywords="Free UI components,Web design,User interfaces,Customizable UI,Free UI components,Free Website design,AI-powered tools,Neumorphic Design,GlassMorphic Design,free Neumorphic Design tool,free GlassMorphic Design tool,Free SVG shape generator,Web development,UX design,Responsive design,Front-end development,Web templates,Design resources,Website elements,UI design inspiration,CSS frameworks,Mobile-friendly design,HTML5 components,Visual design,Interaction design,Web accessibility."
      />
      <Desc
        flexDirection="row"
        title={"Contact Us"}
        desc={
          "UIBoxx.in is a dynamic and innovative website that revolutionizes the world of web design by offering a comprehensive collection of free, fully customizable UI components. With an array of versatile options at your fingertips, creating stunning user interfaces has never been easier. What sets UIBoxx.in apart is its cutting-edge AI-powered tool, which empowers users to generate customized UI components based on their specific prompts. Whether you're a seasoned designer or a novice, UIBoxx.in is your go-to resource for creating visually appealing and user-friendly websites, taking your digital projects to the next level."
        }
      />
      <div className="contact-left">
        {/* <h1>Contact Us</h1> */}
        <p>
          Please fill out the form provided to get in touch with us, and we'll
          get back to you as soon as we can.
        </p>
      </div>
      <div className="contact-right">
        <form ref={form} onSubmit={sendEmail}>
          <div className="fields">
            <label>Name</label>
            <input type="text" name="user_name" id="user_name" />
          </div>
          <div className="fields">
            <label>Email</label>
            <input type="email" name="user_email" id="user_email" />
          </div>
          <div className="fields">
            <label>Message</label>
            <textarea name="message" id="message" />
          </div>
          <input type="submit" value="Send" id="send" />
        </form>
      </div>
      <ToastContainer
        style={{ backgroundColor: "transparent", color: "#ddd" }}
      />
    </div>
  );
};

export default ContactUs;
