import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast ,Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);

  

  const CustomToast = ({ closeToast, message }: { closeToast: () => void; message: string }) => (
    <div className="custom-toast">
      <div className="custom-toast-content">
        {message}
      </div>
      <button className="custom-toast-close" onClick={closeToast}>
        Close
      </button>
    </div>
  );

  
  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
  
    // Get the form fields' values
    const nameInput = form.current?.elements.namedItem("user_name") as HTMLInputElement;
    const emailInput = form.current?.elements.namedItem("user_email") as HTMLInputElement;
  
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
        toast.error(<CustomToast message="Please enter your name !" closeToast={toast.dismiss} />, {
          position: toast.POSITION.TOP_RIGHT,
          closeButton: false, 
        });
      } else if (!email) {
        toast.error(<CustomToast message="Please enter your email !" closeToast={toast.dismiss} />, {
          position: toast.POSITION.TOP_RIGHT,
          closeButton: false, 
        });
      } else {
        toast.error(<CustomToast message="Please enter a valid name and email !" closeToast={toast.dismiss} />, {
          position: toast.POSITION.TOP_RIGHT,
          closeButton: false, 
        });
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
        toast.success(<CustomToast message="Your message is sent" closeToast={toast.dismiss} />, {
          position: toast.POSITION.TOP_RIGHT,
          closeButton: false, 
          transition: Slide, 
        });
        form.current?.reset(); 
      })
      .catch((error) => {
        console.log(error.text);
        toast.error(<CustomToast message="An error occurred. Please try again." closeToast={toast.dismiss} />, {
          position: toast.POSITION.TOP_RIGHT,
          closeButton: false, 
          transition: Slide,
        });
      });
  };
  
  

  return (
    <div className="contact-body">
      <div className="contact-left">
      <h1>Contact Us</h1>
      <p>Please fill out the form below to get in touch with us. We'll respond to your message as soon as possible.</p>
      </div>
      <div className="contact-right">
        <form ref={form} onSubmit={sendEmail}>
          <div className="fields">
          <label>Name</label>
          <input type="text" name="user_name" id="user_name"/>
          </div>
          <div className="fields">
          <label>Email</label>
          <input type="email" name="user_email" id="user_email"/>
          </div>
          <div className="fields">
          <label>Message</label>
          <textarea name="message" id="message"/>
          </div>
          <input type="submit" value="Send" id="send"/>
        </form>

      </div>
      <ToastContainer style={{backgroundColor: 'transparent',color:'#ddd'}}/>
    </div>
  );
};

export default ContactUs;
